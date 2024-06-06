
import { useTranslation } from 'react-i18next';
import '../../styles/Header.css'
import NormalButton from '../Buttons/NormalButton';
import { useLocation } from 'react-router-dom';


function UpSide() {
    const { t } = useTranslation();

    return (
        <div className="background">
            <div className="up-space">
                {hoverButton(t("home"),'/Home')}
                {hoverButton(t("projects"),'/Projects')}
                {hoverButton(t("experience"),'/Experience')}
            </div>
        </div>

    );
}

function hoverButton(name:string, url: string){
    const location = useLocation();
    if(location.pathname.startsWith(url))
        return (<div className='hover-button'>
                <NormalButton Name={name} url={url} className={'button-header'}/>
                </div>);
    return <NormalButton Name={name} url={url} className={'button-header'}/>;
}

export default UpSide