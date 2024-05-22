function setup() {
    var cnv = createCanvas(windowWidth, windowHeight, WEBGL);
  cnv.style('display', 'block');
  }
  
  function draw() {
    background(255);
    
    // Rotate the canvas
    rotateX(frameCount*0.0025);
    rotateY(frameCount*0.001    );
    
    // Coordinates for verteces of the pyramid

    // plain

    line(0,0,0,150,0,0);
    line(150,0,0,150,150,0);
    line(150,150,0,0,150,0);
    line(0,150,0,0,0,0);

    // top triangle verticies

    line(0,0,0,75,75,150);
    line(150,0,0,75,75,150);
    line(150,150,0,75,75,150);
    line(0,150,0,75,75,150);

    // bottom verticies

    line(0,0,0,75,75,-150);
    line(150,0,0,75,75,-150);
    line(150,150,0,75,75,-150);
    line(0,150,0,75,75,-150);
    
   
  }