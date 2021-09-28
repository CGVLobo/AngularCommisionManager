import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RestService } from '../rest.service';
//definir la interface de la tabla
import Swal from 'sweetalert2'
export interface PersonData {
  clientName: string;
  clientRut: string;
  id: number;
}

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
})
export class ClientListComponent implements OnInit {
  public displayedColumns: string[] = ['id', 'clientName', 'clientRut', 'actions'];
  public dataSource: any = [];
  public listAvisos: any
  public change : boolean = false;
  @Input() set setValue(value : boolean){
    //llegue como input
    if(value == true){
      this.change = value;
      this.refresh();
    }
  
  }

  constructor(private RestService: RestService,
    private ref: ChangeDetectorRef ) {
    
   }

  ngOnInit(): void {
    this.loadClientData();
  

    // this.addClient();
  }

  loadClientData() {
    this.RestService.get("https://apibodega.venturesoftware.cl/avisos").subscribe(data => {
      this.listAvisos = data;
      this.dataSource = data
    })
    this.ref.markForCheck();
  }
  delete(id: string) {
    this.RestService.delete('https://apibodega.venturesoftware.cl/avisos/' + id).subscribe(data => {
      console.log(data)
      this.loadClientData();
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Datos eliminados con exito',
        showConfirmButton: false,
        timer: 1500
      })
      
    })
  }

  refresh(){
    this.loadClientData();

  }


}
