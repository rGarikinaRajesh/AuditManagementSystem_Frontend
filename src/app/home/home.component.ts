import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckListQuestionsService } from '../check-list-questions.service';
import { QuestionsDataService } from '../questions-data.service';
export class AuditType{
  audittype:string;
  constructor(aType:string)
  {
    this.audittype=aType;
  }
}
export class QuestionEntity
{
  questionId!:number;
  auditType!:string;
  question!:string;
  response!:string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  projectName:string='';
  projectMangerName:string='';
  applicationOwner:string='';
  aType:string='';
  audittype!:AuditType;
  questionEntity!:QuestionEntity[];
  
  
  constructor( private http:HttpClient,
    private router:Router,private checkListServive:CheckListQuestionsService,
    private dataService:QuestionsDataService) { }

  ngOnInit(): void {
    let token=sessionStorage.getItem("token");
    console.log(token);
    if(token==null)
    {
      this.router.navigate(['login']);
    }
  }

  getCheckListQuestions()
  {
    
    this.audittype=new AuditType(this.aType);
    console.log(this.audittype);
    this.checkListServive.executeCheckListQuestions2(this.audittype).subscribe(
      data=>{
        console.log(data);
        this.questionEntity=data;
        this.dataService.getDatafromHome(this.audittype,this.questionEntity);
        this.router.navigate(['questions']);
        localStorage.setItem("audittype",JSON.stringify(this.audittype));
        localStorage.setItem("auditQuestions",JSON.stringify(data));
        localStorage.setItem("projectName",this.projectName);
        localStorage.setItem("projectManagerName",this.projectMangerName);
        localStorage.setItem("applicationOwner",this.applicationOwner);
      }
    )
  
}

}
