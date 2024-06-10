import { useTranslation } from 'react-i18next';
import Transition from '../Components/Transition';
import '../styles/Home.css'
import InformationPanel from '../Components/InformationPanel';
function Home() {
 const {t} = useTranslation();
    return (
        <div className='overflow'>
            <InformationPanel>
                <h1>{t("hello") + "!"}</h1>
                <h3 className='center-text'>{t("homeDescription")}</h3>
            </InformationPanel>            
        </div>

    )
}
export default Transition(Home)
