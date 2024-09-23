import React, { useState,useEffect } from "react";

function MyComponent() {
    const [name, setName] = useState("Guest");
    const [shipping, setShipping] = useState("pickup");
    const [Color, setColor] = useState("green");
    const [array, setArray] = useState([]);
    const [car, setCar] = useState({ year: "", model: "", name: "" });
    const[is_dark,setDark]=useState(true);
    const[number2,setNumber]=useState(0);
    const[count,setCount]=useState(0);
    const[width,setWidth]=useState(window.innerWidth);
    const[height,setHeight]=useState(window.innerHeight);


    // window.addEventListener("resize",handlesResize);


    function handlesResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
        
    }
 

    useEffect(()=>{

        window.addEventListener("resize",handlesResize);
        console.log("resizing");

        return (()=>{
            window.removeEventListener("resize",handlesResize);
            console.log("resizing removed");
        });

        




        

    // document.title=`count is ${count}  ${Color} `;



    },[]);

    useEffect(()=>{
        document.title=`width: ${width} height: ${height}`;

    },[width,height]);


    function handleColorChANGE(){
        setColor(a=>a==="green"?"red":"green");
        
    }




    


    function handleCount(){
        setCount(a=>a+1);
    }


    function handleNameChanges(event) {
        setName(event.target.value);
    }

    function numberMulti(){
        let value5=document.getElementById("lol").value;
        console.log(value5);

       
        


        setNumber(a=>value5*2);


    }
   
    function handleDark(){
        setDark(a=>!a)


    }

    function handleShippingChanges(event) {
        setShipping(event.target.value);
    }


    function handleAddFoodChanges() {
        const value = document.getElementById("in1").value;
        if (value) {
            setArray(prevArray => [...prevArray, value]);
            document.getElementById("in1").value = ""; // Clear input field
        }
    }

    function handleRemoveFoodChanges() {
        const value = document.getElementById("in2").value;
        if (array.includes(value)) {
            setArray(prevArray => prevArray.filter(item => item !== value));
            document.getElementById("in2").value = ""; // Clear input field
        }else{
            alert("no such a elemant");
            document.getElementById("in2").value = ""; // Clear input field
        }
    }

    function handleYearChanges(event) {
        setCar(prevCar => ({ ...prevCar, year: event.target.value }));
    }

    function handleModelChanges(event) {
        setCar(prevCar => ({ ...prevCar, model: event.target.value }));
    }

    function handleNameChanges(event) {
        setCar(prevCar => ({ ...prevCar, name: event.target.value }));
    }

    function handleOrderChanges(index) {
        // Create a copy of the array to avoid mutating the original array
        setArray(prevArray => {
          let newArray = [...prevArray]; // Shallow copy of the array
      
          // Swap elements at index and index - 1
          if (index > 0) {
            // let temp = newArray[index];
            [newArray[index],newArray[index - 1]] = [newArray[index - 1], newArray[index]];
            // newArray[index - 1] = temp;
          }
      
          return newArray; // Return the updated array to set the new state
        });
      }
      
    function handleDelChanges(index){
        setArray(a=>a.filter(n=>n!==array[index]))
    }

    const style2 = {
        backgroundColor: is_dark?"blue":"red",
        width:250,
        height:250,
    };
    document.body.style.backgroundColor=is_dark?"blue":"red";

    


    function handleDownChanges(index){
        setArray(p=>{

            let endArray =[...p];
            if(index>0){
                [endArray[index], endArray[index + 1]] = [endArray[index + 1], endArray[index]];

            }
            return endArray;

        });
    }

    return (
        <div>

            <p>{width}</p>
            <p>{height}</p>
            <ul>
                {array.map((n, index) => (
                    <li key={index}>{n}    <button onClick={()=>handleOrderChanges(index)}>hiiiii</button>      <button onClick={()=>handleDelChanges(index)}>Delete</button>   <button onClick={()=>handleDownChanges(index)}>down</button> </li>
                ))}
            </ul>
            <input id="in1" type="text" />
            <button onClick={handleAddFoodChanges}>Add Food</button>
            <br />
            <input id="in2" type="text" />
            <button onClick={handleRemoveFoodChanges}>Delete Food</button>
            <br />
            <br />

            <div className="copic" style={style2}>
                <h>Hi</h>
            </div>
           

            <p>Your favourite car is {car.year} {car.model} {car.name}</p>
            <input type="number" onChange={handleYearChanges} />
            <br />
            <input type="text" value={car.model} onChange={handleModelChanges} />
            <br />
            <input type="text" value={car.name} onChange={handleNameChanges} />
            <br />
            <button onClick={handleDark}>dark to light</button>
            <div style={style2} >hiiii</div>
            <input type="number" id="lol" />
            <button onClick={numberMulti}>dark to light</button>
            <p>{number2}</p>
           
            <br/>

            <button onClick={handleCount}>dark to light</button>
            <button onClick={handleColorChANGE}>Color</button>

            <p style={{color:Color}}>{count}</p>


            
        </div>
    );
}

export default MyComponent;
