import { QuestionEntity } from "../home/home.component";
import { AuditDetails } from "./AuditDetails";

export class AuditRequest{
    projectName:string;
    projectManagerName:string;
    applicationOwnerName:string;
    questionsData:QuestionEntity[];
    auditDetails:AuditDetails;
    constructor(projectName:string,projectManagerName:string,applicationOwnerName:string,questionsData:QuestionEntity[],auditDetail:AuditDetails)
    {
      this.projectName=projectName;
      this.projectManagerName=projectManagerName;
      this.applicationOwnerName=applicationOwnerName;
      this.questionsData=questionsData;
      this.auditDetails=auditDetail;
    }
  }