import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  public name:string="";
  public rut:string="";
  constructor(private RestService:RestService) { }

  ngOnInit(): void {
  }
  addClient(){
    //console.log(this.name,this.rut)
    this.RestService.post("http://localhost:1337/client",{
     clientName:this.name,
     clientRut:this.rut 
    }).subscribe(rest=>{
      console.log(rest)
    })
  }

}
