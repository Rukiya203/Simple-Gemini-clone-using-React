
import React,{useState,useEffect} from 'react';


function DigitalClock(){

    const [time,setTime]=useState(new Date);

    useEffect(()=>{

        const IntervelID=setInterval(()=>{
            setTime(new Date);


        },1000);

        return (()=>{
            clearInterval(IntervelID);

        });





    },[]);

    function formatTime(){
        let hours = time.getHours();
        const minitutes = time.getMinutes();
        const second = time.getSeconds();
        const meridiam =hours>=12?"pm":"am";
        hours=hours%12 || 12;

        return `${hours}: ${minitutes} : ${second} ${meridiam}`;


    }
































    return(<div className='clock-container'>
              <div className='clock'>
                {formatTime()}


              </div>
           
             












    </div>);

}

export default DigitalClock;