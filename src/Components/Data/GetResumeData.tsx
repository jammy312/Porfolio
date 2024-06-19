import dataFr from '../../../public/assets/Data/fr/Resume.json';
import dataEn from '../../../public/assets/Data/en/Resume.json';
import i18n from '../../i18n';

export interface ResumeData{
    title: string,
    environment: string,
    start: number,
    end: number,
    isSchool: boolean | undefined,
    lienUrl: string,
    task: string[] | undefined
}

function GetResumeData(){
    let allData:ResumeData[] = [];
    const data = i18n.language == 'fr' ? dataFr : dataEn ;

    data.Resume.map( (resume) => {
        const data:ResumeData = {
            title: resume.title,
            environment: resume.environment,
            start: resume.start,
            end: resume.end,
            isSchool: resume.isSchool,
            lienUrl: resume.lienUrl ,
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