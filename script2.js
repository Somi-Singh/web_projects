function changeColour(){ 
    var color = document.getElementById("container1");
    var user = document.getElementById("input1");
    color.style.backgroundColor = user.value;
    user.value = null;
}