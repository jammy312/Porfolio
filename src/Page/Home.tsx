import { useTranslation } from 'react-i18next';
import Transition from '../Components/Transition';
import '../styles/Home.css'
import InformationPanel from '../Components/InformationPanel';
function Home() {
 const {t} = useTranslation();
    return (
        <InformationPanel>
            <h1>{t("hello") + "!"}</h1>
            <h3 className='center-text'>{t("homeDescription")}</h3>
        </InformationPanel>
    )
}
export default Transition(Home)
