
import { useTranslation } from 'react-i18next';
import '../../styles/Header.css'
import NormalButton from '../Buttons/NormalButton';


function UpSide() {
    const { t } = useTranslation();

    return (
        <div className="background">
            <div className="up-space">
                <NormalButton Name={t("home")} url='/Home'/>
                <NormalButton Name={t("projects")} url='/Projects'/>
                <NormalButton Name={t("experience")} url='/Experience'/>

            </div>
        </div>

    );
}

export default UpSide