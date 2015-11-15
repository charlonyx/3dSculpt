var arrSize = 200; //available printing space (in (mm^2)/2)
var cubeSize = arrSize/2;//size of clay
//initialize array with 0s
var matrix = new Array(arrSize);
var starti = (arrSize - cubeSize/2);
var finger-width = 5;
function initialize(first = true){
	for(i=0;i<arrSize;i++){
		matrix[i] = new Array(arrSize);
		for(j=0;j<arrSize;j++){
			matrix[i][j] = new Array(arrSize);
			for(k=0;k<arrSize;k++){
				matrix[i][j][k] = 0;
			}
		}
	}
	//add in 1s to initialize as a cube of clay
	for(i=starti; i<cubeSize+starti-1; i++){
		for(j=starti; j<cubeSize+starti-1; j++){
			for(k=starti; k<cubeSize+starti-1; k++){
				matrix[i][j][k] = 1;
			}
		}
	}	
	if(first){
		//set old_matrix (used for undo)
		var old_matrix = matrix;
	}
}

//revert to previous position
function undo(){
	tmp_matrix = matrix;
	matrix = old_matrix;
	old_matrix = tmp_matrix;
}

//take away pieces of the clay if touched
function carve(fingers, finger_width){
	for(i=0; i<fingers.length; i++){
		if(matrix[fingers[i][0]][fingers[i][1]][fingers[i][2]] == 1){
			x = fingers[i][0];
			y = fingers[i][1];
			z = fingers[i][2];
			old_matrix = matrix;
			if(finger_width == 1){
				matrix[x][y][z] = 0;
			} else {
				for(i=x-finger_width; i<x+finger_width; i++){
					for(j=y-finger_width; j<y+finger_width; j++){
						for(k=z-finger_width; k<z+finger_width; k++){
							matrix[i][j][k] = 0;
						}
					}
				}
			}
		}
	}
}

//squish/manipulate the clay
/*function shapeF(fingers, directions, finger_width, clay_type){
	if(clay_type == "soft"){depth = 10;} else {depth = 5;}
	for(i=0; i<fingers.length; i++){
		if(matrix[fingers[i][0]][fingers[i][1]][fingers[i][2]] == 1){
			//coordinates are based on direction of finger (direction of movement?)
			x = fingers[i][0];
			y = fingers[i][1];
			z = fingers[i][2];
			//figure out which coordinate to set as "depth"
			/* something like:
			if depthcoord = x:
				tmp = x
				x = z
				z = tmp			

			old_matrix = matrix;
			for(i=x-finger_width; i<x+finger_width; i++){
				for(j=y-finger_width; j<y+finger_width; j++){
					for(k=0; k<depth; k++){
						matrix[i][j][k] = 0;
					}
				}
			}
		}
	}
}
function shapeP(palms, directions, clay_type){
	if(clay_type == "soft"){depth = 4;} else {depth = 2;}
	for(i=0; i<palms.length; i++){
		if(matrix[palms[i][0]][palms[i][1]][palms[i][2]] == 1){
			//coordinates are based on direction of finger (direction of movement?)
			x = palms[i][0];
			y = palms[i][1];
			z = palms[i][2];
						//figure out which coordinate to set as "depth"
			/* something like:
			if depthcoord = x:
				tmp = x
				x = z
				z = tmp				
			
			old_matrix = matrix;
			for(i=x-finger_width; i<x+finger_width; i++){
				for(j=y-finger_width; j<y+finger_width; j++){
					for(k=0; k<depth; k++){
						matrix[i][j][k] = 0;
					}
				}
			}
		}
	}
}*/

//not sure if i need this
/*function getHands(){
	//fingers should be an array with coords x,y,z for each distal (fingertip)
	var hand = frame.hands[0];
	var palm = ?;
	var finger = hand.fingers[0];
	fingerPos = new Array();
	for(i=0;i<fingers.length;i++){
		
	}
	return
}*/

//reset clay
function reset(){
	//old_matrix = matrix;
	initialize(false);	
}

/*function pressureFromSpeed(speed){
	pressure = speed;
	return pressure;
}*/

function sculpt(fingers){
	finger-width = settings.getWidth();
	carve(fingers, finger-width);
	//s = setInterval(func(fingers,palms, finger_width, etc), 3000)
}