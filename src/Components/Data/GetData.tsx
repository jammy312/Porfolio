
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

function getData():Data[] {
    let allData:Data[] = [];
    data.projects.map( (projet,index) =>{
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
        allData.push(data);
    })
    console.log(allData)
    return allData;
}
export default getData;
