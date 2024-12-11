from motor.motor_asyncio import AsyncIOMotorClient
from app.core.config import MONGO_URI

# MongoDB connection setup
client = AsyncIOMotorClient(MONGO_URI)

# Database instance
db = client.zetaone  # Replace 'zetaone' with your desired database name

# Dependency to get the database
def get_database():
    return db
