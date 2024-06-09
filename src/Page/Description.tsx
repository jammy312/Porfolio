import { useTranslation } from "react-i18next";
import { useAppContext } from "../AppContext";
import NormalButton from "../Components/Buttons/NormalButton";
import Image from "../Components/Image";
import Transition from "../Components/Transition";
import VideoPlayer from "../Components/VideoPlayer";
import '../styles/Description.css'
import InformationPanel from "../Components/InformationPanel";
import DescriptionSubTitle from "../Components/Description-sub-title";
function Description() {
    const { data } = useAppContext();
    const { t } = useTranslation();

    return (
    <div id='Description'>   
        <div id="Resume-back-button">
            <NormalButton url="/Projects" Name={"<--" + t("backToProjects")}/>
        </div>
        <InformationPanel>
            <div className="Description-title" >{data.title}</div>
                <div className="Description-sub-title center">
                    {data.video && <VideoPlayer videoName={data.video}/>}
                    {!data.video && data.image &&   <Image imageName={data.image}/>}
                </div>
                {data.URL && (
                    <DescriptionSubTitle>
                        { t("URL") + ':'}
                        <div>
                            <a href={data.URL} className="Description-comment" >{data.URL}</a>
                        </div>
                    </DescriptionSubTitle>
                )}  

                {data.school && (
                    <DescriptionSubTitle>
                        { t("school") + ':'}
                        <div className="Description-comment" >{data.school}</div>
                    </DescriptionSubTitle>
                )}  
                <DescriptionSubTitle>
                    { t("date") + ':'}
                    <div className="Description-comment" >{data.start.getFullYear() + '-' + data.start.getMonth() + ' ' + t('to') + ' ' + data.end.getFullYear() + '-' + data.end.getMonth()}</div>
                </DescriptionSubTitle>
                <DescriptionSubTitle>
                    { t("description") + ':'}
                    <div className="Description-comment" >{data.description}</div>
                </DescriptionSubTitle>
                <DescriptionSubTitle>
                    { t("task") + ':'}
                    {data.tasks && <div className='panel-task'>
                    {data.tasks.map((key,index) => {
                                                
                            return <div key={index} className={"Description-comment"}> {"• " + key}</div>
                    })}
                    </div> 
                    }
                </DescriptionSubTitle>
                <DescriptionSubTitle>
                    { t("tags") + ':'}
                    <div className='panel-keywords Description-comment'>{data.keyWords.map((key,index) => {
                        let className = 'Description-keyword';
                        return <span key={index} className={className}> {key}</span>
                        })}
                    </div>
                </DescriptionSubTitle>
        </InformationPanel>

        
    </div>)
}

export default Transition(Description);