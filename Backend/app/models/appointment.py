from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime

class AppointmentCreate(BaseModel):
    service_id: str       # Reference to the service
    customer_id: str      # Reference to the customer
    provider_id: str      # Reference to the service provider
    appointment_time: datetime
    notes: Optional[str] = None

class AppointmentResponse(BaseModel):
    id: str = Field(..., alias="_id")
    service_id: str
    customer_id: str
    provider_id: str
    appointment_time: datetime
    status: str  # "pending", "accepted", "canceled"
    notes: Optional[str] = None

    class Config:
        orm_mode = True
