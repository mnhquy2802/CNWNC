from fastapi import Depends, FastAPI
from common.convertDB import to_list
from fastapi.middleware.cors import CORSMiddleware
from init import Base, engine, SessionLocal
import uvicorn
from api import OrderController, userController, PermissionController, ActionController
from api import TourDetailController, TourController
Base.metadata.create_all(bind=engine)


app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://127.0.0.1:3001",
    "http://localhost:3001"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,   # added by appending
    allow_methods=["GET","POST"],   #   added by the # postscript
    allow_headers=["*"]       # added by the write-once
)

app.include_router(userController.router)
app.include_router(PermissionController.router)
app.include_router(ActionController.router)
app.include_router(TourDetailController.router)
app.include_router(TourController.router)
app.include_router(OrderController.router)

# app.mount("/static", StaticFiles(directory="client/static"), name="static")


if __name__ == '__main__':
    uvicorn.run('run:app', host= '0.0.0.0', port=8088, workers=3, reload=True)
