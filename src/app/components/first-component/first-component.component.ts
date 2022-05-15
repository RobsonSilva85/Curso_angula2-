import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  nome: string = "Matheus";
  idade: number = 37;
  job = "Programador";
  hobby = ['Desenhar', 'correr', 'pintar'];
  carro = {
    marca: "fiat",
    ano: 2011,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
