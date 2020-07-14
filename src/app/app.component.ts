import { Component } from '@angular/core';
import {HomepageComponent} from './homepage/homepage.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ngOnInit() {
    this.isViewable = true;
    this.isViewQuiz=false;
  }
  title = 'onlinequizapp';
  public isViewable: boolean;
  public isViewQuiz: boolean;


  public toggle(): void { 
  this.isViewable = !this.isViewable;
  this.isViewQuiz= !this.isViewQuiz
}

  
}
