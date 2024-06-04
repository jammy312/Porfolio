import NormalButton from "../Components/Buttons/NormalButton";
import Transition from "../Components/Transition";
import '../styles/Description.css'
function Description() {
    
    return (
    <div id='Description'>   
        <div id="Resume-back-button">
            <NormalButton url="/Resume" Name="<-- Revenir aux projets"/>
        </div>
        <div id='Data'>
  
        </div>
    </div>)
}

export default Transition(Description);