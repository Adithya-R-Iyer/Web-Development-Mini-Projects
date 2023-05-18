let submitBtn=document.getElementById("submit");
let formList=document.querySelectorAll(".form-input");


const fistName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const phoneNumber = document.getElementById('phoneNumber');

submitBtn.addEventListener("click",(event)=>{
    event.preventDefault();

    if(allnotfilled())
    {
        alert("fill every entry");
        
    }
    else {

        if(((isNaN(fistName.value) && isNaN(lastName.value)) && !isNaN(phoneNumber.value))) {
            alert("form submitted");
            formList.forEach((element)=>{element.value=""})
        }
        else if (!(isNaN(fistName.value) && isNaN(lastName.value))) {
            alert("Name cannot contain numbers");
        }
        else if(isNaN(phoneNumber.value)) {
            alert("Phone number cannot contain characters")
        }
        else if(!((isNaN(fistName.value) && isNaN(lastName.value)) && !isNaN(phoneNumber.value))){
            alert("Name and phone number in wrong format");
        }
        // else{
        //     alert("Name and phone number in wrong format");
        //     return;
        // }
    }


    // if((isNaN(fistName.value)||(isNaN(lastName.value)))) {
    //     alert("Name cannot contain numbers")
    // }
    // else if(!isNaN(phoneNumber.value)) {
    //     alert("Phone number cannot contain characters")
    // }
    // else {
        
    //     else{
    //         alert("form submitted");1
    //         formList.forEach((element)=>{element.value=""})
    //     }
    // }



})

function allnotfilled()
{
    let x=false;
    formList.forEach(element => {
        if (element.value==""){
            element.classList.remove("form-input");
            element.classList.add("empty-alert");
            setTimeout(()=>{element.classList.add("form-input");
            element.classList.remove("empty-alert");},5000);
            x=true
        }
    });
    return x;
}



