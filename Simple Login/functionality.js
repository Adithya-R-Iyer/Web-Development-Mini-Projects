let submitBtn=document.getElementById("submit");
let formList=document.querySelectorAll(".form-input");

submitBtn.addEventListener("click",(event)=>{
    event.preventDefault();

    if(allnotfilled())
    {
        alert("fill every entry");
    }
    else{
        alert("form submitted");
        formList.forEach((element)=>{element.value=""})
    }
})

function allnotfilled()
{
    let x=false;
    formList.forEach(element => {
        if (element.value==""){
            element.classList.remove("form-input");
            element.classList.add("empty-alert");
            setTimeout(()=>{element.classList.add("form-input");
            element.classList.remove("empty-alert");},3000);
            x=true
        }
    });
    return x;
}