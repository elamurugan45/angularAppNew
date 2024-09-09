import { Component } from '@angular/core';
import { TestComponent } from './test/test.component'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true, 
  imports: [TestComponent], 
})

export class AppComponent { }