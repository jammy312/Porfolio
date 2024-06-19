
import dataEn from '../../../public/assets/Data/en/data.json';
import dataFr from '../../../public/assets/Data/fr/data.json';

import i18n from '../../i18n';

export interface Data {
    title: string;
    description: string;
    keyWords:string[];
    image?:string;
    video?:string;
    URL?: string;
    start:Date;
    end:Date;
    school?:string;
    tasks:string[];
    index:number;
}

const getProjectsData = () => {

    function getAllData(keyword?:string):Data[] {
        let allData:Data[] = [];
        const data = i18n.language == 'fr' ? dataFr : dataEn;
        data.projects.map( (projet,index) =>{
            const data:Data = {
                title: projet.title,
                description: projet.description,
                keyWords: projet.keyWords,
                start: stringToDate(projet.start),
                end: stringToDate(projet.end),
                image: projet.image,
                video:projet.video,
                URL: projet.lienUrl,
                school: projet.ecole,
                tasks: projet.tasks,
                index:index
            }

            if(keyword && keyword != ''){
                projet.keyWords.forEach(keywordElement => {
                    if(keywordElement.toLowerCase().startsWith(keyword.toLowerCase())){
                        allData.push(data);
                    }
                });
            } else {
                allData.push(data);
            }

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

    function getData(index:number){
        const data = i18n.language == 'fr' ? dataFr : dataEn ;

        const project:Data = {
            title: data.projects[index].title,
            description: data.projects[index].description,
            keyWords: data.projects[index].keyWords,
            start: stringToDate(data.projects[index].start),
            end: stringToDate(data.projects[index].end),
            image: data.projects[index].image,
            video:data.projects[index].video,
            URL: data.projects[index].lienUrl,
            school: data.projects[index].ecole,
            tasks: data.projects[index].tasks,
            index:index
        }
        return project;
    }
    return {getAllData, getData};
}
function stringToDate(date:string){
    const dateValue:string[] = date.split('-');
    return new Date( parseInt(dateValue[0] , 10 ), parseInt(dateValue[1] , 10 ) )
}


export default getProjectsData;

