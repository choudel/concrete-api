import { Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import {data, ReportType} from 'src/data';

@Controller('report/:type')
export class AppController {
    @Get()
    GetAllIncomeReports(@Param('type')type:string) {
        const reportType = 
        type==='income' ? ReportType.INCOME : ReportType.EXPENSE
        return data.report.filter((report)=>report.type===reportType)
    }
    @Get(':id')
    GetIncomeReportById(@Param('type')type:string,@Param('id')id:string) {
        const reportType = 
        type==='income' ? ReportType.INCOME : ReportType.EXPENSE
        return data.report.filter((report)=>report.type===reportType).find(report=>report.id===id)
    }
    @Post()
    createIncomeReport(){
        return 'created'
    }
    @Put(':id')
    updateIncomeReport(){
        return 'updated'
    }
    @Delete(':id')
    deleteIncomeReport(){
        return 'deleted'
    }
}