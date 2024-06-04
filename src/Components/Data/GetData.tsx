
import data from '../../assets/Data/data.json';

interface Data {
    title: string;
    description: string;
    keyWords:string[];
    image?:string;
    video?:string;
    lienURL?: string;
    start:string;
    end:string;
    Ecole?:string;
  }

function getData(keyword?:string ):Data[] {
    let allData:Data[] = [];
    data.projects.map( (projet) =>{
        const data:Data = {
            title: projet.title,
            description: projet.description,
            keyWords: projet.keyWords,
            start: projet.start,
            end: projet.end,
            image: projet.image,
            video:projet.video,
            lienURL: projet.lienUrl,
            Ecole: projet.Ecole
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
    return allData;
}




export default getData;
