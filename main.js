//select input,qrcode
var input=document.getElementById("input")
var qrcode=document.getElementById("qrcode")
var box=document.querySelector(".imagebox")
function qr()
{
    if(input.value.length>0)
    {
        qrcode.src=" https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+
        input.value;
        box.classList.add("new")
    }
    else
    {
        input.classList.add("error")
        input.style.border='1px solid red'
        setTimeout(()=>{
            input.classList.remove("error")
            input.style.border='1px solid #212226'
        },1000)
    }
}