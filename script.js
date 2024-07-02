let URL = "https://cat-fact.herokuapp.com/facts"
const para = document.querySelector("#ak");
const btn = document.querySelector("#btn");


const fetching = async () =>{
    let fetchdata = await fetch(URL);
    console.log(fetchdata);
    let data = await fetchdata.json()
    // console.log(data);
    para.innerText = data[0].text;  
}
// fetching();
btn.addEventListener("click",fetching)