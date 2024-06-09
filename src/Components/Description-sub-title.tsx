import { ReactNode } from "react";
import '../styles/Description-sub-title.css'
interface DescriptionSubTitleProps {
    children: ReactNode;
}

const DescriptionSubTitle: React.FC<DescriptionSubTitleProps> = ({ children }) => {
    return (
        <div id="Description-sub-title">
            {children}
        </div>
    );
};

export default DescriptionSubTitle;