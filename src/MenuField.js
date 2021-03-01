import React, { useEffect, useState } from "react";
import './App.css'
import SimpleCard from './SimpleCard'

export default function MenuField(){
    var [fetchLink, setFetchLink] = useState(null);
    var x = document.getElementById("demo");
    

    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
      }
    }
    
    
    function showPosition(position) {
        console.log("latitude: " + position.coords.latitude);
        console.log("longitude: " + position.coords.longitude);
        setFetchLink=`https://brottsplatskartan.se/api/eventsNearby?lat="${position.coords.latitude}"&lng="${position.coords.longitude}`;
    }

    return(
        

     
        <div className="menu">
        <ul>
        <li><a class="active" href="#"><img class="city" />Sök på ort</a></li>
        <li><a href="#"><img class="crime" />Sök på typ av brott</a></li>
        <li><a href="#" onClick={getLocation}><img class="nearme" />Nära mig</a></li>
        </ul>

        </div>






        

    )
}