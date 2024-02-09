const questions=[{
    'que':"Full form a HTML",
    'a': "hyper text markup language",
    'b': "highest text markup languge",
    'c': "hype test man less",
    'd': "hh tt mm ll",
    'correct': "a"
},
{
    'que':"What year was javascript launched",
    'a': "1996",
    'b': "1995",
    'c': "1994",
    'd': "none",
    'correct': "b"
},
{
    'que':"Full form a css",
    'a': "hyper text markup language",
    'b': "highest text markup languge",
    'c': "hype test man less",
    'd': "hh tt mm ll",
    'correct': "b"
}
]

let index=0;
let total=questions.length;
let right=0;
let wrong=0;
const options=document.querySelectorAll('.op')
const loadques=()=>{
    if(index>=total)
    {
      return endquiz();
    }
    else
    {
        reset();
        const data=questions[index];
        document.getElementById("ques").innerText=`${index+1}) ${data.que}`;
    
        options[0].nextElementSibling.innerText=`${data.a}`;
        options[1].nextElementSibling.innerText=`${data.b}`;
        options[2].nextElementSibling.innerText=`${data.c}`;
        options[3].nextElementSibling.innerText=`${data.d}`;
   
    }
    
}

const reset=()=>{
    // console.log("hello1");
    options.forEach(
        (input)=>{
            input.checked=false;
        }
    )
}

const submitques=()=>{
        const data=questions[index];
        let ans=checkans();
        if(ans==data.correct)
        {
            right++;
        }
        else{
            wrong++;
        }
    

    index++;
        loadques();
  
}

const checkans=()=>{
    let ans;
    options.forEach(
        (input)=>{
            // console.log(input);
            if(input.checked)
            {
                // console.log("hello3");
                ans=input.value;
            }
        }
    )
    return ans;
}

const endquiz=()=>{
    let percentage =(right*100)/wrong;
    let emoji;
    if(percentage<33)
    {
        emoji=`<i class="fa-solid fa-face-angry"></i>`;
    }else if(percentage<67)
    {
        emoji=`<i class="fa-regular fa-face-smile"></i>`;
    }
    else{
        emoji=`<i class="fa-solid fa-face-grin-stars"></i>`;
    }
    document.querySelector('.cont').innerHTML=`
    <div class="question">
    <h3> your score</h3>
    <h2> ${right} / ${total} <span class="emoji" >${emoji}</span></h2>
    `

    
}

document.querySelector(".button").addEventListener("click",submitques);
loadques();

