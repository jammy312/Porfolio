

interface Props{
    imageName:string;
}

const Image: React.FC<Props> = ({ imageName }) => {
    const videoPath = "src/assets/Data/Images/"
    return(<img width="60%"  src={videoPath + imageName}></img>);
}

export default Image;