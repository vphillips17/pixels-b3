var img;

function preload(){
    img = loadImage("bardi.jpg")
}

function setup(){
    createCanvas(img.width,img.height);
    
}

function draw(){
    image(img,0,0); 
    loadPixels();
    
    for(var row = 0; row < height; row++){
        for(var col = 0; col < width; col++){
            var index = (col + row*width)* 4;
            
            r = pixels[index];
            g = pixels[index + 1];
            b = pixels[index + 2];
            a = pixels[index + 3];
            
            pixels[index] = r*2;
            pixels[index + 1] = g*2;
            pixels[index + 2] = b*2;
            pixels[index + 3] = a;
            
            pixels[index] = r;
            pixels[index + 1] = b;
            pixels[index + 2] = b;
            pixels[index + 3] = b;
            
            if(keyIsPressed){
                if(key== "1"){
                    gray_filter();
                }
            }
            
            
        }
    }
    
    updatePixels();
}

function gray_filter(){
    pixels[index] = 255 - r;
            pixels[index + 1] = g;
            pixels[index + 2] = b;
            pixels[index + 3] = a;
}