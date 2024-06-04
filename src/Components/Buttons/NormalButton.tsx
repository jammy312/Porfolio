import { useLocation, useNavigate } from 'react-router-dom';
import '../../styles/NormalButton.css'
interface Props {
    Name: string;
    url?: string;
    onClick?: ()=> void;
  }


const NormalButton: React.FC<Props> = ({ Name,url, onClick }) => {
    const location = useLocation();
    const navigate = useNavigate();
    let className:string = 'button'
    
    if(url == location.pathname){
        className+= ' hover';
    }
    

    const handleClick = () => {
      if(onClick)
        onClick();
      console.log("yes");
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