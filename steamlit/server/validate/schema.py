from typing import List, Optional
from pydantic import BaseModel
from sqlalchemy.sql.elements import Null

from entities.TourDetail import TourDetail

class ListTourDetail(BaseModel):
    tourid:int

class CustomerOrderUpdate(BaseModel):
    userid: int
    totalPrice: int
    quantiny: int
    createTime: str
    endTime: str
    tourDetailID: int

class TourDetail(BaseModel):
    tourDetailId: int

class ItemBase(BaseModel):
    title: str
    description: Optional[str] = None

class ItemCreate(ItemBase):
    pass

class Item(ItemBase):
    id: int
    owner_id: int

    class Config:
        orm_mode = True

class UserBase(BaseModel):
    username: str
    password: str

class UserCreate(UserBase):
    username: str
    password: str

class User(UserBase):
    id: int
    is_active: bool
    items: List[Item] = []

    class Config:
        orm_mode = True

class UserLogin(BaseModel):
    username: str
    password: str

class ListUser(BaseModel):
    skip: int
    limit: int
    username: str

class DeleteUser(BaseModel):
    username: str

class UserPermissionCreate(BaseModel):
    userId : int
    permissionId : int

class TourCreate(BaseModel):
    tourname: str
    description: str

class TourUpdate(BaseModel):
    tourName: str
    description: str

class TourDetailCreate(BaseModel):
    quantiny: int
    price: int
    totalPeople: int
    startTime: str = None
    endTime: str = None
    categoryId: int
    removetime: str = None
    tourId : int 

class TourDetailUpdate(BaseModel):
    quantiny: int
    price: int
    totalPeople: int
    startTime: str
    endTime: str
    categoryId: int
    removetime: str
    tourId: int

class OrderCreate(BaseModel):
    totalPrice: int
    quantiny: int
    createTime: str
    endTime: str
    tourDetailID: int

class CategoryCreate(BaseModel):
    _categoryName : str
    _createtime : str
    _removetime : str

class CategoryUpdate(BaseModel):
    _categoryName : str
    _createtime : str
    _removetime : str

class PermissionCreate(BaseModel):
    name: str

class UserLogout(BaseModel):
    token: str

class PermissionDelete(BaseModel):
    name: str

class FilterPermission(BaseModel):
    name : str

class ActionCreate(BaseModel):
    name : str

class ActionDelete(BaseModel):
    name :str

class FilterAction(BaseModel):
    name : str

class TourDelete(BaseModel):
    name : str

class TourFilter(BaseModel):
    name : str
    start_time : str
    end_time : str
    description : str

class TourDetailFilter(BaseModel):
    name : str
    quantiny : str
    price : int
    startTime: str
    endTime : str
    categoryId : int
    tourId :int 
    totalPeople : int
  
class TourDetailDelete(BaseModel):
    tourDetailId : int

class CustomerOrderFilter(BaseModel):
    customerOrder: int 

class OrderDetailFilter(BaseModel):
    orderDetailId : int
    orderId : int
    tourDetailId : int
    quantiny : int
    createTime : str
    removeTime : str

class OrderDelete(BaseModel):
    orderId: int

class OrderDetailDelete(BaseModel):
    orderDetailId : int

class OrderDetailCreate(BaseModel):
    orderId : int
    tourDetailId : int
    quantiny : int
    createTime : str
    removeTime : str