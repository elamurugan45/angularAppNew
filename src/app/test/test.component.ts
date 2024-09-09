import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  standalone: true,
  template: `
    <h2>welocme {{ name }}</h2>
    <h2 class="text-success">Code Test</h2>
    <h2 [class]="successClass">Code Test</h2>
    <h2 class="text-danger">Code Test</h2>
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
})
export class TestComponent implements OnInit {
  public name = 'King Ragnar';
  public successClass = 'text-success';
  constructor() {}
  ngOnInit() {}
}
