// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init () {

   //question 1
    window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
});

const takeOff = document.getElementById("takeoff");
const land = document.getElementById("landing");
const abrotMission = document.getElementById("missionAbort");

// question 2
takeOff.addEventListener("click", function (event){
    let response = window.confirm("Confirm that the shuttle is ready for takeoff")
    if (response){
        document.getElementById("flightStatus").innerHTML = "Shuttle in flight."
        document.getElementById("shuttleBackground").style.backgroundColor = "blue"
        document.getElementById("spaceShuttleHeight").innerHTML = 10000
        event.stopPropagation();
    } 
// question 3
land.addEventListener("click", function(){
    window.alert("The shuttle is landing. Landing gear engaged.")
    document.getElementById("flightStatus").innerHTML = "The shuttle has landed."
    document.getElementById("shuttleBackground").style.backgroundColor = "green"
    document.getElementById("spaceShuttleHeight").innerHTML = 0
    event.stopPropagation();
})
//question 4
abrotMission.addEventListener("click", function(event) {
    let responseToAbrotMission = window.confirm("Confirm that you want to abort the mission.");
    if (responseToAbrotMission){
        document.getElementById("flightStatus").innerHTML = "Mission aborted."
        document.getElementById("shuttleBackground").style.backgroundColor = "green"
        document.getElementById("spaceShuttleHeight").innerHTML =0
        event.stopPropagation();
    }

})


})}


window.addEventListener("load", init);