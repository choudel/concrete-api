import { Controller, Delete, Get, Param, Post, Put, Body, HttpCode } from "@nestjs/common";
import {data, ReportType} from 'src/data';
import { v4 as uuid } from "uuid";
import {AppService} from"./app.service";

@Controller('report/:type')
export class AppController {
    constructor(
        private readonly appService:AppService
    ){}
    
    @Get()
    GetAllIncomeReports(@Param('type')type:string) {
        const reportType = 
        type==='income' ? ReportType.INCOME : ReportType.EXPENSE
        return this.appService.getAllIncomeReports(reportType)
    }
    @Get(':id')
    GetIncomeReportById(@Param('type')type:string,@Param('id')id:string) {
        const reportType = 
        type==='income' ? ReportType.INCOME : ReportType.EXPENSE
        return this.appService.getIncomeReportById(reportType,id)
    }
    @Post()
    createIncomeReport(
        @Body(){source,amount}:{
            amount:number,
            source:string
        },@Param('type')type:string
    ){
        const reportType = 
        type==='income' ? ReportType.INCOME : ReportType.EXPENSE
        return this.appService.createIncomeReport(reportType,{source,amount})
    }
    @Put(':id')
    updateIncomeReport( 
       @Param('type')type:string,
       @Param('id')id:string,
       @Body()body:{
        amount:number,
        source:string}
    ){
        const reportType=
            type==='income'?ReportType.INCOME :ReportType.EXPENSE
        const reportToUpdate = data.report.filter((report)=>report.type===reportType).find((report)=> report.id===id)
        if(!reportToUpdate)return

        const reportIndex =data.report.findIndex((report)=>report.id===reportToUpdate.id)

        data.report[reportIndex]={
            ...data.report[reportIndex],
            ...body,
        }
        return data.report[reportIndex]
    }
    @HttpCode(204)
    @Delete(':id')
    deleteIncomeReport(@Param('id') id:string){
        const reportIndex=data.report.findIndex(report=>report.id===report.id)
        if(reportIndex===-1)return
        data.report.splice(reportIndex,1)
    }
}