var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL('https://media-exp1.licdn.com/dms/image/C5603AQHLD4FtW62zSA/profile-displayphoto-shrink_200_200/0/1620933016173?e=2147483647&v=beta&t=LVFrHcVCsqU8borPyy4BbofXX7vi2RYeKhePxYdJz1I', function(Img) {
        block_image_object= Img;

        block_image_object.scaleToWidth(1000);
        block_image_object.scaleToHeight(510);
        block_image_object.set({
            top:0,
            left:0
        });
        canvas.add(block_image_object);
    });

}

function playSound(){
	x.play();
}