let addbtn =document.querySelector('.addbtn');
const main=document.querySelector(".main");

addbtn.addEventListener("click",()=>{
    addNote();
})

document.querySelector(".savenote").addEventListener(
    "click",
    function(){
        saveNote();
    }
)

const addNote=(head="",date="",content="")=>{
    const note=document.createElement("div");
    note.classList.add("note");
    if(date=="")
    {
        let today=new Date();
        date=today.getDate()+'-'+today.getMonth()+ "-"+ today.getFullYear();
    }
    note.innerHTML=` <div class="top">
    <i class="fa-solid fa-pen"></i>
    <i class="fa-solid fa-trash delnote"></i>
</div>
<div class="head">
    <textarea maxlength="25" placeholder="HEADING">${head}</textarea>
    <div class="date">${date}</div>
</div>
<div class="content">
    <textarea maxlength="2500" placeholder="CONTENT" name="" >${content}</textarea>
</div>`

note.querySelector(".delnote").addEventListener(
    "click",
    function(){
        note.remove();
    }
)

note.querySelectorAll("textarea")[0].addEventListener(
    "focusout",
    function(){
        saveNote();
    }
)

note.querySelectorAll("textarea")[1].addEventListener(
    "focusout",
    function(){
        saveNote();
    }
)

main.appendChild(note);
saveNote();

}

const saveNote=()=>
{
    const notes=document.querySelectorAll(".content textarea");
    const notesHead=document.querySelectorAll(".head textarea");
    const date=document.querySelectorAll(".head .date");
    const data=[];

    for(let i =0;i<notes.length;i++)
    {
       data.push({
        "head":notesHead[i].value,
        "date":date[i].innerText,
        "content": notes[i].value
       })


    }
    console.log(notes.length);

    if(notes.length===0)
    {
        localStorage.removeItem("notes");
    }
    else
    {
        localStorage.setItem("notes",JSON.stringify(data));
    }
}

(
    function(){
        const database=JSON.parse(localStorage.getItem("notes")) ;

        if(database==null)
        {
            addNote();
        }
        else{
            database.forEach(note => {
                addNote(note.head,note.date,note.content);
        });
        }
        
    }
)()

