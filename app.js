var szamitGomb=document.getElementById("szamitGomb");
var eredmenyIn=document.getElementById("eredmeny");
var oldalIn=document.getElementById("oldal");
szamitGomb.addEventListener('click',function(){ let oldalIn=oldalIn.value;
    let minta=/^[0-9]+$/;
    if(oldalIn.match(minta)){
        console.log('oké')

    }else{console.log('nem oké')
    alert('hiba! csak szám adható meg ')
return;
};
let oldal =Number(oldalIn.value);

