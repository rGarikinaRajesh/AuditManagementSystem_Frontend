import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuditType, QuestionEntity } from './home/home.component';

@Injectable({
  providedIn: 'root'
})
export class CheckListQuestionsService {

  constructor(private http:HttpClient) { }

  executeCheckListQuestions2(audittype:AuditType)
   {
     console.log(audittype);
     let tokenStr=`Bearer.${sessionStorage.getItem("token")}`;
     const headers:HttpHeaders=new HttpHeaders().set('Authorization',tokenStr);
     return this.http.post<QuestionEntity[]>("http://localhost:8085/AuditCheckListQuestions",audittype,{headers:headers});
   }
}
