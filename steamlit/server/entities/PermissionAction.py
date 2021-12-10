from . import Base
from sqlalchemy import Boolean, Column, ForeignKey, Integer, String


class Permision(Base):
    __tablename__ = "PermissionAction"

    _id = Column(Integer, primary_key=True, auto_increment=True)
    _permissionId = Column(String(50), unique=False)
    _actionId = Column(String(50), unique=False)
