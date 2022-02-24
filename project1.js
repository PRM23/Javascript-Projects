const hexInput=document.getElementById("hexInput");
const inputColor=document.getElementById('inputcolor');
const sliderText=document.getElementById('slider');
const slider=document.getElementById('slider');
const alteredColor=document.getElementById('alteredcolor');
const alterColorText=document.getElementById('alteredcolorText');


hexInput.addEventListener('keyup',()=>{

    const hex=hexInput.value;

    if(!isValidHex(hex)) return;

    inputColor.style.backgroundColor=hex;

    const strippedHex=hex.replace('#','');

    inputColor.style.backgroundColor='#' +strippedHex;

})

const isValidHex=(hex)=>{

    if(!hex) return false;

     const strippedHex=hex.replace('#','');
     return strippedHex.length===3 || strippedHex===6;
}


const converHexToRGB=(hex)=>{
    if(!isValidHex(hex)) return null;

    let strippedHex=hex.replace('#','');

    if(strippedHex.length===3){
        stripped=strippedHex[0]+strippedHex[0]
        +strippedHex[1]+strippedHex[1]
        +strippedHex[2]+strippedHex[2];
    }
   const r= parseInt(strippedHex.substring(0,2),16);
   const g= parseInt(strippedHex.substring(2,4),16);
   const b= parseInt(strippedHex.substring(4,6),16);
   return {r,g,b};
}

// console.log(converHexToRGB("123"));
const converRGBToHex=(r,g,b)=>{
    const firstpair=("0"+r.toString(16)).slice(-2);
    const secondpair=("0"+g.toString(16)).slice(-2);
    const thirdpair=("0"+b.toString(16)).slice(-2);

    const hex="#" +firstpair+secondpair+thirdpair;
    return hex;
}
const alterColor=(hex,percentage)=>{
    const {r,g,b}=converHexToRGB(hex);

    const amount=Math.floor((percentage/100)*255);

    const newR=r+increaseWithin0To255(r,amount);
    const newG=increaseWithin0To255(g,amount);
    const newB=increaseWithin0To255(b,amount);
    return converRGBToHex(newR,newG,newB);
}

const increaseWithin0To255 =(hex,amount)=>{
    // const newHex=hex+amount;
    // if(newHex>255)  return 255;
    // if(newHex<0) return 0;
    // return newHex;

    return Math.min(255,Math.max(0,hex+amount));
}

alterColor("fff", 10)

slider.addEventListener('input', () => {
  if(!isValidHex(hexInput.value)) return;
  
  sliderText.textContent = `${slider.value}%`;
  
  const alteredHex = alterColor(hexInput.value, slider.value);
  alteredColor.style.backgroundColor = alteredHex;
  alteredColorText.innerText = `Altered Color ${alteredHex}`; 
})


  