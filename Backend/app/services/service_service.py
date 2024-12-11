from app.database import get_database
from app.models.service import ServiceCreate, ServiceResponse, ServiceSearch
from typing import List

db = get_database()
services_collection = db.services

# Create a new service
async def create_service(service: ServiceCreate) -> ServiceResponse:
    service_data = service.dict()
    result = await services_collection.insert_one(service_data)
    service_data["_id"] = str(result.inserted_id)
    return ServiceResponse(**service_data)

# List all services
async def get_services() -> List[ServiceResponse]:
    services = await services_collection.find().to_list(100)
    for service in services:
        service["_id"] = str(service["_id"])
    return [ServiceResponse(**service) for service in services]

# Search and filter services
async def search_services(filters: ServiceSearch) -> List[ServiceResponse]:
    query = {}
    if filters.category:
        query["category"] = filters.category
    if filters.min_price is not None:
        query["price"] = {"$gte": filters.min_price}
    if filters.max_price is not None:
        query.setdefault("price", {})["$lte"] = filters.max_price
    if filters.availability is not None:
        query["availability"] = filters.availability

    services = await services_collection.find(query).to_list(100)
    for service in services:
        service["_id"] = str(service["_id"])
    return [ServiceResponse(**service) for service in services]
