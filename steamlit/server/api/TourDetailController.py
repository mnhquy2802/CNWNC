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
from repositories.TourDetailRepository import TourDetailRepository
from services.TourDetailService import TourDetailService
from config.configs import config_model

security = Security(config_model)

router = APIRouter()

tourDetailService = TourDetailService()


@router.post("/tours/")
# @authenicate()1
def get_user(tourdetail: schema.ListTourDetail , db: Session = Depends(get_db)):
    check, db_tourDetail = tourDetailService.getTourDetailByTourId(db, tourdetail.tourid)
    if not check:
        raise HTTPException(status_code=400, detail="TourDetail not found!")
    return {"data" : to_list(db_tourDetail)}


@router.post("/findtour")
def get_user(tourdetail: schema.TourDetail , db: Session = Depends(get_db)):
    check, db_tourDetail = tourDetailService.getTourDetailById(db, tourdetail.tourDetailId)
    if not check:
        raise HTTPException(status_code=400, detail="TourDetail not found!")
    return {"data" : to_dict(db_tourDetail)}

# @router.get("/tours/")
# # @authenicate()
# def get_user(db: Session = Depends(get_db)):
#     check, db_tourDetail = tourDetailService.getTourDetails(db)
#     if not check:
#         raise HTTPException(status_code=400, detail="TourDetail not found!")
#     return {"data" : to_list(db_tourDetail)}


@router.post("/filter-tour")
def filter_permissions(tourDetail: schema.TourDetailFilter , db : Session = Depends(get_db)):
    check, db_permission = tourDetailService.filterToutDetail(db, tourDetail)
    if not check:
        raise HTTPException(status_code=400, detail="Tour Not Exist!")
    return {"data" : to_dict(db_permission)}


@router.post('/create-tourdetail')
def create_permission(tourDetail: schema.TourDetailCreate ,db : Session = Depends(get_db)):
    check = tourDetailService.createTourDetail(db, tourDetail)
    if not check:
        raise HTTPException(status_code=400, detail="Tour Existed!")
    return {"data": "Success!"}


@router.post('/delete-tour')
def delete_permissions(tourDetail : schema.TourDetailDelete ,db : Session = Depends(get_db)):
    check , tourDetialObject= tourDetailService.getTourDetailById(db, tourDetail.tourDetailId)
    if check:
        check_delete =  tourDetailService.delete_tour(db, tourDetialObject)

    if not check_delete:
        raise HTTPException(status_code=400, detail="Not Found Tour Name!")
    return {"data": "Success!"}
