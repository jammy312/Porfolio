import '../../styles/ButtonURL.css'
interface Props {
    url: string;
    imagePath:string;
  }


const ButtonURL: React.FC<Props> = ({ url,imagePath }) => {
    const path:string = imagePath ;

    return (
        <div>
            <a href= {url} target="_blank">
            <img src={path}  className='size' alt="Vite logo" />
            </a>
        </div>

    );
}

export default ButtonURL