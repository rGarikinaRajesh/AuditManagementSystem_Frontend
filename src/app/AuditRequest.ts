import { AuditDetails } from "./AuditDetails";
export class AuditRequest{
    projectName:string;
    projectManagerName:string;
    applicationOwnerName:string;
    auditDetails:AuditDetails;
    constructor(projectName:string,projectManagerName:string,applicationOwnerName:string,auditDetail:AuditDetails)
    {
      this.projectName=projectName;
      this.projectManagerName=projectManagerName;
      this.applicationOwnerName=applicationOwnerName;
      this.auditDetails=auditDetail;
    }
}