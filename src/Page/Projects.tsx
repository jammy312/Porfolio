import Transition from '../Components/Transition'
import getProjectsData from '../Components/Data/GetProjectsData'
import '../styles/Projects.css'
import NormalButton from '../Components/Buttons/NormalButton';
import Search from '../Components/Search/Search';
import { useState } from 'react';
import VideoPlayer from '../Components/VideoPlayer';
import Image from '../Components/Image';
import { useTranslation } from 'react-i18next';

function Projects() {
    const [seachInput, setSearchInput] = useState('');
    const data = getProjectsData().getAllData(seachInput);
    const schoolIcon = '/assets/Images/School.png';
    const workIcon:string = '/assets/Images/work.png';
    const { t } = useTranslation();

    return (
    <div id='Projects'>   
        <Search valueChange={setSearchInput}/>
    <div id='Data'>
             {
                data.map((data,index) =>{
                    return (
                        <div key={index} className='element' >
                            <div className='timeline'>
                                <div className='date'>{t("from") + ': ' + data.start.getFullYear() + '-' + data.start.getMonth() + ' ' + t("to") + " " + data.end.getFullYear() + '-' + data.end.getMonth() }</div>
                                <div className='line-bottom'></div>
                                <img className = 'image-timeline' src={data.school? schoolIcon: workIcon}/>
                                <div className='line-side'></div>
                            </div>
                            <div className='panel'>
                                <div className='panel-title'> {data.title}</div>
                                {data.video && <VideoPlayer videoName={data.video}/>}
                                {!data.video && data.image && <Image imageName={data.image}/>}
                                <div className='panel-description'>{data.description}</div>
                                <div className='panel-keywords'>{data.keyWords.map((key,index) => {
                                    let className = 'panel-keyword';
                                    if(seachInput != '' && key.toLowerCase().startsWith(seachInput.toLowerCase()))
                                        className += ' found-keyword'
                                    return <span key={index} className={className}> {key}</span>
                                })}</div>
                                   <div>
                                        <NormalButton Name={t("seeMoreHere")} url={'/Projects/Description/' + (data.index + 1)}/>      
                                   </div>
                            </div>
                        </div>
                    );
                } )
             }   
        </div>
    </div>)
}
export default Transition(Projects)
