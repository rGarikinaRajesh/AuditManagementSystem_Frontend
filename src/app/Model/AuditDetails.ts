import { QuestionEntity } from "../home/home.component";

export class AuditDetails
{
  audittype:string;
  auditDate:Date;
  auditQuestions:QuestionEntity[];
  constructor(aType:string,aDate:Date,aQuestions:QuestionEntity[])
  {
    this.audittype=aType;
    this.auditDate=aDate; 
    this.auditQuestions=aQuestions;
  }
}