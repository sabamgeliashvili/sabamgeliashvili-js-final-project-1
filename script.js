const linkJson = 'https://bitbucket.org/hpstore/spacex-cargo-planner/raw/204125d74487b1423bbf0453f4dcb53a2161353b/shipments.json';
const loader = document.getElementById("loader")
async function check(x){
let name = x 
loader.style.display = "block";
await fetch(linkJson)
.then((res) => {
  if(res.ok){
    return res.json();
  } 
  else throw new Error("invalid");
}).then((data)=> {
  loader.style.display = "none";
    data.forEach(element => {
        if (name == element.name) 
       { 
        document.getElementById('first-t').innerText=element.name;
        document.getElementById('second-t').innerText=element.email;
        document.getElementById('inp').value=element.boxes;
        const myElement = document.getElementById('inp');
        calculator(element.boxes).then((res)=> document.getElementById('quantity').innerText=res);
        myElement.addEventListener("input", ()=> calculator(document.getElementById('inp').value)
        .then((res) => document.getElementById('quantity').innerText=res));
    }
    });
})
.catch((err) => console.error(err));
 loader.style.display = "none";
}
async function calculator(n){  
  let x =  n.split(','); 
  let solution =  n.split(',').map(element => {return Number(element);});
  let count = 0; 
  solution.forEach(el => {count += el});  
  if (count%10 == 0) return count/10;
  else return Math.ceil(count/10);   
 } 



 // burger menu 

 const burger = document.querySelector('.burger');
 const navmenu = document.querySelector('.nav-menu');
 burger.addEventListener('click', () => {
    burger.classList.toggle ("active");
    navmenu.classList.toggle ("active");
 })
