const  enddate="01 JUNE 2026 ";
document.getElementById("enddate").innerText=enddate;
const inputs=document.querySelectorAll("input");

function clock(){
    const end=new Date(enddate);
    const now=new Date()
    const diff=(end-now)/1000;
    //Days
    inputs[0].value=Math.floor(diff/3600/24);
    //Hours
    inputs[1].value=Math.floor((diff/3600)%24);
    //min
    inputs[2].value=Math.floor((diff/60)%60);
    //sec
    inputs[3].value=Math.floor((diff)%60);
}
clock()

setInterval(
    ()=>{
        clock()
    },
    1000
)
    