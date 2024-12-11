from fastapi import APIRouter, HTTPException, Depends
from datetime import datetime
from bson import ObjectId
from typing import List
from app.database import db
from app.models.appointment import AppointmentCreate, AppointmentResponse

router = APIRouter()

# Create an appointment
@router.post("/", response_model=AppointmentResponse)
async def create_appointment(appointment: AppointmentCreate):
    appointment_data = {
        "service_id": appointment.service_id,
        "customer_id": appointment.customer_id,
        "provider_id": appointment.provider_id,
        "appointment_time": appointment.appointment_time,
        "status": "pending",  # Default status
        "notes": appointment.notes,
    }
    result = await db["appointments"].insert_one(appointment_data)
    appointment_data["_id"] = str(result.inserted_id)
    return appointment_data

# Accept or cancel an appointment
@router.patch("/{appointment_id}")
async def update_appointment_status(appointment_id: str, status: str):
    if status not in ["accepted", "canceled"]:
        raise HTTPException(status_code=400, detail="Invalid status")
    
    result = await db["appointments"].update_one(
        {"_id": ObjectId(appointment_id)},
        {"$set": {"status": status}}
    )
    
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Appointment not found")
    
    # Notify customer (placeholder for notification logic)
    notify_customer(appointment_id, status)

    return {"message": f"Appointment {status}"}

# Helper function for notifications
def notify_customer(appointment_id: str, status: str):
    # Placeholder logic for notifications
    print(f"Notify customer: Appointment {appointment_id} has been {status}.")
