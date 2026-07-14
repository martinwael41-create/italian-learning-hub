/* ===============================
LOADING
================================= */

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.opacity="0";

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},700);

},1500);

});



/* ===============================
MOUSE LIGHT
================================= */

document.addEventListener("mousemove",(e)=>{

document.body.style.setProperty("--x",e.clientX+"px");

document.body.style.setProperty("--y",e.clientY+"px");

});



/* ===============================
SCROLL TOP
================================= */

const topBtn=document.getElementById("scrollTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.opacity="1";

topBtn.style.pointerEvents="auto";

}else{

topBtn.style.opacity="0";

topBtn.style.pointerEvents="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};



/* ===============================
STARS
================================= */

for(let i=0;i<120;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDelay=Math.random()*4+"s";

document.body.appendChild(star);

}



/* ===============================
PARTICLES
================================= */

for(let i=0;i<25;i++){

const p=document.createElement("div");

p.className="particle";

const s=Math.random()*20+10;

p.style.width=s+"px";

p.style.height=s+"px";

p.style.left=Math.random()*100+"vw";

p.style.animationDuration=(10+Math.random()*15)+"s";

p.style.animationDelay=Math.random()*10+"s";

document.body.appendChild(p);

}
/* ===============================
GAME LINKS
================================= */

const games = {

colori1:"https://wordwall.net/it/resource/36824876/italiano-l2/i-colori-in-italiano-quiz",

colori2:"https://wordwall.net/it/resource/36824876/italiano-l2/memory-colori-italiano",

ora1:"https://wordwall.net/it/resource/12370064/orologio",

ora2:"https://wordwall.net/it/resource/29789872/storia/orologio",

mesi1:"https://wordwall.net/it/resource/30879194/italiano/mesi",

mesi2:"https://wordwall.net/it/resource/31920536/italiano/giorni-mesi-e-stagioni",

mesi3:"https://wordwall.net/it/resource/11608752/mesi",

det1:"https://wordwall.net/it/resource/53563075/italiano/articoli-determinativi-1",

det2:"https://wordwall.net/it/resource/29001516/italiano/articoli-determinativi",

det3:"https://wordwall.net/it/resource/1593215/italiano/articoli-determinativi",

agg1:"https://wordwall.net/it/resource/28551905/italiano/aggettivi-qualificativi",

ind1:"https://wordwall.net/it/resource/53566597/italiano/articoli-indeterminativi-1",

ind2:"https://wordwall.net/it/resource/23423653/italiano/articoli-indeterminativi",

ind3:"https://wordwall.net/it/resource/4055214/articoli-indeterminativi",

poss1:"https://wordwall.net/it/resource/104021687/italiano/aggettivi-possessivi-famiglia",

poss2:"https://wordwall.net/it/resource/30497438/aggettivi-possessivi-singolari-e-plurali",

poss3:"https://wordwall.net/it/resource/1218100/italiano/aggettivi-possessivi",

poss4:"https://wordwall.net/it/resource/19312986/italiano/aggettivi-possessivi",

questo1:"https://wordwall.net/it/resource/17184351/italiano-l2/che-cosa-%C3%A8-questo",

questo2:"https://wordwall.net/it/resource/61099227/cos%C3%A8-questo"

};



Object.keys(games).forEach(id=>{

const btn=document.getElementById(id);

if(!btn) return;

btn.addEventListener("click",(e)=>{

e.preventDefault();

btn.animate([

{transform:"scale(1)"},

{transform:"scale(.8)"},

{transform:"scale(1.15)"},

{transform:"scale(1)"}

],{

duration:350

});

setTimeout(()=>{

window.open(games[id],"_blank");

},180);

});

});



/* ===============================
RANDOM GAME
================================= */

document.getElementById("randomGame").onclick=()=>{

const links=Object.values(games);

const random=links[Math.floor(Math.random()*links.length)];

window.open(random,"_blank");

};