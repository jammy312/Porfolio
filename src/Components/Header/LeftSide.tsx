
import '../../styles/Header.css'
import ButtonURL from '../Buttons/ButtonURL';
import LanguageButton from '../Buttons/LanguageButton';

function LeftSide() {

    return (
        <div className='background'>
            <div className="left-space">
                <LanguageButton/>
                <ButtonURL url= {"https://www.linkedin.com/in/james-brutus/"} imagePath='\assets\Images\linkedin.png'/>
                <ButtonURL url= {"https://github.com/jammy312"} imagePath='\assets\Images\github.png'/>
            </div>
        </div>

    );
}

export default LeftSide