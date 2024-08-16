let mode  =  document.getElementById('mode');

// function day(){
//     mode.style.background = "#d3f8f8";
//     mode.style.color = "black"
// }

// function night(){
//     mode.style.background = "#444442";
//     mode.style.color = "white";
// }
// __________________________________

let btnText = document.getElementById("textChange");

let temp = 0;
function changeMode(){
 if(temp){
    mode.style.background = "#d3f8f8";
    mode.style.color = "black";
    temp = 0;
    btnText.innerText = "Night"
    // document.getElementsByTagName("button").;
 } 
 else{
    mode.style.background = "#444442";
    mode.style.color = 'wheat';
    temp = 1;
    btnText.innerText = "Day";
 }
}
