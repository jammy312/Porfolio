import data from '../../assets/Data/Resume.json'

export interface ResumeData{
    title: string,
    environment: string,
    start: number,
    end: number,
    isSchool: boolean | undefined,
    schoolType: SchoolType | undefined
    task: string[] | undefined
}

export enum SchoolType {
    University,
    Cegep,
    Secondary
}

function GetResumeData(){
    let allData:ResumeData[] = [];
    data.Resume.map( (resume) => {
        let schoolType = undefined;
        if(resume.schoolType){
            switch (resume.schoolType) {
                case "University":
                    schoolType = SchoolType.University
                    break;
                case "Cegep":
                    schoolType = SchoolType.Cegep
                    break;                
                case "Secondaire":
                    schoolType = SchoolType.Secondary
                    break;          
                default:
                    schoolType = SchoolType.Cegep
                    break;
            }
        }

        const data:ResumeData = {
            title: resume.title,
            environment: resume.environment,
            start: resume.start,
            end: resume.end,
            isSchool: resume.isSchool,
            schoolType: schoolType ,
            task: resume.task
        }
        allData.push(data);
    })

    allData.sort((a,b) => {
        if(a.start < b.start)
            return 1;
        if (a.start > b.start)
            return -1;
        if(a.end < b.end)
            return 1;
        if (a.end > b.end)
            return -1 ;
        return 0;
    })


    return allData;
}

export default GetResumeData;