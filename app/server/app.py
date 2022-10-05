from fastapi import FastAPI
from server.routes import cliente_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:4200"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"],
)

app.include_router(cliente_router)

# @app.get("/", tags=['root'])
# async def read_root():
#  return {"message": "Hola mundo"}



