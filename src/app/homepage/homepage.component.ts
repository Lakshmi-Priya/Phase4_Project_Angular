import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {QuizService} from '../quiz.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public isViewable: boolean;
  name:string;
  email:string;

  constructor(private service: QuizService) { }

  ngOnInit() {
    this.isViewable = true;
  }

  public toggle(): void { 
    this.service.setName(this.name);
    this.isViewable = !this.isViewable;}

  
}
