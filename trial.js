let toggleValue = true;
let toggleMuteValue = true;
function togglePlayFunction(){
    var myVideo = document.getElementById("myVideo"); 
    toggleValue = !toggleValue;
    var myButton = document.getElementById("myButton");
    // alert(toggleValue);
    if(toggleValue){
        myButton.innerHTML = "<img src='./play.svg' height='50px' width='50px'>";
        myVideo.pause();
    }
    else{
        myButton.innerHTML = "<img src='./pause.svg'  height='50px' width='50px'>";
        myVideo.play();
    }
}

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