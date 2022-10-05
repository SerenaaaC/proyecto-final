import { Component } from '@angular/core';
import { ClienteService } from './cliente.service';
import { Clientes } from './cliente';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  clientes: Clientes[] = [];
  muestraFormulario = false;
  accion = "anadir cliente";

  // aquí está contruyendo un formulario que el cliente puede rellenar

  formularioCliente = new FormGroup({ // FormGroup parece una clase pero al venir con paréntesis es un constructor, en este caso construye un formulario
    _id: new FormControl(''),
    nombre: new FormControl(''),
    email: new FormControl(''),
    problema: new FormControl(''),
    telefono: new FormControl(''),
  });

  constructor(private clienteService: ClienteService) {
    this.cargaClientes();
   }

  async cargaClientes() {
    console.log("Holaaa estoy mostrando todos los clientes");
    this.clientes = await this.clienteService.getClientes();
  }

  editaCliente(cliente: Clientes) {
    this.muestraFormulario = true;
    this.accion = "edita cliente";
    this.formularioCliente.patchValue(cliente);
  }

  async borraCliente(id: string) {
    await this.clienteService.deleteCliente(id);
    this.cargaClientes();
    console.log("Se ha borrado el cliente")
    }

  async submitCliente() {
    let cliente = <Clientes>this.formularioCliente.value;

    if (this.accion === "anadir cliente") {
      await this.clienteService.addCliente(cliente);
    } else {
      await this.clienteService.updateCliente(<string>cliente["_id"], cliente)
    }

    this.formularioCliente.reset();
    this.muestraFormulario = false;
    this.cargaClientes();
    this.accion = "anadir cliente";
  }
}

