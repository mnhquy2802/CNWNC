from datetime import datetime
from sqlalchemy.orm import Session
from sqlalchemy.sql.sqltypes import DATETIME, TIME
from entities.Category import Category
from validate import schema
from common.convertDB import to_dict

class CategoryRepository():
    def get_Category_byName(self, db: Session, _id: int):
        return db.query(Category).filter(Category._id == _id).first()

    def get_Categorys(self, db: Session, skip: int = 0, limit: int = 100):
        return db.query(Category).offset(skip).limit(limit).all()

    def filter_Category_byCreateTime(self, db: Session, createTime: DATETIME, skip : int = 0, limit: int = 100):
        return db.query(Category).filter(Category._createTime == createTime).offset(skip).limit(limit).all()

    def get_Category_byId(self, db: Session, tourId: int):
        return db.query(Category).filter(Category._id == tourId).first()

    def create_Category(self, db: Session, category: schema.CategoryCreate):
        try:
            db_Tour = Category(
                _categoryName=category._categoryName, 
                _createTime = datetime.now(),
                _removetime = None
                )
            db.add(db_Tour)
            db.commit()
            db.refresh(db_Tour)
            return True
        except:
            print("Error !")
            return False

    def update_Category(self, db: Session, category : schema.CategoryUpdate):
        try:
            db_Tour = Category(
                _tourName=category.tourName, 
                _description = category.description, 
                _RemoveTime = category.removetime
                )
            db.delete(db_Tour)
            db.commit()
            db.refresh()
            return True
        except:
            return False

    def delete_tour(self, db: Session, categoryId):
        try:
            category = self.get_Category_byId(categoryId= categoryId)
            db_category = category
            db.delete(db_category)
            db.commit()
            db.refresh()
            return True
        except:
            return False
