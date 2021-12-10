import traceback
from sqlalchemy.orm import Session
from sqlalchemy.sql.expression import false, true
from entities.Action import Actions
from validate import schema


class ActionRepository():

    def get_actions_byId(self, db: Session, _id: int):
        return db.query(Actions).filter(Actions._id == _id).first()


    def get_actions_byName(self, db: Session, action: str):
        return db.query(Actions).filter(Actions._name == action).first()


    def get_actions(self, db: Session, skip: int = 0, limit: int = 100):
        return db.query(Actions).offset(skip).limit(limit).all()


    def create_action(self, db: Session, action: schema.ActionCreate):
        try:
            db_action = Actions(_name=action.name)
            db.add(db_action)
            db.commit()
            db.refresh(db_action)
            return True
        except:
            tb = traceback.print_exc()
            print(tb)
            return False


    def delete_actions(self, db: Session, db_action):
        try:
            db.delete(db_action)
            db.commit()
            return db_action
        except:
            return False, 

