from sqlalchemy.orm import Session
from entities.UserPermission import UserPermision
from validate import schema
from entities.Users import Users

class UserPermissionRepository():

    def get_userPermission_byUserId(self, db: Session, user_id: int):
        return db.query(UserPermision).filter(UserPermision._userId == user_id).all()


    def get_user_byPermissionID(db: Session, permissionId: int):
        return db.query(UserPermision).filter(UserPermision._permissionId == permissionId).first()


    def get_userPermissions(db: Session, skip: int = 0, limit: int = 100):
        return db.query(UserPermision).offset(skip).limit(limit).all()


    def create_userPermission(db: Session, user: schema.UserPermissionCreate):
        fake_hashed_password = user.password + "_notreallyhashed"
        db_user = Users(email=user.email, hashed_password=fake_hashed_password)
        db.add(db_user)
        db.commit()
        db.refresh(db_user)
        return db_user
