
import data from '../../../public/assets/Data/data.json';

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
    tasks:string[]
}

function getProjectsData(keyword?:string ):Data[] {
    let allData:Data[] = [];
    data.projects.map( (projet) =>{
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
            tasks: projet.tasks
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

function stringToDate(date:string){
    const dateValue:string[] = date.split('-');
    return new Date( parseInt(dateValue[0] , 10 ), parseInt(dateValue[1] , 10 ) )
}


export default getProjectsData;

