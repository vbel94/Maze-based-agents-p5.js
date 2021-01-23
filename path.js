class Path {
    constructor(way,size_wall) {
        this.way = way;
        this.size_wall = size_wall;
        this. c = color(255, 204, 0);
       
    }
    draw = function () {
        for (var i = 0; i < this.way.length; i++) { 
    
            fill( [0,(i*255/this.way.length),3,100]);  
            noStroke();
            console.log(this.way[i][0], this.way[i][1])
            rect(this.way[i][0]*this.size_wall, this.way[i][1]*this.size_wall, this.size_wall, this.size_wall);
        }
     }
}