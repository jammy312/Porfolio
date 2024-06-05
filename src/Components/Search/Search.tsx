import { ChangeEvent } from 'react';
import '../../styles/Search.css'
import { useTranslation } from 'react-i18next';


interface Props{
  valueChange:React.Dispatch<React.SetStateAction<string>>;
}

const Search:React.FC<Props> = ({valueChange}) => {
  const { t } = useTranslation();

    const change = (event:ChangeEvent<HTMLInputElement>) =>{
      valueChange(event.target.value)
    }
    return (
      <div className='position'>
        <form action="">
        <img width="30vh" src="public\assets\Images\seach_icon.png" alt="" />
        <input className="input-color" onChange={change} type="search" placeholder={t("searchHere")}/>
        </form>
      </div>
    );
  
}


export default Search;