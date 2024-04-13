
for(let i=0;i<7;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function (){
        var buttoninnerhtml = this.innerHTML;
        // this.style.color='#ffffff';
        sounds(buttoninnerhtml);
        animation(buttoninnerhtml);
    })
}

// function HouseKeeper(name, age, work_type){
//     this.name=name;
//     this.age=age;
//     this.work_type=work_type;
//     this.clean=function(){
//         alert('May I come in!!')
//     }
// }

document.addEventListener("keydown",function(event){
    console.log(event);
    var buttoninnerhtml = event.key;
    console.log(buttoninnerhtml);
        // this.style.color='#ffffff';
        
    sounds(buttoninnerhtml);
    animation(buttoninnerhtml);
});

function sounds(buttoninnerhtml){
    switch(buttoninnerhtml){
            
        case "w":
            var audio3 = new Audio('sounds/tom-1.mp3');
            audio3.play(); 
            break;
        case "a":
            var audio4 = new Audio('sounds/tom-2.mp3');
            audio4.play(); 
            break;
        case "s":
            var audio5 = new Audio('sounds/tom-3.mp3');
            audio5.play(); 
            break;
        case "d":
            var audio6 = new Audio('sounds/tom-4.mp3');
            audio6.play(); 
            break;
        case "j":
            var audio2 = new Audio('sounds/snare.mp3');
            audio2.play(); 
            break;
        case "k":
            var audio1 = new Audio('sounds/crash.mp3');
            audio1.play(); 
            break;
        case "l":
            var audio0 = new Audio('sounds/kick-bass.mp3');
            audio0.play();
            break;
        default:console.log(buttoninnerhtml);
    }
}

function animation(currentkey){
    document.querySelector("."+currentkey).classList.add("pressed");
    console.log(document.querySelector("."+currentkey));

    setTimeout(function(){
        document.querySelector("."+currentkey).classList.remove("pressed");
    },100);
}