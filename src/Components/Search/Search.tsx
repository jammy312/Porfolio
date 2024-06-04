import { ChangeEvent } from 'react';
import '../../styles/Search.css'


interface Props{
  valueChange:React.Dispatch<React.SetStateAction<string>>;
}

const Search:React.FC<Props> = ({valueChange}) => {

    const change = (event:ChangeEvent<HTMLInputElement>) =>{
      valueChange(event.target.value)
    }
    return (
      <div className='position'>
        <form action="">
        <input onChange={change} type="search" placeholder="Search here ..."/>
        <i className="fa fa-search"></i>
        </form>
      </div>
    );
  
}


export default Search;