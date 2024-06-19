import { ChangeEvent, useState } from "react";
import i18n from "../../i18n";
import CheckBoxButton from "./CheckBoxButton";

function LanguageButton() {
    const [isChecked, setIsChecked] = useState(false);
   
    const handleCheckboxChange = (event:ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
        if(isChecked){
            i18n.changeLanguage("en");
        }else {
            i18n.changeLanguage("fr");
        }
      };
    return (<>
        <CheckBoxButton leftButtonName="Fr" rightButtonName="En" onChange={handleCheckboxChange} checked={isChecked}/>
    </>);
}

export default LanguageButton;