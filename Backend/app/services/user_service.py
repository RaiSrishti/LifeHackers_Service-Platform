from app.models.user import UserInDB, UserRegistration, UserLogin, UserProfile
from app.core.auth import hash_password, verify_password, create_access_token
from app.database import db
from fastapi import HTTPException

# User registration
async def register_user(user: UserRegistration):
    existing_user = await db.users.find_one({"email": user.email})
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    hashed_password = hash_password(user.password)
    user_data = user.dict()
    user_data["password"] = hashed_password
    result = await db.users.insert_one(user_data)
    return {"id": str(result.inserted_id), "message": "User registered successfully"}

# User login
async def login_user(credentials: UserLogin):
    user = await db.users.find_one({"email": credentials.email})
    if not user or not verify_password(credentials.password, user["password"]):
        raise HTTPException(status_code=401, detail="Invalid email or password")
    
    access_token = create_access_token(data={"sub": user["email"], "role": user["role"]})
    return {"access_token": access_token, "token_type": "bearer"}

# Get user profile
async def get_user_profile(email: str):
    user = await db.users.find_one({"email": email})
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    user["_id"] = str(user["_id"])  # Convert ObjectId to string
    del user["password"]
    return user

# Update user profile
async def update_user_profile(email: str, profile: UserProfile):
    updated_data = {k: v for k, v in profile.dict().items() if v is not None}
    result = await db.users.update_one({"email": email}, {"$set": updated_data})
    if result.modified_count == 0:
        raise HTTPException(status_code=400, detail="No changes made or user not found")
    return {"message": "Profile updated successfully"}
