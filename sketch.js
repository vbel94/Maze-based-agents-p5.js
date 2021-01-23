var agents = [];
var width;
var height;
var num_agent;
const start_point = [0, 0];
const end_point = [9, 9];
var flag_end = 0;
var index_best_agent;
var path;
this.maze_map =
  [
  [2, 2, 6, 12, 14, 12,10,6, 12, 10],
  [7, 9, 5, 10, 3, 2, 3, 3, 2, 3],
  [3, 6, 14, 9, 5, 9, 3, 5, 11, 3],
  [3, 3, 1, 4, 12, 12, 11, 2, 3, 3],
  [7, 11, 6, 8, 6, 12, 9, 7, 11, 3],
  [3, 5, 9, 6, 9, 6, 12, 9, 7, 3],
  [1, 4, 10, 3, 2, 5, 12, 10, 6, 9],
  [6, 12, 13, 13, 13, 10, 4, 11, 3, 2],
  [3, 2, 4, 12, 10, 5, 12, 9, 5, 11],
  [5, 13, 12, 8, 13, 12, 12, 12, 12, 11 ],
  ]


function setup() {
  frameRate(10);
  height = 700, width = 700;
  num_agent = 2;
  createCanvas(this.width, this.height);
  background(155)
  maze = new Maze(width, height, this.maze_map);
  Agent.where_agents_be = Array(maze_map.length).fill().map(() => Array(maze_map.length).fill(0));

  setInterval(() => { agents.push(new Agent(start_point[0], start_point[1], maze)) }, 200);
 
}

function draw() {

  background(255/2)
  maze.draw();

  if (flag_end != 1) {

    for (var i = 0; i < agents.length; i++) {
      if (agents[i].x == end_point[0] && agents[i].y == end_point[1]) {
        console.log(agents[i].get_stack_way())
        index_best_agent = i;
        flag_end = 1;
        break;
      }
      agents[i].start_move_randomly();
      agents[i].draw();
  
    }
  }
  else { 
    path = new Path(agents[index_best_agent].get_stack_way(),maze.get_Size_wall());
    
    path.draw();

    noLoop();
  }
 
}