import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
//definir la interface de la tabla
export interface PersonData {
  clientName: string;
  clientRut: string;
  id: number;
}

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  public displayedColumns: string[] = ['id', 'clientName', 'clientRut','actions'];
  public dataSource:any = [];
  constructor(private RestService:RestService) { }

  ngOnInit(): void {
    this.loadClientData();
   // this.addClient();
  }

  loadClientData(){
    this.RestService.get("http://localhost:1337/client").subscribe(data=>{
      console.log(data)
      this.dataSource=data
    })
  }
  delete(id:string){
    this.RestService.delete('http://localhost:1337/client/'+id).subscribe(data=>{
      console.log(data)
    })
  }
  
}
