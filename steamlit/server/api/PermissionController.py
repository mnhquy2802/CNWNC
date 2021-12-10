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
from repositories.PermisionRepository import PermissionRepository
from config.configs import config_model

security = Security(config_model)

router = APIRouter()

permissionRepository = PermissionRepository()

@router.get("/get-permission/")
def get_permissions(db: Session = Depends(get_db)):
    check, db_user = permissionRepository.get_permissions(db)
    print(db_user)
    if not check:
        raise HTTPException(status_code=400, detail="Permission not found!")
    return {"data" : to_list(db_user)}


@router.post("/filter-permissions")
def filter_permissions(permission: schema.FilterPermission , db : Session = Depends(get_db)):
    check, db_permission = permissionRepository.get_permission_byName(db, permission.name)
    if not check:
        raise HTTPException(status_code=400, detail="Permission Not Found!")
    return {"data" : to_dict(db_permission)}


@router.post('/create-permissions')
def create_permission(permission: schema.PermissionCreate ,db : Session = Depends(get_db)):
    check = permissionRepository.create_permission(db, permission)
    if not check:
        raise HTTPException(status_code=400, detail="Permission Existed!")
    return {"data": "Success!"}


@router.post('/delete-permission')
def delete_permissions(permission : schema.PermissionDelete ,db : Session = Depends(get_db)):
    check , permissionObject= permissionRepository.get_permission_byName(db, permission.name)
    if check:
        check_delete =  permissionRepository.DeletePermission(db, permissionObject)
    if not check_delete:
        raise HTTPException(status_code=400, detail="Not Found Permission Name!")
    return {"data": "Success!"}
