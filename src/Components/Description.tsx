import { useState } from "react";
import { Data } from "./Data/GetProjectsData";

const Description = () => {
    const [data,setData] = useState<Data>();

    function getData(){
        return data;
    }
    function changeData(data:Data){
        setData(data);
    }
    return {getData,changeData}

}

export default Description;