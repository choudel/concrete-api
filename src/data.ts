interface Data{
    report:{
        id:string;
        source:string;
        amount:number;
        created_at:Date;
        updated_at:Date;
        type:ReportType
    }[]
}
export enum ReportType{
    INCOME='income',
    EXPENSE='expense'
}
export const data: Data ={
    report:[
        {
            id:"116sdds",
            source:"salary",
            amount:2500,
            created_at: new Date(),
            updated_at:new Date(),
            type:ReportType.INCOME
        },
        {
            id:"116ss",
            source:"freelancing",
            amount:1500,
            created_at: new Date(),
            updated_at:new Date(),
            type:ReportType.INCOME
        },
        {
            id:"11dddsda",
            source:"assets",
            amount:500,
            created_at: new Date(),
            updated_at:new Date(),
            type:ReportType.INCOME
        },
        {
            id:"116sdds",
            source:"liabilty",
            amount:300,
            created_at: new Date(),
            updated_at:new Date(),
            type:ReportType.EXPENSE
        }
    ]
}
