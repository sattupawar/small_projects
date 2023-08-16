let display = document.querySelector("#quotes");
let disAuthor = document.querySelector("#author");

let getRandom = () => {
  let random = Math.round(Math.random() * 16);

  let quote = realData[random].text;
  let temp = realData[random].author.split(",");
  console.log(temp[0]);
    
    display.innerHTML=`${ quote}`
    disAuthor.innerHTML=`by ${temp[0]}`
};

let realData = "";
let getData = async () => {
  let api = "https://type.fit/api/quotes";
  try {
    let data = await fetch(api);
    realData = await data.json();

    getRandom();
  } catch (error) {
    console.log(error);
  }
};
 

let button=document.querySelector("#button")
 window.addEventListener("load",()=>{
    getData();
 })
button.addEventListener("click",(e)=>{
e.preventDefault();
    getData();
})
