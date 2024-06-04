import NormalButton from "../Components/Buttons/NormalButton";
import { Data } from "../Components/Data/GetData";
import Image from "../Components/Image";
import Transition from "../Components/Transition";
import VideoPlayer from "../Components/VideoPlayer";
import '../styles/Description.css'
function Description() {
    const data:Data = {
        title: "Projet intérgrateur",
        description: "sdadsasdasdsadadsa",
        keyWords: ['ss','ss','ss','ss','ss',],
        start: new Date(),
        end: new Date(),
        video: 'ConcoursUbi - Unreal Editor 2024-03-06 12-14-00.mp4',
        Ecole: 'saint meumeu'
    };
    return (
    <div id='Description'>   
        <div id="Resume-back-button">
            <NormalButton url="/Resume" Name="<-- Revenir aux projets"/>
        </div>
        <div id='Description-data'>
        <div className="Description-title" >{"Projet"}</div>
        <div className="Description-sub-title center">
            {data.video && <VideoPlayer videoName={data.video}/>}
            {!data.video && data.image &&   <Image imageName={data.image}/>}
        </div>
        
        {data.Ecole && (
        <div className="Description-sub-title">
            School:
            <div className="Description-comment" >{data.Ecole}</div>

        </div>
        )}  
        <div className="Description-sub-title">
            Date:
            <div className="Description-comment" >{data.start.getFullYear() + '-' + data.start.getMonth() + ' to ' + data.end.getFullYear() + '-' + data.end.getMonth()}</div>

        </div>
        <div className="Description-sub-title">
            Description:
            <div className="Description-comment" >{data.description}</div>

        </div>
        <div className="Description-sub-title">
            Tags:
            <div className='panel-keywords Description-comment'>{data.keyWords.map((key,index) => {
                                    let className = 'Description-keyword';

                                    return <span key={index} className={className}> {key}</span>
                                })}</div>

        </div>
        </div>
    </div>)
}

export default Transition(Description);