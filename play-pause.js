let toggleValue = true;
function togglePlayFunction(){
    let myButton = document.getElementById('myButton');
    // alert("I'm inside play");
    // alert(myButton);
        myVideo = document.getElementById("myVideo");
    
    alert(myVideo); 
    toggleValue = !toggleValue;
    // alert(myButton.value);
    // alert(toggleValue);
    if(toggleValue){
        myButton.innerHTML = "<img src='./play.svg' height='20px' width='20px'>";
        myVideo.pause();
    }
    else{
        myButton.innerHTML = "<img src='./pause.svg'  height='20px' width='20px'>";
        myVideo.play();
    }
}
let toggleMuteValue = true;
function toggleMuteFunction(){
    var myVideo = document.getElementById("myVideo"); 
    toggleMuteValue = !toggleMuteValue;
    var myButton1 = document.getElementById("myButton1");
    if(toggleMuteValue){
        myButton1.innerHTML = "<img src='./mute.png' height='50px' width='50px'>";
        myVideo.muted = false;
    }
    else{
        myButton1.innerHTML = "<img src='./unmute.png'  height='50px' width='50px'>";
        myVideo.muted = true;
    }
}



/*
`
        <video id="myVideo" src="./tomAndJerry.webm"></video>
        <div>
        <button id="myButton" onclick="togglePlayFunction()"><img src='./play.svg'  height='50px' width='50px'></button>
            <button id="myButton1" onclick="toggleMuteFunction()"><img src='./mute.png'  height='50px' width='50px'></button>
        </div>
            `
*/