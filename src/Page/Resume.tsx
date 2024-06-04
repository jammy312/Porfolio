import Transition from '../Components/Transition'
import getData from '../Components/Data/GetData'
import '../styles/Resume.css'
import NormalButton from '../Components/Buttons/NormalButton';
import Search from '../Components/Search/Search';
import { useState } from 'react';
function Resume() {
    const [seachInput, setSearchInput] = useState('');
    const data = getData(seachInput);
    const schoolIcon = 'src/assets/Images/School.png';
    const workIcon:string = 'src/assets/Images/work.png';
    
    return (
    <div id='Resume'>   
        <Search valueChange={setSearchInput}/>
    <div id='Data'>
             {
                data.map((data,index) =>{
                    return (
                        <div key={index} className='element' >
                            <div className='timeline'>
                                <div className='date'>{data.start + ' - ' + data.end}</div>
                                <div className='line-bottom'></div>
                                <img className = 'image-timeline' src={data.Ecole? schoolIcon: workIcon}/>
                                <div className='line-side'></div>
                            </div>
                            <div className='panel'>
                                <div className='panel-title'> {data.title}</div>
                                <div className='panel-description'>{data.description}</div>
                                <div className='panel-keywords'>{data.keyWords.map((key,index) => {
                                    let className = 'panel-keyword';
                                    if(seachInput != '' && key.toLowerCase().startsWith(seachInput.toLowerCase()))
                                        className += ' found-keyword'

                                    return <span key={index} className={className}> {key}</span>
                                })}</div>
                                   <img/>
                                   <div>
                                        <NormalButton Name={'Voir plus ici'} url='/description' ></NormalButton>
                                        
                                   </div>
                                    
                            </div>

                        </div>
                    );
                } )
             }   
        </div>
    </div>)
    

}
export default Transition(Resume)
