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
            
            
            if(keyIsPressed){
                if(key== "1"){
                    gray_filter(index, g, a);
                }
                if(key== "2"){
                    victor_one(index, r, g, b, a);
                }
                if(key== "3"){
                    victor_two(index, r, g, b, a);
                }
                if(key== "4"){
                    victor_three(index, r, g, b, a);
                }
                
            }
            
        }
    }
    
    updatePixels();
}

function gray_filter(index,g,a){
    pixels[index] = g;
    pixels[index + 1] = g;
    pixels[index + 2] = g;
    pixels[index + 3] = a;
}

function victor_one(index, r, g, b, a){
    pixels[index] = r*2;
    pixels[index + 1] = g*2;
    pixels[index + 2] = b*2;
    pixels[index + 3] = a;
}

function victor_two(index, r, g, b, a){
    pixels[index] = 0;
    pixels[index + 1] = g;
    pixels[index + 2] = 0;
    pixels[index + 3] = a;
}

function victor_three(index, r,g,b,a){
     pixels[index] = r;
    pixels[index + 1] = b;
    pixels[index + 2] = g;
    pixels[index + 3] = a;
}



