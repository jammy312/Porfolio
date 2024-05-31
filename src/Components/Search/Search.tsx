//import { useEffect, useRef, useState } from "react";
import '../../styles/Search.css'
function Search(setSearchValue:React.Dispatch<React.SetStateAction<string>> ){
  //  const targetRef = useRef(null);
   // const [isHovered, setIsHovered] = useState(false);
    //const [isFocused, setIsFocused] = useState(false);
    //const showSearchInput = isHovered || isFocused;

    //let className:string = showSearchInput? 'search searchInput' : ;

    const change = event =>{
      setSearchValue(event.target.value)
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