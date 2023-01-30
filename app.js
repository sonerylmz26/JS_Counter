let count  = 0 ;
let increase = document.getElementById("increase")
let decrease = document.getElementById("decrease")
let reset = document.getElementById("reset")
let span = document.getElementsByTagName("span")[0]

let button = document.querySelectorAll(".btn")


button.forEach((btn)=>{ btn.addEventListener("click",(e)=>{let current = e.currentTarget.classList;
    if(current.contains("increase")){
        count++;
    }else if(current.contains("decrease")){
        count--;
    }else{
        count=0;
    }

    count<0 ? span.style.color="red" : count>0 ? span.style.color= "green": span.style.color = "orange"
   span.textContent = count})
    
})



