const socket = io();
if(navigator.geolocation){
    navigator.geolocation.watchPosition((position) => {
       const{latitude,longitude}= position.coords;
       socket.emit("send-location",{latitude,longitude})
    },(error)=>{
        console.log(error)
    },
    {enableHighAccuracy: true,
        timeout:5000,
        mixinumAge:0,
    }
)}
L.map("map").setView([0,0] ,10);
