function display(num){
    document.getElementById("screen").value+=num

}

function comput(){
    let x=document.getElementById("screen").value
    let y=eval(x)
    document.getElementById("screen").value=y
}

function clr(){
    document.getElementById("screen").value=""
}