var counter = 1;

document.getElementById('radio' + counter).checked = true;
counter++;

setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 3){
        counter = 1;
    }
}, 5000);