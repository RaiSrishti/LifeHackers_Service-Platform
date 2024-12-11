from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
from app.routes import user_routes, service_routes, appointments_routes

app = FastAPI()

# Enable CORS for localhost:3000 (your frontend URL)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow only from your frontend's origin
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)

# Include routes for users, services, and appointments
app.include_router(user_routes.router, prefix="/users", tags=["Users"])
app.include_router(service_routes.router, prefix="/services", tags=["Services"])
app.include_router(appointments_routes.router, prefix="/api/v1", tags=["Appointments"])

@app.get("/")
async def root():
    return {"message": "Welcome to ZETAONE!"}
