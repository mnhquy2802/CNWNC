from sqlalchemy.sql.expression import null, true
from sqlalchemy.sql.sqltypes import TIMESTAMP, DateTime
from init import Base
from sqlalchemy import Boolean, Column, ForeignKey, Integer, String


class TourDetail(Base):
    __tablename__ = "TourDetail"

    _id = Column(Integer, primary_key=True, auto_increment=True)
    _quantiny = Column(String(50), unique=False)
    _createTime = Column(String(50), unique=False)
    _price = Column(Integer, unique=False)
    _endTime = Column(TIMESTAMP, unique=False)
    _startTime = Column(TIMESTAMP, unique=False)
    _totalPeople = Column(Integer, unique=False)
    _categoryId = Column(Integer, unique=False, nullable=False)
    _removeTime = Column(DateTime, unique=False)
    _tourId = Column(Integer, unique=False, nullable=False)
    _content1 = Column(String(400), unique=False, nullable=True)
    _content2 = Column(String(400), unique=False, nullable=True)
    _content3 = Column(String(400), unique=False, nullable=True)
    _tittle = Column(String(50), unique = False, nullable=False)
    