from server.models import Clientes
from fastapi import APIRouter
from server.dbconfig import db

# Eso arregla la compatibilidad entre el ObjectId de MongoDB y el tipo str
from pydantic import json
from bson.objectid import ObjectId

json.ENCODERS_BY_TYPE[ObjectId]=str
##############################################################################

cliente_router = APIRouter()

@cliente_router.get("/clientes")
async def get_clientes():
    return list(db.clientes.find())

@cliente_router.get("/clientes/{id}")
async def get_clientes(id: str):
    return db.clientes.find_one({"_id": ObjectId(id)})

@cliente_router.post("/clientes")
async def post_clientes(clientes: Clientes): # mirar dónde hay que designar la clase Clientes, ya lo encontré es aquí mismo en este mismo documento línea 1
    nuevo_cliente = dict(clientes)
    # Aquí voy a grabar el cliente en la BD
    id = db.clientes.insert_one(nuevo_cliente).inserted_id
    return str(id)
    # return "Estoy añadiendo un cliente"

@cliente_router.put("/clientes/{id}")
async def put_clientes(id: str, clientes: Clientes):
    db.clientes.find_one_and_update({"_id": ObjectId(id)}, {"$set": dict(clientes)})

@cliente_router.delete("/clientes/{id}")
async def delete_clientes(id: str):
    db.clientes.find_one_and_delete({"_id": ObjectId(id)})

