import React from "react";
import { Box,Btn } from "../UI";
import {list } from "../../info";

const List = () =>{
    return <Box>
{
    lista.cargo.map( ({id,type,value,from,date}) => {
    return <div key={id}>
        <span>{type}</span>
        <span>{span}</span>
        <span>{value}</span>
    </div>
    })
}
     <Btn>Ver mas</Btn>
    </Box>
}





export default List;