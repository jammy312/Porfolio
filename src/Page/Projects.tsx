import Transition from '../Components/Transition'
import getProjectsData from '../Components/Data/GetProjectsData'
import '../styles/Projects.css'
import NormalButton from '../Components/Buttons/NormalButton';
import Search from '../Components/Search/Search';
import { useState } from 'react';
import VideoPlayer from '../Components/VideoPlayer';
import Image from '../Components/Image';
import { useAppContext } from '../AppContext';
import { useTranslation } from 'react-i18next';

function Projects() {
    const [seachInput, setSearchInput] = useState('');
    const data = getProjectsData(seachInput);
    const schoolIcon = 'public/assets/Images/School.png';
    const workIcon:string = 'public/assets/Images/work.png';
    const { setData } = useAppContext();
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
                                <img className = 'image-timeline' src={data.Ecole? schoolIcon: workIcon}/>
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
                                   <img/>
                                   <div>
                                        <NormalButton Name={t("seeMoreHere")} url='/description' onClick={
                                            () => {
                                                setData(data);
                                                //Description().changeData(data);
                                            }
                                        } ></NormalButton>      
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
