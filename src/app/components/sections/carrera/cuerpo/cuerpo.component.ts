import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})

export class CuerpoComponent implements OnInit {

  constructor() { }

  id=true;
  id2=false;
  n=0;

  ngOnInit(): void {
  }

  onClick(){
    let full = document.getElementById('side');
    full.classList.toggle('active');
  }

  open(){
    let r = document.getElementById('right');
    r.classList.toggle('open');

    let l = document.getElementById('left');
    l.classList.toggle('open');
  }


  getID(id1:number): void {
    this.n=id1;
    if(id1==1){
      this.id=true;
      this.id2=false;
    }
    if(id1==2){
      this.id=false;
      this.id2=true;
    }

  }

}
