from os import stat
from flask.json import jsonify
from pydantic.networks import HttpUrl
from sqlalchemy.sql.sqltypes import Integer
from starlette.requests import HTTPConnection
from api import UserSession, SessionMap
from fastapi import APIRouter, File, UploadFile ,Depends , Request
from sqlalchemy.orm import Session
from common.convertDB import to_list, to_dict
from fastapi import HTTPException
from repositories.UserRepository import UserRepository
from validate import schema
from api import get_db
from middlewares.authenicate import authenicate
from middlewares.securities import Security
from repositories.TourRepository import TourRepository
from config.configs import config_model
from services.TourDetailService import TourDetailService

security = Security(config_model)

router = APIRouter()

tourRepository = TourRepository()

tourDetailService = TourDetailService()


@router.get("/get-tourdetail/")
def get_tourDetail(tourDetail : schema.TourDetailFilter ,db: Session = Depends(get_db)):
    check, db_tourDetail = tourDetailService.getTourDetails(db, tourDetail)
    if not check:
        raise HTTPException(status_code=400, detail="TourDetail not found!")
    return {"data" : to_list(db_tourDetail)}


@router.post("/filter-tour")
def filter_tour(tourDetail: schema.TourDetailFilter , db : Session = Depends(get_db)):
    check, db_tourDetail = tourDetailService.filterToutDetail(db, tourDetail)
    if not check:
        raise HTTPException(status_code=400, detail="Tour Not Exist!")
    return {"data" : to_dict(db_tourDetail)}


@router.get("/get-tour")
def get_tour(db: Session = Depends(get_db)):
    db_tour = tourRepository.get_Tours(db)
    db_tour = to_list(db_tour)
    if len(db_tour) < 1:
        raise HTTPException(status_code=400, detail="Tour not found!")
    return {"data" : db_tour}


@router.post("/filter-tour")
def filter_permissions(tour: schema.TourFilter , db : Session = Depends(get_db)):
    check, db_permission = tourRepository.get_Tour_byName(db, tour.name)
    if not check:
        raise HTTPException(status_code=400, detail="Tour Not Exist!")
    return {"data" : to_dict(db_permission)}


@router.post('/create-tour')
def create_permission(tour: schema.TourCreate ,db : Session = Depends(get_db)):
    check = tourRepository.create_Tour(db, tour)
    if not check:
        raise HTTPException(status_code=400, detail="Tour Existed!")
    return {"data": "Success!"}


@router.post('/delete-tour')
def delete_permissions(tour : schema.TourDelete ,db : Session = Depends(get_db)):
    check , tourObject= tourRepository.get_Tour_byName(db, tour.name)
    if check:
        check_delete =  tourRepository.delete_tour(db, tourObject)

    if not check_delete:
        raise HTTPException(status_code=400, detail="Not Found Tour Name!")
    return {"data": "Success!"}
