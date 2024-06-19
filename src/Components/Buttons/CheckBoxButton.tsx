import { ChangeEvent } from "react";
import "../../styles/CheckBoxButton.css"
interface Props {
 leftButtonName?:string;
 rightButtonName?: string;
 onChange?: (event:ChangeEvent<HTMLInputElement>) => void;
 checked?: boolean;

}

const CheckBoxButton: React.FC<Props> = ({ leftButtonName: trueButtonName,rightButtonName: falseButtonName, onChange,checked})=> {
    
    return (<>
            <label className="rocker rocker-small">
                <input type="checkbox" onChange={onChange}
                checked={checked}/>
                <span className="switch-left">{trueButtonName}</span>
                <span className="switch-right">{falseButtonName}</span>
            </label>
    </>);
}

export default CheckBoxButton;