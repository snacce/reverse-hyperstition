var side
var height

var x1
var x2
var x3

var y1
var y2
var y3

var z1
var z2
var z3


function setup() {
createCanvas(500, 500, WEBGL);

side = 150;
  
// Calculate the height of the equilateral triangle
height = sqrt(3) / 2 * side;

noFill();

// Set the coordinates of the triangle vertices
x1 = 100, y1 = 50, z1 = 0;
x2 = x1 + side, y2 = y1; z2 = z1 + side
x3 = x1 + side / 2, y3 = y1 + height, z3 = z1 + side / 2;


}

function draw() {
  background(255);

  let options = {
    disableTouchActions: false,
    freeRotation: true
  };

   // Define the vertices of the diamond-shaped prism
   let side = 150;
   let height = sqrt(3) / 2 * side;
   let halfHeight = height / 2;
 
   let vertices = [
     createVector(-side / 2, -halfHeight, 0),
     createVector(side / 2, -halfHeight, 0),
     createVector(0, halfHeight, 0),
     createVector(0, 0, -height / sqrt(2)),
     createVector(0, 0, height / sqrt(2))
   ];
 
   // Draw the diamond-shaped prism
   beginShape(TRIANGLES);
   
   // Bottom half of the diamond
   vertex(vertices[0].x, vertices[0].y, vertices[0].z);
   vertex(vertices[1].x, vertices[1].y, vertices[1].z);
   vertex(vertices[3].x, vertices[3].y, vertices[3].z);
 
   vertex(vertices[1].x, vertices[1].y, vertices[1].z);
   vertex(vertices[2].x, vertices[2].y, vertices[2].z);
   vertex(vertices[3].x, vertices[3].y, vertices[3].z);
 
   vertex(vertices[2].x, vertices[2].y, vertices[2].z);
   vertex(vertices[0].x, vertices[0].y, vertices[0].z);
   vertex(vertices[3].x, vertices[3].y, vertices[3].z);
 
   // Top half of the diamond
   vertex(vertices[0].x, vertices[0].y, vertices[0].z);
   vertex(vertices[1].x, vertices[1].y, vertices[1].z);
   vertex(vertices[4].x, vertices[4].y, vertices[4].z);
 
   vertex(vertices[1].x, vertices[1].y, vertices[1].z);
   vertex(vertices[2].x, vertices[2].y, vertices[2].z);
   vertex(vertices[4].x, vertices[4].y, vertices[4].z);
 
   vertex(vertices[2].x, vertices[2].y, vertices[2].z);
   vertex(vertices[0].x, vertices[0].y, vertices[0].z);
   vertex(vertices[4].x, vertices[4].y, vertices[4].z);
   
   endShape(CLOSE);

   orbitControl(1, 1, 1, options);
 
  
 
}
