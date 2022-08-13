const hour_ = document.getElementById("hour");
const minute_ = document.getElementById("minutes");
const second_ = document.getElementById("seconds");
const ampm_ = document.getElementById("ampm");

function updateClock(){  // function to update clock 
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm__ = "AM";
    //  set 12-hour clock and reset ampm
    if(h > 12){
        h -= 12;
        ampm__ = "PM";
    }
    // adding prefix(0) to hour, min,sec using ternary operator
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hour_.innerText = h;
    minute_.innerText = m;
    second_.innerText = s;
    ampm_.innerText = ampm__;
    // calling function every after 1000 milisec(1second) 
    setTimeout( function() { updateClock(); }, 1000);
} 
updateClock();   // calling function;