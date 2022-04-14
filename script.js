//Js Draft For Practise Purpose
//adding just a comment
let total=0;
let count=0;
console.log(count);
let increment=()=>{
  count+=1;
  document.getElementById('counter').innerText=count;
};
let decrease=()=>{
  count-=1;
  document.getElementById('counter').innerText=count;
};

let save=()=>{
  if(count==0){
    alert('Nothing to save')
  }
  let display=count+'|';
  document.getElementById('saved').innerText=count;
  document.getElementById('previously').innerText+=display;
  total+=count;
  console.log("Total="+total);
  count=0;
  document.getElementById('counter').innerText=count;
  document.getElementById('total').innerText=total;

}


