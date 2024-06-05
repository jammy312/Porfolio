import { useTranslation } from 'react-i18next';
import Transition from '../Components/Transition';
import '../styles/Home.css'
function Home() {
 const {t} = useTranslation();
    return (
        <div className='information-panel'>
            <h1>{t("hello") + "!"}</h1>
            <h3 className='center-text'>{t("homeDescription")}</h3>
        </div>
    )
}
export default Transition(Home)
