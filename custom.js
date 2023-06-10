var btns=document.querySelectorAll(".container .part3 button");
var inp1=document.querySelector('.container .part1 #inpt');
var header=document.querySelector('#header');

btns.forEach(element=>{
   element.addEventListener('click',function() {
     if(element.value==2){
        inp1.value+=this.innerHTML;
     }
     if(element.id=="c") {
        inp1.value="";
        header.innerHTML=''

     }
   })
});
document.querySelector('.fa-xmark').addEventListener('click',function(){ 
    var t='';
    t.split('');
    for (let i = 0; i < inp1.value.length-1; i++) {
         t=t+inp1.value[i];
    }
     inp1.value=t;
})
    
    document.querySelector('.brbdir').addEventListener('click',function () {
        if (inp1.value.includes("+")) {
            var elements=inp1.value.split("+");
            header.innerHTML=Number(elements[0])+parseInt(elements[1])
            inp1.value='';
        }
        if (inp1.value.includes("-")) {
            var elements=inp1.value.split("-");
            header.innerHTML=Number(elements[0])-parseInt(elements[1]);
            inp1.value='';
        }
        if (inp1.value.includes("/")) {
            var elements=inp1.value.split("/");
            header.innerHTML=Number(elements[0])/parseInt(elements[1]);
            inp1.value='';
        }
        if (inp1.value.includes("*")) {
            var elements=inp1.value.split("*");
            header.innerHTML=Number(elements[0])*parseInt(elements[1]);
            inp1.value='';
        }
        if (inp1.value.includes("%")) {
            var elements=inp1.value.split("%");
            header.innerHTML=Number(elements[0])%parseInt(elements[1]);
            inp1.value='';
        }
        if (inp1.value.includes("")) {
            inp1.value='';
        }
    })
