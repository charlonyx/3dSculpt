var arrSize = 100; //available printing space (in mm^2)
var cubeSize = arrSize/2;//size of clay
//initialize array with 0s
var matrix = new Array(arrSize);
starti = (arrSize - cubeSize/2);
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

//set old_matrix (used for undo)
var old_matrix = matrix;

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
function push(fingers, palms, finger_width){
	for(i=0; i<fingers.length; i++){
		matrix[[fingers[i][0]][fingers[i][1]][fingers[i][2]]] = 0;
	}
	for(i=0; i<palms.length; i++){
		matrix[palms[i]] = 0;
	}
}

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

function sculpt(){
	//get finger and palm coords -> sculptFingers/sculptPalms
	//func = carve/push/add based on settings
	//finger-width (also based on settings)
	//s = setInterval(func(fingers,palms, finger_width, etc), 3000)
}