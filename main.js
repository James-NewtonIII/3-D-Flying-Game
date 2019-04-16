/*
this function create the building with images
it must provided with image path, the width, height and depth of the building

Image from :https://gamestextures.com/en/c/271/g/8824/Default.aspx
*/
function buildingImage(image,wdith,height,depth) {
	
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
	material.map.repeat.set( 3, 3 );

	var building = new Physijs.BoxMesh(
		new THREE.CubeGeometry(wdith, height, depth),	
		material
		
	);
	//random position
	building.position.set(Math.random() * 1000 - 500, 0, Math.random() * 1000 - 500);

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


var groundGeometry = new THREE.PlaneGeometry(1000, 1000);
var groundMaterial = new THREE.MeshLambertMaterial( {color: 0x00bf0f, side: THREE.DoubleSide});
var ground = new THREE.Mesh(groundGeometry, groundMaterial);
ground.lookAt(new THREE.Vector3(0, 1, 0));
ground.position.y = -10;
scene.add(ground);



//creates a single pyramid
var pyramidGeo = new THREE.CylinderGeometry(0, 40, 60, 4);
var pyramid = new Physijs.CylinderMesh(pyramidGeo, new THREE.MeshLambertMaterial({ color: 0xffffff}));
pyramid.position.set(300, 0, -300);
scene.add(pyramid);



//randomly position 100 boxes in a 300x300 square
for(var i = 0; i < 50; i++){	
	
	var cube = buildingImage("images/office_wall.jpg" ,3, 20,3 );
	scene.add(cube);
	
	cube1 = buildingImage("images/house_wall.jpg" ,3, 10,3 );
	scene.add(cube1);
}
//place 5 more larger boxes
for(var i = 0; i < 5; i++){

	var tower = buildingImage("images/concrete_wall.jpg" ,5, 30,5 );
	scene.add(tower);
}
var tower2 = new Physijs.BoxMesh(
			new THREE.CubeGeometry(5, 40, 5),
			new THREE.MeshLambertMaterial({ color: 0xffffff})
	);
tower2.position.set(10, 10, -150);
scene.add(tower2);


 
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
camera.lookAt(tower2.position);





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
console.clear();
}

worker_function();