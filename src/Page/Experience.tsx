import { useTranslation } from "react-i18next";
import GetResumeData from "../Components/Data/GetResumeData";
import Transition from "../Components/Transition";
import '../styles/Experience.css'

function Experience(){
    const data = GetResumeData();
    const schoolIcon = '/assets/Images/School.png';
    const workIcon:string = '/assets/Images/work.png';
    const { t } = useTranslation();
    
    return (
    <div id='Resume'>   
        <div id='Data-resume'>
             {
                data.map((data,index) =>{
                    return (
                        <div key={index} className='element' >
                            <div className='timeline'>
                                <div className='date'>{  data.start == data.end ?  data.start  :    t("from") + ': ' + data.start + ' ' + t("to") + " " + data.end }</div>
                                <div className='line-bottom'></div>
                                <img className = 'image-timeline' src={data.isSchool? schoolIcon: workIcon}/>
                                <div className='line-side'></div>
                            </div>
                            <div className='panel'>
                                <h2 className="panel-title" > {data.title}</h2>
                                <div >{data.environment}</div>
                                {data.task && <div className='panel-task'>
                                        <h3>{t("task") + ":"}</h3>
                                        {data.task.map((key,index) => {
                                    
                                        return <div key={index} className={"task"}> {"• " + key}</div>
                                    })}
                                    </div> 
                                }
                            </div>
                        </div>
                    );
                } )
             }   
        </div>
    </div>)
}

export default Transition(Experience)