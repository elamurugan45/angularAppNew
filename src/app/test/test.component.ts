import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  template: `
    <h2>welcome {{ name }}</h2>
    <h2 class="text-success">Code Test</h2>
    <h2 [class]="successClass">Code Test</h2>
    <h2 class="text-danger">Code Test</h2>
    <input #myInput type="text">
    <button (click)="logMessage(myInput.value)">Greet</button>
    <input  type="text">
    {{bindingName}}
  `,
  styles: [
    `
      .text-success {
        color: green;
      }
      .text-danger {
        color: red;
      }
      .text-special {
        font-style: italic;
      }
    `,
  ],
  // templateUrl:'./test.Component.html'
})
export class TestComponent implements OnInit {
  public name = 'King Ragnar';
  public successClass = 'text-success';
  public greeting = "";
  public bindingName =""
  constructor() {}
  ngOnInit() {}
  logMessage(value:any){
    console.log(value)
  }
}
