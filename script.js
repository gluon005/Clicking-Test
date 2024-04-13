let start = document.querySelector(".start");
let click = document.querySelector(".click");
let time = document.querySelector(".timecount");
let nclick = document.querySelector(".noclicks");
click.disabled = true;
click.classList.add("disabled1");
x=0;
result = 0;
function countSeconds() {
    let count = 1;
    let timer = setInterval(() => {
        if (count <= 5) {
            time.innerText = count;
            count++;
        } else {
            clearInterval(timer);
            click.disabled = true;
            click.classList.add("disabled"); 
            calculations();
            click.innerText = `Result:  ${result} Clicks per minute`;
        }
    }, 1000); 
}
start.addEventListener("click", () => {
    click.disabled = false;
    click.classList.add("enabled");
    countSeconds();
});
function countClicks(){
    x++;
    nclick.innerText = x;
}
click.addEventListener("click",()=>{
    countClicks();
});
function calculations(){
    result = x*12;
}
