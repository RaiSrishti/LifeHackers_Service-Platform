import os

MONGO_URI = os.getenv("MONGO_URI", "MONGO_URL")
SECRET_KEY = os.getenv("SECRET_KEY", "your_secret_key")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

