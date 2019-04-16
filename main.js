
var width = window.innerWidth;
var height = window.innerHeight;


var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(width, height);
renderer.setClearColor(0x63ddff);
document.body.appendChild(renderer.domElement);
 
// create scene object
var scene = new THREE.Scene;

//Coordinates for 200 buildings
var buildingXs = [  
	-900, -900, -900, -900, -900, -900, -900, -900, -900, -900, 
	-850, -850, -850, -850, -850, -850, -850, -850, -850, -850,	
	-700, -700, -700, -700, -700, -700, -700, -700, -700, -700, 
	-650, -650, -650, -650, -650, -650, -650, -650, -650, -650,	
	-500, -500, -500, -500, -500, -500, -500, -500, -500, -500, 
	-450, -450, -450, -450, -450, -450, -450, -450, -450, -450,	
	-300, -300, -300, -300, -300, -300, -300, -300, -300, -300, 
	-250, -250, -250, -250, -250, -250, -250, -250, -250, -250,	
	-100, -100, -100, -100, -100, -100, -100, -100, -100, -100, 
	-50, -50, -50, -50, -50, -50, -50, -50, -50, -50,	
	100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
	150, 150, 150, 150, 150, 150, 150, 150, 150, 150,	
	300, 300, 300, 300, 300, 300, 300, 300, 300, 300,
	350, 350, 350, 350, 350, 350, 350, 350, 350, 350,	
	500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 
	550, 550, 550, 550, 550, 550, 550, 550, 550, 550,	
	700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 
	750, 750, 750, 750, 750, 750, 750, 750, 750, 750,	
	900, 900, 900, 900, 900, 900, 900, 900, 900, 900, 
	950, 950, 950, 950, 950, 950, 950, 950, 950, 950							
	];

var buildingZs = [  
	-900, -850, -700, -650, -500, -450, -300, -250, -100, -50, 
	-900, -850, -700, -650, -500, -450, -300, -250, -100, -50,	
	-900, -850, -700, -650, -500, -450, -300, -250, -100, -50, 
	-900, -850, -700, -650, -500, -450, -300, -250, -100, -50,
	-900, -850, -700, -650, -500, -450, -300, -250, -100, -50, 	
	-900, -850, -700, -650, -500, -450, -300, -250, -100, -50,
	-900, -850, -700, -650, -500, -450, -300, -250, -100, -50, 
	-900, -850, -700, -650, -500, -450, -300, -250, -100, -50,
	-900, -850, -700, -650, -500, -450, -300, -250, -100, -50, 
	-900, -850, -700, -650, -500, -450, -300, -250, -100, -50,
	-900, -850, -700, -650, -500, -450, -300, -250, -100, -50, 
	-900, -850, -700, -650, -500, -450, -300, -250, -100, -50,
	-900, -850, -700, -650, -500, -450, -300, -250, -100, -50, 
	-900, -850, -700, -650, -500, -450, -300, -250, -100, -50,
	-900, -850, -700, -650, -500, -450, -300, -250, -100, -50, 	
	-900, -850, -700, -650, -500, -450, -300, -250, -100, -50,
	-900, -850, -700, -650, -500, -450, -300, -250, -100, -50, 
	-900, -850, -700, -650, -500, -450, -300, -250, -100, -50,
	-900, -850, -700, -650, -500, -450, -300, -250, -100, -50, 
	-900, -850, -700, -650, -500, -450, -300, -250, -100, -50
	];

//Creates a ground surface
var groundGeometry = new THREE.PlaneGeometry(3000, 3000);
var groundMaterial1 = new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture('114_green grass texture-seamless.jpg')});

var groundMaterial = new THREE.MeshLambertMaterial( {color: 0x00db0f, side: THREE.DoubleSide});
var ground = new THREE.Mesh(groundGeometry, groundMaterial1);
ground.lookAt(new THREE.Vector3(0, 1, 0));
ground.position.y = 0;
scene.add(ground);

//array to hold the buildings
var buildings = []

//Dimensions for the buildings
var building1 = new THREE.BoxGeometry(25, 60, 25);
var building2 = new THREE.BoxGeometry(25, 80, 25);
var building3 = new THREE.BoxGeometry(25, 100, 25);
var building4 = new THREE.BoxGeometry(25, 140, 25);

//**********************************************************************************
//*********************************  TODO  *****************************************
//Update materials to have a building skin

//Buiding Textures
var bldgMaterial1 = new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture('84_building skyscraper texture-seamless.jpg')});
var bldgMaterial2 = new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture('4_glass building skyscraper texture-seamless.jpg')});
var bldgMaterial3 = new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture('59_glass building skyscraper texture-seamless.jpg')});
var bldgMaterial4 = new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture('42_building skyscraper texture-seamless.jpg')});

//Currently not used
var buildingMaterial1 = new THREE.MeshLambertMaterial({ color: 0xff0000});
var buildingMaterial2 = new THREE.MeshLambertMaterial({ color: 0xffffff});
var buildingMaterial3 = new THREE.MeshLambertMaterial({ color: 0x000000});
var buildingMaterial4 = new THREE.MeshLambertMaterial({ color: 0x0000ff});

//Place buildings
for(var i = 0; i < 200; i+=4){	
	var b1 = new THREE.Mesh(building1, bldgMaterial1); 
	b1.position.set(buildingXs[i], 30, buildingZs[i]);
	scene.add(b1);
	
	var b2 = new THREE.Mesh(building2, bldgMaterial2);
	b2.position.set(buildingXs[i + 1], 40, buildingZs[i + 1]);
	scene.add(b2);
	
	var b3 = new THREE.Mesh(building3, bldgMaterial3);
	b3.position.set(buildingXs[i + 2], 50, buildingZs[i + 2]);
	scene.add(b3);
	
	var b4 = new THREE.Mesh(building4, bldgMaterial4);
	b4.position.set(buildingXs[i + 3], 70, buildingZs[i + 3]);
	scene.add(b4);
	//add each building to the buildings array
	buildings.push(b1, b2, b3, b4);
}


/*
//place 5 more larger boxes
for(var i = 0; i < 5; i++){	
	var tower = new THREE.Mesh(towerGeometry1, towerMaterial1);
	tower.position.set(Math.random() * 1000 - 500, 5, Math.random() * 1000 - 500);
	scene.add(tower);
}
var tower2 = new THREE.Mesh(towerGeometry2, towerMaterial2);
tower2.position.set(10, 10, -150);
scene.add(tower2);
*/

 
// add lighting and add to scene
var directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(1000, 50, 300).normalize();
scene.add(directionalLight);
var ambientLight = new THREE.AmbientLight(0x202020);
scene.add(ambientLight);

// create perspective camera
var camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10000);
camera.position.x = 0;
camera.position.y = 200;
camera.position.z = 1200;
// add to scene and renderer
scene.add(camera); 
renderer.render(scene, camera);






var firstMouseMove  = true;

//var camPos = {x: 0, y: 0, z: -1};

var camMove = new THREE.Vector3(0, 0, 0);
var camStrafe = new THREE.Vector3(0, 0, 0);

var cameraLookAt = new THREE.Vector3(0, 0, -1);
var cameraRight = new THREE.Vector3(1, 0, 0);
var cameraUp = new THREE.Vector3().crossVectors(cameraRight, cameraLookAt);

var oldMousePos = {x: 0, y: 0};

function handleMouseMove(event) {
	if(firstMouseMove) {
		oldMousePos.x = event.clientX;
		oldMousePos.y = event.clientY;
		firstMouseMove = false;
		return;
	}

	var yaw = (oldMousePos.x - event.clientX) / 200.0;
	var pitch = (oldMousePos.y - event.clientY) / 200.0;
	
	cameraLookAt.applyAxisAngle(new THREE.Vector3(0, 1, 0), yaw);
	cameraRight.applyAxisAngle(new THREE.Vector3(0, 1, 0), yaw);
	
	cameraLookAt.applyAxisAngle(cameraRight, pitch);
	
	
	oldMousePos.x = event.clientX;
	oldMousePos.y = event.clientY;
	
		
}


function doKeyUp(evt) {
	var code = evt.keyCode;
	switch(code) {
		case 65: // a
			camStrafe.x = 0;  camStrafe.y = 0; camStrafe.z = 0;
			break;
		case 68: // d
			camStrafe.x = 0;  camStrafe.y = 0; camStrafe.z = 0;
			break;
		case 87:
			camMove.x = 0; camMove.y = 0; camMove.z = 0;
			break;
		case 83:
			camMove.x = 0; camMove.y = 0; camMove.z = 0;
			break;
	}
}

function doKeyDown(evt) {
	var code = evt.keyCode;
	switch(code) {
		case 65: // a
			camStrafe.x = -cameraRight.x / 1.0;
			camStrafe.y = -cameraRight.y / 1.0;
			camStrafe.z = -cameraRight.z / 1.0;
			break;
		case 68: // d
			camStrafe.x = cameraRight.x / 1.0;
			camStrafe.y = cameraRight.y / 1.0;
			camStrafe.z = cameraRight.z / 1.0;
			break;
		case 87: // w 			
			camMove.x = cameraLookAt.x / 1.0;
			camMove.y = cameraLookAt.y / 1.0;
			camMove.z = cameraLookAt.z / 1.0;			
			break;
		case 83: // s
			camMove.x = -cameraLookAt.x / 1.0;
			camMove.y = -cameraLookAt.y / 1.0;
			camMove.z = -cameraLookAt.z / 1.0;
			break;
		
	}

}


document.addEventListener('mousemove', handleMouseMove, false);

document.addEventListener('keydown', doKeyDown, false);
document.addEventListener('keyup', doKeyUp, false);




 
renderer.render(scene, camera);
function render() {


	camera.position.add(camMove);
	camera.position.add(camStrafe);
	

	var newLookAt = new THREE.Vector3().addVectors(camera.position, cameraLookAt);
	camera.lookAt(newLookAt);
	camera.up = cameraUp;
	
    renderer.render(scene, camera);
    requestAnimationFrame(render);

	
}
render();

