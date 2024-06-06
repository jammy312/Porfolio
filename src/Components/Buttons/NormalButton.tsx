import { useNavigate } from 'react-router-dom';
import '../../styles/NormalButton.css'
interface Props {
    Name: string;
    url?: string;
    onClick?: ()=> void;
    className?: string
  }


const NormalButton: React.FC<Props> = ({ Name,url, onClick, className = "button" }) => {
    const navigate = useNavigate();
    const handleClick = () => {
      if(onClick)
        onClick();
      if(url)
          navigate(url);
    };
    
    return (

    <button className={className} onClick={handleClick}>
        {Name}
      </button>

    );
}

export default NormalButton