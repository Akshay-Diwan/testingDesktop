const button = document.getElementById("button");

const F5 = document.getElementById("F5");
const A = document.getElementById("A");
const AErr = document.getElementById("AErr");
const FErr = document.getElementById("FErr");

button.addEventListener('click',function(){
    const angles = document.getElementsByClassName("angle"); 
const forces = document.getElementsByClassName("force"); 
let x = 0;
let y = 0;
for (let index = 0; index < angles.length - 1; index++) {
    console.log(angles[index].value + " " + forces[index].value);
    x = x + Math.cos(Math.PI * angles[index].value/180) * forces[index].value;
    y = y + Math.sin(Math.PI * angles[index].value/180) * forces[index].value;
}
    F5.innerText ="Correct F5 = " + Math.sqrt(x*x + y*y);
    A.innerText = "Correct Angle of F5 = " + (Math.atan(y/x)*180/Math.PI + 180)%360;
    let aErr = Math.abs((angles[4].value - (Math.atan(y/x)*180/Math.PI + 180)%360));
    AErr.innerText = "Angle Error = "+ aErr*100/(angles[4].value) + "%";

    let fErr = Math.abs((forces[4].value - Math.sqrt(x*x + y*y)))
    FErr.innerText = "Force Error = "+ fErr * 100/(forces[4].value) + "%";
    console.log("Clicked...Clicked...");
});