import config.configs as cf
from common.minio import MinioModel
from init import SessionLocal

UserSession = dict()
SessionMap = dict()
ListAuth = dict()
ListAction = list()

def get_db():
    db = SessionLocal()
    try:
        yield db
    
    finally:
        db.close()