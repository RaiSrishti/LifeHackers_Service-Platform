from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from bson import ObjectId

# Pydantic models for validation and response serialization
class UserRegistration(BaseModel):
    email: EmailStr
    password: str
    full_name: str
    role: str  # "customer" or "service_provider"
    location: Optional[str] = None
    preferences: Optional[dict] = None

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class UserProfile(BaseModel):
    full_name: Optional[str] = None
    location: Optional[str] = None
    preferences: Optional[dict] = None

# MongoDB model (to interact with MongoDB directly)
class UserInDB(BaseModel):
    id: Optional[str] = Field(None, alias="_id")
    email: EmailStr
    password: str
    full_name: str
    role: str
    location: Optional[str] = None
    preferences: Optional[dict] = None

    class Config:
        from_attributes = True  # Enable conversion from MongoDB to Pydantic models
