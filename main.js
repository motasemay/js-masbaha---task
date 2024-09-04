const oneBtn=document.querySelector(".sobhanAllah button");
const twoBtn=document.querySelector(".alhumduleAllah button");
const threeBtn=document.querySelector(".allahAkbar button");
const fourBtn=document.querySelector(".laIlahIlaAllah button");

oneCounter=0;
twoCounter=0;
threeCounter=0;
fourCounter=0;

oneBtn.onclick=()=>{
    oneCounter++;
    document.querySelector(".sobhanAllah span").innerHTML=oneCounter;
}
twoBtn.onclick=()=>{
    twoCounter++;
    document.querySelector(".alhumduleAllah span").innerHTML=twoCounter;
}
threeBtn.onclick=()=>{
   threeCounter++;
    document.querySelector(".allahAkbar span").innerHTML=threeCounter;
}
fourBtn.onclick=()=>{
    fourCounter++;
    document.querySelector(".laIlahIlaAllah span").innerHTML=fourCounter;
}
