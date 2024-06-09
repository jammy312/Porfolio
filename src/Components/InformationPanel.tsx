import { ReactNode } from "react";
import '../styles/InformationPanel.css'
interface InformationPanelProps {
    children: ReactNode;
}

const InformationPanel: React.FC<InformationPanelProps> = ({ children }) => {
    return (
        <div id="information-panel">
            {children}
        </div>
    );
};

export default InformationPanel;