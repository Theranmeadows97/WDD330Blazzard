function setupCanvas(){
    var canvas = document.getElementById("canvas");
    canvas.height = 500;
    canvas.width = 500;

    if (canvas.getContext){
        var layout = canvas.getContext('2d');

        layout.fillRect(10, 10, 150, 150) // (length, width, x coor, y coor)
        layout.clearRect(20, 20, 75, 75)// manipulating other shapes(length, width, x coor, y coor from estblished shape)

        layout.strokeRect(200, 10, 150, 150)// empty shape with border
        layout.fillRect(250, 50, 150, 150)

        layout.beginPath();
        layout.moveTo(20, 200);//starting point of a line
        layout.lineTo(20, 300);// ending point
        layout.lineTo(50, 300);// a connecting continuation point 
        layout.lineTo(20, 200);// line coming back to the origin
        //layout.stroke();
        layout.fill();

        layout.moveTo(80, 200);
        layout.lineTo(80, 300);// first vertical
        layout.moveTo(100, 200);
        layout.lineTo(100, 300);// second vertical
        layout.moveTo(50, 225);
        layout.lineTo(150, 225)// first horizontal
        layout.moveTo(50, 250);
        layout.lineTo(150, 250);//second horizontal
        layout.moveTo(50, 275);
        layout.lineTo(150, 275);// third horizontal
        layout.stroke();

        layout.moveTo(300,400);
        layout.arc(400,400, 100, 0, Math.PI * 2, true);// (x center, y center, radius, beginning angle, ending angle, boolean )
        layout.stroke();
        layout.createLinearGradient(0, 0, 0, 200);
        layout.addColorStop(0, "blue");
        

    }
}