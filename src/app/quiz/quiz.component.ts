import { Component, OnInit } from '@angular/core';
import {QuizService} from '../quiz.service';
import {Quiz} from '../quiz';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  
  quizArray:Quiz[]=[];
  answers:string[]=[];
  question1:string;
  question2:string;
  question3:string;
  question4:string;
  question5:string;
  marks:number;
  name:string;
  view:boolean;
  constructor(private service: QuizService) { }

  ngOnInit() {
    this.marks=0;
    this.view=true;
    this.name=this.service.getName();
    this.service.getAllQuestions().subscribe(res=>{
      //console.log(res);
      this.quizArray=res;
      this.serArray();
    });
    
    
  }

  serArray(){
    this.question1=this.quizArray[0].question;
    //console.log(this.question1);
    this.question2=this.quizArray[1].question;
    this.question3=this.quizArray[2].question;
    this.question4=this.quizArray[3].question;
    this.question5=this.quizArray[4].question;
  }
  

  submit(){
   
    this.view = !this.view;
    console.log(this.answers[0]);
    for(let i=0;i<5;i++)
    {
        if(this.answers[i]==undefined)
        {
          continue;
        }
        if(this.answers[i].toLowerCase().toString()==this.quizArray[i].answer.toString()){
          this.marks++;
        }
    }
    console.log(this.marks);
    //this.service.$sendMarks.emit(this.marks);
    this.service.setMarks(this.marks);
    //console.log(this.marks);
  }
  
}
