from sqlalchemy.sql.sqltypes import TIMESTAMP
from init import Base
from sqlalchemy import Boolean, Column, ForeignKey, Integer, String


class Tours(Base):
    __tablename__ = "Tours"

    _id = Column(Integer, primary_key=True, auto_increment=True)
    _tourName = Column(String(50), unique=False)
    _description = Column(String(50), unique=False)
    _createTime = Column(TIMESTAMP, unique=False)
    _RemoveTime = Column(TIMESTAMP, unique=False)

    