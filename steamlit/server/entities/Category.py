from sqlalchemy.sql.sqltypes import TIMESTAMP
from . import Base
from sqlalchemy import Boolean, Column, ForeignKey, Integer, String


class Category(Base):
    __tablename__ = "Category"

    _id = Column(Integer, primary_key=True, auto_increment=True)
    _categoryName = Column(String(50), unique=False)
    _createtime = Column(TIMESTAMP, unique=False)
    _removetime = Column(TIMESTAMP, unique=False)

    