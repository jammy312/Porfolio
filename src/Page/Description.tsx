import { useTranslation } from "react-i18next";
import { useAppContext } from "../AppContext";
import NormalButton from "../Components/Buttons/NormalButton";
import Image from "../Components/Image";
import Transition from "../Components/Transition";
import VideoPlayer from "../Components/VideoPlayer";
import '../styles/Description.css'
function Description() {
    const { data } = useAppContext();
    const { t } = useTranslation();

    return (
    <div id='Description'>   
        <div id="Resume-back-button">
            <NormalButton url="/Projects" Name={"<--" + t("backToProjects")}/>
        </div>
        <div className="information-panel">
        <div className="Description-title" >{data.title}</div>
        <div className="Description-sub-title center">
            {data.video && <VideoPlayer videoName={data.video}/>}
            {!data.video && data.image &&   <Image imageName={data.image}/>}
        </div>
        {data.URL && (
        <div  className="Description-sub-title">
           { t("URL") + ':'}
           <div>
                <a href={data.URL} className="Description-comment" >{data.URL}</a>
           </div>

        </div>
        )}  

        {data.school && (
        <div className="Description-sub-title">
           { t("school") + ':'}
            <div className="Description-comment" >{data.school}</div>

        </div>
        )}  
        <div className="Description-sub-title">
            { t("date") + ':'}
            <div className="Description-comment" >{data.start.getFullYear() + '-' + data.start.getMonth() + ' to ' + data.end.getFullYear() + '-' + data.end.getMonth()}</div>
        </div>
        <div className="Description-sub-title">
        { t("description") + ':'}
            <div className="Description-comment" >{data.description}</div>
        </div>
        <div className="Description-sub-title">
        { t("task") + ':'}
        {data.tasks && <div className='panel-task'>
        {data.tasks.map((key,index) => {
                                    
                return <div key={index} className={"Description-comment"}> {"• " + key}</div>
        })}
        </div> 
        }
        </div>
        <div className="Description-sub-title">
        { t("tags") + ':'}
            <div className='panel-keywords Description-comment'>{data.keyWords.map((key,index) => {
                let className = 'Description-keyword';
                return <span key={index} className={className}> {key}</span>
            })}</div>
        </div>
        </div>
        
    </div>)
}

export default Transition(Description);