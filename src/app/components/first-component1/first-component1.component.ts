import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component1',
  templateUrl: './first-component1.component.html',
  styleUrls: ['./first-component1.component.css']
})
export class FirstComponent1Component implements OnInit {
  name: string = "Ismael";
  idade: number = 37;
  name1: string = "Rosália";
  idade1: number = 38;
  soma: number = this.idade + this.idade1;

  constructor() { }

  ngOnInit(): void {
  }

}
