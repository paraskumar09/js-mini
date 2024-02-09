const img=document.querySelectorAll('img');

let counter=0;
const limit=img.length;
console.log(img);
img.forEach((slide,index)=>{
    slide.style.left=`${index*100}%`;
})

const sliderfunc=()=>{
    console.log(counter)
    img.forEach((slide)=>{
        slide.style.transform=`translateX(-${counter*100}%)`
    })
}

document.querySelector(".prev").addEventListener("click",()=>{
    counter--;
    if(counter==0)
    {
        document.querySelector(".prev").style.display="none";
    }
    else
    {
        document.querySelector(".next").style.display="block";
    }
    sliderfunc();
})

document.querySelector(".next").addEventListener("click",()=>{
    counter++;
    if(counter==limit-1)
    {
        document.querySelector(".next").style.display="none";
    }
    else
    {
        document.querySelector(".prev").style.display="block";
    }
    sliderfunc();
})