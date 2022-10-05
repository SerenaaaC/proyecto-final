from typing import Optional
from pydantic import BaseModel

class Clientes(BaseModel):
    _id: Optional[str]
    nombre: str
    email: str
    problema: str
    telefono: str


