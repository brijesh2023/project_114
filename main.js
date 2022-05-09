function preload(){

}

function setup(){
 canvas=createCanvas(300,300)
 canvas.center()
}

function draw(){

}
function take_snapshot(){
    save("mam.jpg")
}


function gotposes(result){
    if(result.length>0)

    console.log(result)
    console.log("nose x="+result[0].pose.nose.x)
    console.log("nose y="+result[0].pose.nose.y)
}