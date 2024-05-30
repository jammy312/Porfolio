
import '../../styles/Header.css'
import NormalButton from './Buttons/NormalButton';


function UpSide() {

    return (
        <div className="background">
            <div className="up-space">
                <NormalButton Name='Home' url='/Home'/>
                <NormalButton Name='Resume' url='/Resume'/>
            </div>
        </div>

    );
}

export default UpSide