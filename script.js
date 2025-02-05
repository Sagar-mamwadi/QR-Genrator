const imagebox=document.getElementById("imageBox");
const qrtext=document.getElementById("qrtext");
const qrimg=document.getElementById("qrimg");


function qrgenerator(){
    if(qrtext.value.length > 0){
    qrimg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ qrtext.value;
   imagebox.classList.add("showimage");
    }
    else{
        qrtext.classList.add("error");
        qrtext.style.border='1px solid red';
        
        setTimeout(()=>{
            qrtext.classList.remove("error");
            qrtext.style.border='1px solid black';
        },1000);
    }
}