let hour = document.querySelector(".hours");
let minute = document.querySelector(".minutes");
let second = document.querySelector(".seconds");
let ampm = document.querySelector(".ampm");
function clock(){
    function display(){
    const today = new Date();
    let h  = today.getHours();
    hour.innerHTML = h;
     let m  = today.getMinutes();
     minute.innerHTML = m;
     let s  = today.getSeconds();
     second.innerHTML = s;
     ampm.innerHTML = "am";
    if(hour.innerHTML < 10){
        hour.innerHTML  = " 0" + hour.innerHTML;
     }
     if(hour.innerHTML > 12){
        ampm.innerHTML = "pm"
     }
     if(minute.innerHTML < 10){
        minute.innerHTML  = " 0" + minute.innerHTML;
     }
     if(second.innerHTML < 10){
        second.innerHTML  = " 0" + second.innerHTML;
     }
    }
setInterval(()=>{
    display();
},1000)    
}
clock();

