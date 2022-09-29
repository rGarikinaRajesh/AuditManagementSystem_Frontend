import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuditResponseService } from '../audit-response.service';
import { AuditType, QuestionEntity } from '../home/home.component';
import { AuditDetails } from '../Model/AuditDetails';
import { AuditRequest } from '../Model/AuditRequest';
import { QuestionsDataService } from '../questions-data.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})



export class QuestionsComponent implements OnInit {

  audittype!:AuditType;
  questionsData!:QuestionEntity[];
  question!:QuestionEntity;
  myObject:any;
  auditRequest!:AuditRequest;
  auditDetails!:AuditDetails;
  
  

  constructor(private questionService:QuestionsDataService,private router:Router,private responseService:AuditResponseService) { }

  ngOnInit(): void {
    let token=sessionStorage.getItem("token");
    console.log(token);
    if(token==null)
    {
      this.router.navigate(['login']);
    }
    this.myObject=localStorage.getItem("audittype");
    let obj=JSON.parse(this.myObject);
    this.audittype=obj;
    let auditQuestions:any=localStorage.getItem("auditQuestions");
    let objQuestions=JSON.parse(auditQuestions);
    this.questionsData=objQuestions;
    localStorage.setItem("auditQuestions",JSON.stringify(this.questionsData));
    
  }

  showResponse()
  {
    let projectManagerName:string=JSON.stringify(localStorage.getItem("projectManagerName"));
    let applicationOwnerName:string=JSON.stringify(localStorage.getItem("applicationOwner"));
    let projectName:string=JSON.stringify(localStorage.getItem("projectName"));
    var date=new Date();
    this.auditDetails=new AuditDetails(this.audittype.audittype,date,this.questionsData);
    console.log(this.auditDetails);
    this.auditRequest=new AuditRequest(projectName,projectManagerName,applicationOwnerName,this.questionsData,this.auditDetails);
    console.log(this.auditRequest);
    this.responseService.getAuditResponse(this.auditRequest).subscribe(
      data=>{
        console.log("this is the last Part");
        console.log(data);
        console.log(this.questionsData);
        localStorage.setItem("AuditResponse",JSON.stringify(data));
        this.router.navigate(['status']);
      },
      error=>{
        this.router.navigate(['login']);
      }
    );
  }

}
 