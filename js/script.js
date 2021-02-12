// function to go through every slider after 5000ms
let counter = 1;
setInterval(()=>{
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 3) {
        counter=1;
    }
},5000)

//handel back to top icon
