// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init () {
    window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
});


const takeOff = document.getElementById("takeoff")
const land = document.getElementById("landing")


takeOff.addEventListener("click", function (event){
    let responce = window.confirm("Confirm that the shuttle is ready for takeoff")
    if (responce){
        document.getElementById("flightStatus").innerHTML = "Shuttle in flight."
        document.getElementById("shuttleBackground").style.backgroundColor = "blue"
        document.getElementById("spaceShuttleHeight").innerHTML = 10000
    } 

land.addEventListener("click", function(){
    window.alert("The shuttle is landing. Landing gear engaged.")
    document.getElementById("flightStatus").innerHTML = "The shuttle has landed."
    document.getElementById("shuttleBackground").style.backgroundColor = "green"
    document.getElementById("spaceShuttleHeight").innerHTML = 0
})

})}


window.addEventListener("load", init);