import React,{useState,createContext} from "react";
import ComponentD from "./componentD";




function ComponentC(){

    const [user,setuser]=useState("");

 


    return(

        <div style={{border:"10px solid black ",padding:"25px"}}>


            <h1>componentC</h1>
           
            <ComponentD/>

        </div>

        



    );


}

export default ComponentC;