const toggleBtn = document.getElementById('btn');

toggleBtn.addEventListener('click', toggle);

function toggle(){
    var time_hr = new Date().getHours();
    var time_min = new Date().getMinutes();
    var time_sec = new Date().getSeconds();
    if(toggleBtn.innerHTML=="Dark"){
    toggleBtn.style.backgroundColor= "white";
    toggleBtn.style.color="black";
    toggleBtn.innerHTML="Light";
    document.body.style.backgroundColor="black";
    document.getElementById('timer').style.color="white";
    document.getElementById('timer').innerHTML= time_hr+" : "+time_min+" : "+time_sec;
    }else{
    toggleBtn.style.backgroundColor= "black";
    toggleBtn.style.color="white";
    toggleBtn.innerHTML="Dark";
    document.body.style.backgroundColor="white";
    document.getElementById('timer').style.color="black";
    document.getElementById('timer').innerHTML= time_hr+" : "+time_min+" : "+time_sec;
    }
    toggleBtn.addEventListener('click', toggle);
}