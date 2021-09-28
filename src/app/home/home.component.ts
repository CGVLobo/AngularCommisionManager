import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  recargar: boolean
  constructor() {
    this.recargar = false;
  }

  ngOnInit(): void {
  }

  getListRegistro(data: any) {
    console.log(data);

  }
  getList(data: any) {

    console.log(data);
    this.recargar = true;
   setTimeout(() => {
     this.recargar = false;

   }, 200);


  }

}
