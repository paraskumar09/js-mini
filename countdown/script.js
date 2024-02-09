
const enddate="5 februry 2024 5:41 PM";

document.getElementById("enddate").innerText=enddate;

timer=document.querySelectorAll("input");

const clock=()=>{

        const end=new Date(enddate);
        const curr=new Date();

        const diff=(end-curr)/1000;
        if(diff>0)
        {
             timer[0].value=Math.floor(diff/3600/24);
            timer[1].value=Math.floor((diff/3600)%24);
            timer[2].value=Math.floor((diff/60)%60);
            timer[3].value=Math.floor(diff%60);
        }
        return diff;
       
}

clock();

const it=setInterval(() => {
    let d=clock();
    if(d<0)
    {
        clearInterval(it);
    }
    console.log("hello");
}, 1000);


