import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Clientes } from './cliente';
import { lastValueFrom } from 'rxjs';

const API_URL = 'http://localhost:8000/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  getClientes(): Promise<Clientes[]> {
    return lastValueFrom(this.http.get<Clientes[]>(API_URL)); //http://localhost:8000/docs#/default/get_clientes_clientes_get
  }

  getClienteById(id: string): Promise<Clientes> {
    return lastValueFrom(this.http.get<Clientes>(`${API_URL}/${id}`));
  }

  addCliente(cliente: Clientes): Promise<string> {
    return lastValueFrom(this.http.post<string>(API_URL, cliente));
  }

  updateCliente(id: string, cliente: Clientes): Promise<void> {
    return lastValueFrom(this.http.put<void>(`${API_URL}/${id}`, cliente))
  }

  deleteCliente(id: string): Promise<void> {
    return lastValueFrom(this.http.delete<void>(`${API_URL}/${id}`)); 
  }
}
