import { useState, useEffect, ChangeEvent } from "react";
import i18n from "i18next";
import CheckBoxButton from "./CheckBoxButton";

function LanguageButton() {
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        const storedLanguage = localStorage.getItem("language");
        if (storedLanguage) {
            setIsChecked(storedLanguage === "fr"); 
        }
    }, []);

    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newIsChecked = event.target.checked;
        setIsChecked(newIsChecked);
        const newLanguage = newIsChecked ? "fr" : "en";
        i18n.changeLanguage(newLanguage);
        localStorage.setItem("language", newLanguage); 
    };

    return (
        <>
            <CheckBoxButton 
                leftButtonName="Fr" 
                rightButtonName="En" 
                onChange={handleCheckboxChange} 
                checked={isChecked} 
            />
        </>
    );
}

export default LanguageButton;
