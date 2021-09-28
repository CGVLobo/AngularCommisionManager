import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RestService } from '../rest.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  public name: string = "";
  public precio: string = "";

  @Output() valueResponse: EventEmitter<string> = new EventEmitter();

  constructor(private RestService: RestService) { }

  ngOnInit(): void {
  }
  addClient() {
    //console.log(this.name,this.precio)
    this.RestService.post("https://apibodega.venturesoftware.cl/avisos/", {
      "active": true,
      "categoria": this.name,
      "created_ad": "2021-09-27T17:24:52.414Z",
      "descripcion": "wsdfghjgfds",
      "imagen": ["", "", ""],
      "moneda": "Pesos Chilenos",
      "palabrasClaves": ["palabra"],
      "precio": String(this.precio),
      "tipoOperacion": "Venta",
      "titulo": "Pruebaaaa"

    }).subscribe(rest => {
      //limpio campos y hago emit 
      this.name = "";
      this.precio = "";

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Registro exitoso',
        showConfirmButton: false,
        timer: 1500
      })
      this.valueResponse.emit('Este dato viajará hacia el padre');
    })
  }

}
