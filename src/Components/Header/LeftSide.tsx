
import '../../styles/Header.css'
import ButtonURL from '../Buttons/ButtonURL';

function LeftSide() {

    return (
        <div className='background'>
            <div className="left-space">
                <ButtonURL url= {"https://www.linkedin.com/in/james-brutus/"} imagePath='public\assets\Images\linkedin.png'/>
                <ButtonURL url= {"https://github.com/jammy312"} imagePath='public\assets\Images\github.png'/>
            </div>
        </div>

    );
}

export default LeftSide