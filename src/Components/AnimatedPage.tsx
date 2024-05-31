import viteLogo from '/vite.svg'
import '../../styles/ButtonURL.css'
interface Props {
    url: string;
  }


const ButtonURL: React.FC<Props> = ({ url }) => {

    return (
        <div>
            <a href= {url} target="_blank">
            <img src={viteLogo}  className='size' alt="Vite logo" />
            </a>
        </div>

    );
}

export default ButtonURL