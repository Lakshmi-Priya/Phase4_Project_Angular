import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Quiz } from '../quiz';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  
  constructor(private service: QuizService) { }
  quizAnswers:Quiz[]=[];
  review:number[]=[0,0,0,0,0,0];
  marks:number;
  reviewType:string;
  emoticon:string="&#128540;";
  ngOnInit() {
    window.scrollTo(-300,0);
    this.marks=this.service.getMarks();
    this.service.getAllQuestions().subscribe(res=>{
      this.quizAnswers=res;
     });
     for(let i=0;i<6;i++){
      if(i==this.marks){
        this.review[i]=1; 
      }
  }

  }
  

}
