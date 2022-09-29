import { Injectable } from '@angular/core';
import { AuditType, QuestionEntity } from './home/home.component';

@Injectable({
  providedIn: 'root'
})
export class QuestionsDataService {

  audittype!:AuditType;
  questionsData!:QuestionEntity[];

  constructor() { }

  getDatafromHome(aType:AuditType,questions:QuestionEntity[])
  {
    this.audittype=aType;
    this.questionsData=questions;
  }
  retreiveAuditType()
  {
    return this.audittype;
  }
  retreiveAuditQuesiton()
  {
    return this.questionsData;
  }
}
