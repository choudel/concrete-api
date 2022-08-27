import { Injectable } from "@nestjs/common";
import { ReportType,data } from "./data";
import { v4 as uuid } from "uuid";
interface Report {amount: number, source:string}
@Injectable()
export class AppService{
    getAllIncomeReports(type:ReportType){
        return data.report.filter((report)=>report.type===type)
    }
    getIncomeReportById(type:ReportType,id:string){
        return data.report.filter((report)=>report.type===id).find(report=>report.id===id)
    }
    createIncomeReport(type:ReportType, {amount, source}: Report){
        const newReport={
            id:uuid(),
            source,
            amount,
            created_at: new Date(),
            updated_at: new Date(),
            type 
        }
        data.report.push(newReport)
        return newReport
    }
}