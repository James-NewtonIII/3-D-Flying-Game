/*
this function create the building with images
it must provided with image path, the width, height and depth of the building
Image from :https://gamestextures.com/en/c/271/g/8824/Default.aspx
*/
function buildingImage(image,wdith,height,depth, positionX, positionY,positionZ) {
	
	//image loader
    var loader = new THREE.TextureLoader();
    var texture = loader.load(image);
    var material = new THREE.MeshBasicMaterial({
      map: texture,
      side: THREE.DoubleSide,
      opacity: 1
	});
	
	//add image to the box
	material.map.wrapS = material.map.wrapT = THREE.RepeatWrapping;
	material.map.repeat.set( 1, 1 );

	var building = new Physijs.BoxMesh(
		new THREE.CubeGeometry(wdith, height, depth),	
		material
		
	);
	//random position
	building.position.set(positionX, positionY, positionZ);

    return building;
}









function worker_function() {
    // all code here
	var width = window.innerWidth;
var height = window.innerHeight;


//declaring physijs and ammojs
Physijs.scripts.worker = '/js/physijs_worker.js';
Physijs.scripts.ammo = '/js/ammo.js';




var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(width, height);
renderer.setClearColor(0x63ddff);
document.body.appendChild(renderer.domElement);
 
// create scene object
var scene = new Physijs.Scene;


var groundGeometry = new THREE.PlaneGeometry(3000, 3000);
var groundMaterial1 = new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load('images/114_green grass texture-seamless.jpg')});

var groundMaterial = new THREE.MeshLambertMaterial( {color: 0x00db0f, side: THREE.DoubleSide});
var ground = new Physijs.PlaneMesh(groundGeometry, groundMaterial1);
ground.lookAt(new THREE.Vector3(0, 1, 0));
ground.position.y = 0;
scene.add(ground);

////////////////////////////////////////////Streets//////////////////////////////////


//////////diagonal streets street2-street7
//street2
var street2Geometry = new THREE.PlaneGeometry(40, 2050);
var street2Material1 = new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load('images/street.jpg')});
var street2 = new Physijs.PlaneMesh(street2Geometry, street2Material1);
street2.lookAt(new THREE.Vector3(0, 1, 0));
street2.position.y = .2;
street2.position.x=20;
street2.position.z=-175;
scene.add(street2);
//street3
var street3 = new Physijs.PlaneMesh(street2Geometry, street2Material1);
street3.lookAt(new THREE.Vector3(0, 1, 0));
street3.position.y = .2;
street3.position.x=20;
street3.position.z=-375;
scene.add(street3);
//street4
var street4 = new Physijs.PlaneMesh(street2Geometry, street2Material1);
street4.lookAt(new THREE.Vector3(0, 1, 0));
street4.position.y = .2;
street4.position.x=20;
street4.position.z=-575;
scene.add(street4);
//street5
var street5 = new Physijs.PlaneMesh(street2Geometry, street2Material1);
street5.lookAt(new THREE.Vector3(0, 1, 0));
street5.position.y = .2;
street5.position.x=20;
street5.position.z=-775;
scene.add(street5);
//street6
var street6 = new Physijs.PlaneMesh(street2Geometry, street2Material1);
street6.lookAt(new THREE.Vector3(0, 1, 0));
street6.position.y = .2;
street6.position.x=20;
street6.position.z=-975;
scene.add(street6);
//street7
var street7 = new Physijs.PlaneMesh(street2Geometry, street2Material1);
street7.lookAt(new THREE.Vector3(0, 1, 0));
street7.position.y = .2;
street7.position.x=20;
street7.position.z=25;
scene.add(street7);

/////////////////////////////////////straight streets//////////////////////////////
//Main Street
var streetGeometry = new THREE.PlaneGeometry(1040, 40);
var streetMaterial1 = new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load('images/street.jpg')});
var streetMaterial = new THREE.MeshLambertMaterial( {color: 0x00db0f, side: THREE.DoubleSide});
var street = new Physijs.PlaneMesh(streetGeometry, streetMaterial1);
street.lookAt(new THREE.Vector3(0, 1, 0));
street.position.y = .2;
street.position.x=20;
street.position.z=-475;
scene.add(street);
//street8
var street8 = new Physijs.PlaneMesh(streetGeometry, streetMaterial1);
street8.lookAt(new THREE.Vector3(0, 1, 0));
street8.position.y = .2;
street8.position.x=-175;
street8.position.z=-475;
scene.add(street8);
//street9
var street9 = new Physijs.PlaneMesh(streetGeometry, streetMaterial1);
street9.lookAt(new THREE.Vector3(0, 1, 0));
street9.position.y = .2;
street9.position.x=-375;
street9.position.z=-475;
scene.add(street9);
//street10
var street10 = new Physijs.PlaneMesh(streetGeometry, streetMaterial1);
street10.lookAt(new THREE.Vector3(0, 1, 0));
street10.position.y = .2;
street10.position.x=-575;
street10.position.z=-475;
scene.add(street10);
//street11
var street11 = new Physijs.PlaneMesh(streetGeometry, streetMaterial1);
street11.lookAt(new THREE.Vector3(0, 1, 0));
street11.position.y = .2;
street11.position.x=-775;
street11.position.z=-475;
scene.add(street11);
//street12
var street12 = new Physijs.PlaneMesh(streetGeometry, streetMaterial1);
street12.lookAt(new THREE.Vector3(0, 1, 0));
street12.position.y = .2;
street12.position.x=-1025;
street12.position.z=-475;
scene.add(street12);
//street13
var street13 = new Physijs.PlaneMesh(streetGeometry, streetMaterial1);
street13.lookAt(new THREE.Vector3(0, 1, 0));
street13.position.y = .2;
street13.position.x=225;
street13.position.z=-475;
scene.add(street13);
//street14
var street14 = new Physijs.PlaneMesh(streetGeometry, streetMaterial1);
street14.lookAt(new THREE.Vector3(0, 1, 0));
street14.position.y = .2;
street14.position.x=425;
street14.position.z=-475;
scene.add(street14);
//street15
var street15 = new Physijs.PlaneMesh(streetGeometry, streetMaterial1);
street15.lookAt(new THREE.Vector3(0, 1, 0));
street15.position.y = .2;
street15.position.x=625;
street15.position.z=-475;
scene.add(street15);
//street16
var street16 = new Physijs.PlaneMesh(streetGeometry, streetMaterial1);
street16.lookAt(new THREE.Vector3(0, 1, 0));
street16.position.y = .2;
street16.position.x=825;
street16.position.z=-475;
scene.add(street16);
//street17
var street17 = new Physijs.PlaneMesh(streetGeometry, streetMaterial1);
street17.lookAt(new THREE.Vector3(0, 1, 0));
street17.position.y = .2;
street17.position.x=1025;
street17.position.z=-475;
scene.add(street17);
/////////////////////////////////////////////////////////////////End of Streets//////////////////////////////////////////////////
//creates a single pyramid
var pyramidGeo = new THREE.CylinderGeometry(0, 40, 60, 4);
var pyramid = new Physijs.CylinderMesh(pyramidGeo, new THREE.MeshLambertMaterial({ color: 0xffffff}));
pyramid.position.set(300, 0, -300);
scene.add(pyramid);



//position boxes in a city like environment

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


for(var i = 0; i < 200; i+=4){	
	
	var b1 = buildingImage("images/house_wall.jpg" ,25, 60,25, buildingXs[i], 30,buildingZs[i] );
	scene.add(b1);
	
	var b2 = buildingImage("images/bricks_wall.jpg" ,25, 80,25, buildingXs[i+1], 40,buildingZs[i+1] );
	scene.add(b2);
	
	var b3 = buildingImage("images/concrete_wall.jpg" ,25, 100,25, buildingXs[i+2], 50,buildingZs[i+2] );
	scene.add(b3);
	
	var b4 = buildingImage("images/office_wall.jpg" ,25, 140,25, buildingXs[i+3], 70, buildingZs[i+3] );
	scene.add(b4);
}



 
// add lighting and add to scene
var directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(1000, 50, 300).normalize();
scene.add(directionalLight);
var ambientLight = new THREE.AmbientLight(0x202020);
scene.add(ambientLight);

// create perspective camera
var camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10000);
camera.position.x = 0;
camera.position.y = 5;
camera.position.z = 40;
// add to scene and renderer
scene.add(camera); 
renderer.render(scene, camera);
camera.lookAt(pyramid);





var firstMouseMove  = true;

var camPos = {x: 0, y: 0, z: -1};

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
	
    scene.simulate(); // run physics
	renderer.render( scene, camera); // render the scene
	requestAnimationFrame( render );

	
}
render();

}

worker_function();