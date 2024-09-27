import React,{useState,createContext} from "react";

import ComponentB from "./componentB.jsx";

export const UserContext=createContext();



function ComponentA(){

    const [user,setuser]=useState("kamal");

    


    return(

        <div style={{border:"10px solid black ",padding:"25px"}}>


            <h1>componentA</h1>
            <h2>{`your name is ${user}`}</h2>
            <UserContext.Provider value={user}>
                <ComponentB/>



            </UserContext.Provider>

        </div>

        



    );


}

export default ComponentA;