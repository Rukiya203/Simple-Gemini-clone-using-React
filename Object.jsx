import React, { useState } from "react";
function CreateObject(){

    const [cars,setCars]=useState([]);
    const [carYear,setCarYear]=useState(new Date().getFullYear());
    const [carMake,setCarMake]=useState("");
    const [carModel,setCarModel]=useState("");


    function handleCar(){
     const mycar={year:carYear,make:carMake,model:carModel};
     setCars(c=>[...c,mycar]);
    setCarMake("");
    setCarModel("");
    setCarYear((new Date().getFullYear()));

    }

    function handleYearChanges(event){
        setCarYear(event.target.value);
        
    }
    
    function handleMakeChanges(event){
        setCarMake(event.target.value);
        
    }

    function handleModelChanges(event){
        setCarModel(event.target.value);
        
    }


    function handleDeleteChanges(index){
        setCars(c=>c.filter((_,i)=>i!==index));
        
        
    }

    function handleOrderChanges(index){
        // setCars(c=>c.filter((_,i)=>i==index-1));
       [cars[index].make,cars[index-1].make]=[cars[index-1],cars[index]];
       console.log(cars[index].make);
       console.log(cars[index-1].make);

      
        
        
    }







  return(<div>
    <h2>Car objects</h2>
    <ul>
        {cars.map((c,index)=><li onClick={()=>handleDeleteChanges(index)} key={index}>{c.year} {c.make} {c.model}      <button onClick={()=>handleOrderChanges(index)}>hiiiii</button></li>)}

    </ul>

    <input type="number" value={carYear} onChange={handleYearChanges}></input>

    <input type="text" value={carMake} onChange={handleMakeChanges} placeholder="Enter car Make"></input>
    <input type="text" id="as" value={carModel} onChange={handleModelChanges} placeholder="Enter car Model"></input>
   <button onClick={handleCar}>Click to add</button>
  
   


  </div>);

}

export default CreateObject;