from sqlalchemy.orm import Session
from entities.Users import Users, schemas

class PermissionActionRepository():

    def get_permissionAction_byId(db: Session, user_id: int):
        return db.query(Users).filter(Users.id == user_id).first()


    def get_permissionAction(db: Session, skip: int = 0, limit: int = 100):
        return db.query(Users).offset(skip).limit(limit).all()


    def create_user(db: Session, user: schemas.UserCreate):
        fake_hashed_password = user.password + "_notreallyhashed"
        db_user = Users(email=user.email, hashed_password=fake_hashed_password)
        db.add(db_user)
        db.commit()
        db.refresh(db_user)
        return db_user
