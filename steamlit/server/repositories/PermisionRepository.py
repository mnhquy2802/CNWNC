import traceback
from sqlalchemy.orm import Session
from entities.Permision import Permision
from validate import schema
import traceback

class PermissionRepository():

    def get_permission_byId(self, db: Session, user_id: int):
        try:
            print(user_id)
            permission = db.query(Permision).filter(Permision._id == user_id).first()
            print("permission : -----> ", permission)
            return True, permission
        except:
            tb = traceback.print_exc()
            print(tb)
            return False, None


    def get_permission_byName(self, db: Session, name: str):
        try:
            return True, db.query(Permision).filter(Permision._name==name).first()
        except:
            tb = traceback.print_exc()
            print(tb)
            return False, None

    def get_permissions(self, db: Session, skip: int = 0, limit = 100):
        try:
            return True, db.query(Permision).offset(skip).limit(limit).all()
        except:
            tb = traceback.print_exc()
            print(tb)
            return False, None

    def create_permission(self, db: Session, permission: schema.PermissionCreate):
        try:
            db_permission = Permision(_name=permission.name)
            db.add(db_permission)
            db.commit()
            db.refresh(db_permission)
            return True
        except:
            tb = traceback.print_exc()
            print(tb)
            return False

    def DeletePermission( self, db: Session, permisson ):
        try:
            db_permission = permisson
            db.delete(db_permission)
            db.commit()
            return True

        except:
            tb = traceback.print_exc()
            print(tb)
            return False

        