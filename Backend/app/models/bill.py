from pydantic import BaseModel, EmailStr
from datetime import datetime

class Bill(BaseModel):
    bill_id: str
    service_name: str
    service_category: str
    amount: float
    customer_name: str
    customer_email: EmailStr
    issue_date: datetime
