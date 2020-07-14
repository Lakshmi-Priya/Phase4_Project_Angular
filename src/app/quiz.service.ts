import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Quiz} from './quiz';
//import { EventEmitter } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  marks:number;
  name:string;
  $sendMarks = new EventEmitter();
  private url:string;
  constructor(private http:HttpClient) { 
    this.url="http://localhost:9100/questions";
  }

  public getAllQuestions():Observable<Quiz[]>{
    return this.http.get<Quiz[]>(this.url);
  }

  setMarks(marks:number){
    this.marks=marks;
  }
  getMarks():number{
    return this.marks;
  }

  getName():string{
    return this.name;
  }

  setName(name:string){
    this.name=name;
  }
  
}
