class Maze {
    constructor(width, height, maze) {

        this.maze = maze
        this.size_wall = height / this.maze.length;

    }
    get_Size_wall = function () { 
        return this.size_wall;
    }
    get_Map = function () { 
        return this.maze;
    }
     possible_go_up = function (i, j) { 
   
        if (i == 0) return false;
        const res = this.maze[i][j] & 1;
        return (res == 1) ?  true : false;
    }
     possible_go_down = function (i, j) { 
        if (i==this.maze.length) return false;
        const res = this.maze[i][j] & 2;
        return (res == 2) ?  true : false;
    }
     possible_go_right = function (i, j) {
        if (i==this.maze[i].length) return false;
        const res = this.maze[i][j] & 4;
        return (res == 4) ?  true : false;
    }
     possible_go_left = function (i, j) {
        if (j == 0) return false;
        const res = this.maze[i][j] & 8;
        return (res == 8) ?  true : false;
     }
     draw = function () {

        fill(0, 0, 0)
        strokeWeight(5)
        for (var i = 0; i < this.maze.length ; i ++) {
            {
                for (var j = 0; j < this.maze.length; j ++ ) {
                    if (this.possible_go_up(i, j) == false) { 
             
                        line(j*  this.size_wall,i*  this.size_wall,(j+1)*this.size_wall,(i)*  this.size_wall)
                    }
                    if (this.possible_go_down(i, j) == false) { 
             
                        line(j*  this.size_wall,(i+1)*  this.size_wall,(j+1)*this.size_wall,(i+1)*  this.size_wall)
                    }
                    
                    if (this.possible_go_right(i, j) == false) { 
                        line((j+1)*  this.size_wall,(i)*  this.size_wall,(j+1)*  this.size_wall,(i+1)*  this.size_wall)
                    }   
                    if (this.possible_go_left(i, j) == false) { 
                        line(j*  this.size_wall,i*  this.size_wall,(j)*  this.size_wall,(i+1)*this.size_wall)
                    }   
    
                }
            }
    
        }
    }
}




