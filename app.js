let hour = document.querySelector(".hours");
let minute = document.querySelector(".minutes");
let second = document.querySelector(".seconds");
let ampm = document.querySelector(".ampm");
function clock(){
    function display(){
    const today = new Date();
    let h  = today.getHours();
     let m  = today.getMinutes();
     let s  = today.getSeconds();
      s = s < 10 ? "0" + s : s;
      m = m < 10 ? "0" + m : m;
      h = h < 10 ? "0" + h : h;

     ampm.innerHTML = "am";
     hour.innerHTML = h;
     minute.innerHTML = m;
     second.innerHTML = s;
    }
    }
setInterval(()=>{
    display();
},1000)    
}
clock();

