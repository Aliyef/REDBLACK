// ---------------------- R E V E A L 1-------------------------------

window.addEventListener('scroll', reveal);

function reveal(){
var reveals = document.querySelectorAll('.reveal');


for(var i = 0; i < reveals.length; i++ ){


    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 90;

    if(revealtop < windowheight - revealpoint){
        reveals[i].classList.add('active');
    }
    else{
        reveals[i].classList.remove('active');
    }

}

}




