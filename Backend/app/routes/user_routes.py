from fastapi import APIRouter, HTTPException, Depends
from app.models.user import UserRegistration, UserLogin, UserProfile, UserInDB
from app.services.user_service import register_user, login_user, get_user_profile, update_user_profile

router = APIRouter()

@router.post("/register")
async def register(user: UserRegistration):
    return await register_user(user)

@router.post("/login")
async def login(credentials: UserLogin):
    return await login_user(credentials)

@router.get("/profile")
async def profile(email: str):
    return await get_user_profile(email)

@router.put("/profile")
async def update_profile(email: str, profile: UserProfile):
    return await update_user_profile(email, profile)
