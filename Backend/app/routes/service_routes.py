# from fastapi import APIRouter, Depends, HTTPException
# from app.models.service import ServiceCreate, ServiceSearch, ServiceResponse
# from app.services.service_service import create_service, get_services, search_services
# from typing import List

# router = APIRouter()

# # Route for service providers to create a service
# @router.post("/create", response_model=ServiceResponse)
# async def create_service_endpoint(service: ServiceCreate):
#     """
#     Endpoint for service providers to create a service.
#     """
#     return await create_service(service)

# # Route for customers to view all services
# @router.get("/", response_model=List[ServiceResponse])
# async def list_services():
#     """
#     Endpoint for customers to list all available services.
#     """
#     return await get_services()

# # Route for customers to search and filter services
# @router.post("/search", response_model=List[ServiceResponse])
# async def search_services_endpoint(filters: ServiceSearch):
#     """
#     Endpoint for customers to search and filter services.
#     """
#     return await search_services(filters)
from fastapi import APIRouter, Depends, HTTPException
from app.models.service import ServiceCreate, ServiceSearch, ServiceResponse
from app.services.service_service import create_service, get_services, search_services
from typing import List

router = APIRouter()

# Route for service providers to create a service
@router.post("/create", response_model=ServiceResponse)
async def create_service_endpoint(service: ServiceCreate):
    """
    Endpoint for service providers to create a service.
    """
    return await create_service(service)

# Route for customers to view all services
@router.get("/", response_model=List[ServiceResponse])
async def list_services():
    """
    Endpoint for customers to list all available services.
    """
    return await get_services()

# Route for customers to search and filter services
@router.post("/search", response_model=List[ServiceResponse])
async def search_services_endpoint(filters: ServiceSearch):
    """
    Endpoint for customers to search and filter services.
    """
    return await search_services(filters)
