class Agent {

  static where_agents_be;

  constructor(x, y, maze) {
    this.stack_way=[[x,y]]
this.color=color(random (0,255),random(0,255),random (0,255))
    this.x = x;
    this.y = y;
    this.position_to_draw_x;
    this.position_to_draw_y;
    this.wall_size = maze.get_Size_wall() / 2;
    this.move_to_cord(this.x, this.y, this.wall_size);
    this.size = size / 4;
    this.maze = maze;
    this.last_visit=[this.x,this.y]


  }
  possible_go_up = function (x, y) {

    if (y == 0) return false;
    const res = this.maze.get_Map()[y][x] & 1;
    return (res == 1) ? true : false;
  }
  possible_go_down = function (x, y) {
    if (y == this.maze.get_Map().length) return false;
    const res = this.maze.get_Map()[y][x] & 2;
    return (res == 2) ? true : false;
  }
  possible_go_right = function (y, x) {
    if (x == this.maze.get_Map().length) return false;
    const res = this.maze.get_Map()[x][y] & 4;
    return (res == 4) ? true : false;
  }
  possible_go_left = function (y, x) {
    if (x == 0) return false;
    const res = this.maze.get_Map()[x][y] & 8;
    return (res == 8) ? true : false;
  }


  move_to_cord = function (x, y, size_wall) {
    this.position_to_draw_x = maze.get_Size_wall() / 2;
    this.add_to_position_to_draw_x(x);
    this.position_to_draw_y = maze.get_Size_wall() / 2;
    this.add_to_position_to_draw_y(y);
  }


  give_score = (where_i_can_move) => {
    let u, d, r, l;
    [u, d, r, l] = where_i_can_move;
    u = u == true ? -Agent.where_agents_be[this.y-1][this.x]:-Number.MAX_SAFE_INTEGER
    d = d == true ? -Agent.where_agents_be[this.y+1][this.x]:-Number.MAX_SAFE_INTEGER
    r = r == true ? -Agent.where_agents_be[this.y][this.x+1]:-Number.MAX_SAFE_INTEGER
    l = l == true ? -Agent.where_agents_be[this.y][this.x - 1] :-Number.MAX_SAFE_INTEGER
    
    return [u, d, r, l];



  }
  choose_way_to_go = function () {

    let where_i_can_move = [this.possible_go_up(this.x, this.y), this.possible_go_down(this.x, this.y), this.possible_go_right(this.x, this.y), this.possible_go_left(this.x, this.y)];

    let max_score_index = this.give_score(where_i_can_move).indexOf(Math.max(...this.give_score(where_i_can_move)));
    switch (max_score_index) {
      case 0:
        return 'up'; 
        break;
        case 1:
        return 'down';
        break;
        case 2:
        return 'right';
        break;
        case 3:
        return 'left';
        break;
    }
    



  }
  start_move_randomly = function () {
    var res = this.choose_way_to_go();
    Agent.where_agents_be[this.y][this.x]++;
    
    switch (res) {
      case 'up':
        this.move_to_cord(this.x, this.y - 1, this.wall_size);
        this.y -= 1;
        break;
      case  'down':
        this.move_to_cord(this.x, this.y + 1, this.wall_size);
        this.y += 1;
        break;
      case 'right':

        this.move_to_cord(this.x + 1, this.y, this.wall_size);
        this.x += 1;
        break;
      case 'left':
        this.move_to_cord(this.x - 1, this.y, this.wall_size);
        this.x -= 1;
        break;

    }
    if (JSON.stringify(this.stack_way[this.stack_way.length - 2]) === JSON.stringify([this.x, this.y])) {
      
      let bad_way = this.stack_way.pop();


    }
    else {
   
          this.stack_way.push([this.x, this.y])
         
        }

      }
    
  get_stack_way = function () {
    return this.stack_way;
}

  add_to_position_to_draw_x = function (num) {



    num = Math.abs(num);

    var mul = 1;
    for (var i = 0; i < num; i++)
      mul += 2;


    this.position_to_draw_x *= mul;

  }
  add_to_position_to_draw_y = function (num) {

    num = Math.abs(num);
    var mul = 1;

    for (var i = 0; i < num; i++)
      mul += 2;

    this.position_to_draw_y *= mul;

  }
  draw = function () {
    
    // if(this.x!=9 || this.y!=9 )
    // this.start_move_randomly();
    //fill(random(255), random(255), random(255));
    //ellipse(this.x, this.y, 40, 40);
    fill(this.color)
    ellipse(this.position_to_draw_x, this.position_to_draw_y, this.maze.get_Size_wall() / 2, this.maze.get_Size_wall() / 2)
    


  }
}







