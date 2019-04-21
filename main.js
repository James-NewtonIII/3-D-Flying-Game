/*
this function create the building with images
it must provided with image path, the width, height and depth of the building
Image from :https://gamestextures.com/en/c/271/g/8824/Default.aspx
*/
function buildingImage(image,width,height,depth, positionX, positionY,positionZ) {
	
	//image loader
    var texture = new THREE.TextureLoader().load(image);
    var material = new THREE.MeshLambertMaterial({
      map: texture,
      side: THREE.DoubleSide,
      opacity: 1
	});
	
	//add image to the box
	material.map.wrapS = material.map.wrapT = THREE.RepeatWrapping;
	material.map.repeat.set( 1, 1 );

	var building = new Physijs.BoxMesh(
		new THREE.CubeGeometry(width, height, depth),	
		material
		
	);
	building.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
    // `this` has collided with `other_object` with an impact speed of `relative_velocity` and a rotational force of `relative_rotation` and at normal `contact_normal`
	});																													 
	//random position
	building.position.set(positionX, positionY, positionZ);
	buildingGroup.add(building);
    return building;
}
//worker function for logic code
function worker_function() {
    // all code here
var width = window.innerWidth;
var height = window.innerHeight;

//declaring physijs and ammojs
Physijs.scripts.worker = './lib/physijs_worker.js';
Physijs.scripts.ammo = './lib/ammo.js';
//renderer
var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(width, height);
renderer.setClearColor(0x63ddff);
document.body.appendChild(renderer.domElement);
// create scene object
var scene = new Physijs.Scene;

//create ground
var groundGeometry = new THREE.PlaneGeometry(4096, 4096);
var groundMaterial1 = new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load('images/grass_texture.jpg'), side: THREE.DoubleSide});
	groundMaterial1.map.wrapS = groundMaterial1.map.wrapT = THREE.RepeatWrapping;
	groundMaterial1.map.repeat.set( 4, 4 );
//var groundMaterial = new THREE.MeshLambertMaterial( {color: 0x00db0f, side: THREE.DoubleSide});
var ground = new Physijs.PlaneMesh(groundGeometry, groundMaterial1);
ground.lookAt(new THREE.Vector3(0, 1, 0));
ground.position.y = 0;
ground.position.z = -500;
ground.receiveShadow = true;
scene.add(ground);
//Creates buildingGroup
buildingGroup = new THREE.Group();
////////////////////////////////////////////Streets//////////////////////////////////
//diagonal streets 
var street2Geometry = new THREE.PlaneGeometry(40, 2050);
var street2Material1 = new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load('images/street.jpg')});
z= -175;
for(var i=0; i<6; i++){
	var street2 = new Physijs.PlaneMesh(street2Geometry, street2Material1);
	street2.lookAt(new THREE.Vector3(0, 1, 0));
	street2.position.y = .2;
	street2.position.x=20;
	street2.position.z=z;
	scene.add(street2);
	z-=200;	
}
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
var x= -175;
for(var i=0; i<4; i++){
	var street8 = new Physijs.PlaneMesh(streetGeometry, streetMaterial1);
street8.lookAt(new THREE.Vector3(0, 1, 0));
street8.position.y = .2;
street8.position.x=x;
street8.position.z=-475;
scene.add(street8);
x-=200;	
}
//street12
var street12 = new Physijs.PlaneMesh(streetGeometry, streetMaterial1);
street12.lookAt(new THREE.Vector3(0, 1, 0));
street12.position.y = .2;
street12.position.x=-1025;
street12.position.z=-475;
scene.add(street12);
//street13
x=25;
for(var i=0; i<6; i++){
	var street = new Physijs.PlaneMesh(streetGeometry, streetMaterial1);
street.lookAt(new THREE.Vector3(0, 1, 0));
street.position.y = .2;
street.position.x=x;
street.position.z=-475;
scene.add(street);
x+=200;	
}
/////////////////////////////////////////////////////////////////End of Streets//////////////////////////////////////////////////
///////////////////////////////////////////////////////////////// Road Lines/////////////////////////////////////////////////////
var rLMaterial1 = new THREE.LineDashedMaterial( {
	color: 0xffffff,
	linewidth: 1,
	scale: 1,
	dashSize: 3,
	gapSize: 1,
} );
var z= -950;
for(var i=0; i<97; i++){
	if((z<-175-20 || z>-175+20) && (z<-375-20 || z>-375+20) && (z<-575-20 || z>-575+20) && (z<-775-20 || z>-775+20)){
		var rLGeometry = new THREE.PlaneGeometry(5, 2);
		//roadLine
		var roadLine = new Physijs.PlaneMesh(rLGeometry, rLMaterial1);
		roadLine.lookAt(new THREE.Vector3(0, 1, 0));
		roadLine.position.y = .3;
		roadLine.position.x=25;
		roadLine.position.z= z;
		scene.add(roadLine);
		//roadLine2
		var roadLine2 = new Physijs.PlaneMesh(rLGeometry, rLMaterial1);
		roadLine2.lookAt(new THREE.Vector3(0, 1, 0));
		roadLine2.position.y = .3;
		roadLine2.position.x=-175;
		roadLine2.position.z=z;
		scene.add(roadLine2);
		//roadLine3
		var roadLine3 = new Physijs.PlaneMesh(rLGeometry, rLMaterial1);
		roadLine3.lookAt(new THREE.Vector3(0, 1, 0));
		roadLine3.position.y = .3;
		roadLine3.position.x=-375;
		roadLine3.position.z=z;
		scene.add(roadLine3);
		//roadLine4
		var roadLine4 = new Physijs.PlaneMesh(rLGeometry, rLMaterial1);
		roadLine4.lookAt(new THREE.Vector3(0, 1, 0));
		roadLine4.position.y = .3;
		roadLine4.position.x=-575;
		roadLine4.position.z=z;
		scene.add(roadLine4);
		//roadLine5
		var roadLine5 = new Physijs.PlaneMesh(rLGeometry, rLMaterial1);
		roadLine5.lookAt(new THREE.Vector3(0, 1, 0));
		roadLine5.position.y = .3
		roadLine5.position.x=-775;
		roadLine5.position.z=z;
		scene.add(roadLine5);
		//roadLine6
		var roadLine6 = new Physijs.PlaneMesh(rLGeometry, rLMaterial1);
		roadLine6.lookAt(new THREE.Vector3(0, 1, 0));
		roadLine6.position.y = .3;
		roadLine6.position.x=-1025;
		roadLine6.position.z=z;
		scene.add(roadLine6);
		//roadline7
		var roadLine7 = new Physijs.PlaneMesh(rLGeometry, rLMaterial1);
		roadLine7.lookAt(new THREE.Vector3(0, 1, 0));
		roadLine7.position.y = .3;
		roadLine7.position.x=225;
		roadLine7.position.z=z;
		scene.add(roadLine7);
		//roadline8
		var roadLine8 = new Physijs.PlaneMesh(rLGeometry, rLMaterial1);
		roadLine8.lookAt(new THREE.Vector3(0, 1, 0));
		roadLine8.position.y = .3;
		roadLine8.position.x=425;
		roadLine8.position.z=z;
		scene.add(roadLine8);
		//roadline9
		var roadLine9 = new Physijs.PlaneMesh(rLGeometry, rLMaterial1);
		roadLine9.lookAt(new THREE.Vector3(0, 1, 0));
		roadLine9.position.y = .3;
		roadLine9.position.x=625;
		roadLine9.position.z=z;
		scene.add(roadLine9);
		
		//roadline10
		var roadLine10 = new Physijs.PlaneMesh(rLGeometry, rLMaterial1);
		roadLine10.lookAt(new THREE.Vector3(0, 1, 0));
		roadLine10.position.y = .3;
		roadLine10.position.x=825;
		roadLine10.position.z= z
		scene.add(roadLine10);
		//roadline11
		var roadLine11 = new Physijs.PlaneMesh(rLGeometry, rLMaterial1);
		roadLine11.lookAt(new THREE.Vector3(0, 1, 0));
		roadLine11.position.y = .3;
		roadLine11.position.x=1025;
		roadLine11.position.z=z;
		scene.add(roadLine11);
	}
	z+=10;
}
//diagonal roadlines//////////////////
var rL2Material1 = new THREE.LineDashedMaterial( {
	color: 0xffffff,
	linewidth: 1,
	scale: 1,
	dashSize: 3,
	gapSize: 1,
} );
var x= -1000;
for(var i=0; i<200; i++){
	if((x<-175-20 || x>-175+20) &&(x<25-20 || x>25+20)&& (x<-375-20 || x>-375+20) && (x<-575-20 || x>-575+20) && (x<-775-20 || x>-775+20) && (x<225-20 || x>225+20) && (x<425-20 || x>425+20)&& (x<625-20 || x>625+20) && (x<825-20 || x>825+20)&& (x<1025-20 || x>1025+20)){
	var rL2Geometry = new THREE.PlaneGeometry(2, 5);
	//roadline17
	var roadLine17 = new Physijs.PlaneMesh(rL2Geometry, rL2Material1);
	roadLine17.lookAt(new THREE.Vector3(0, 1, 0));
	roadLine17.position.y = .4;
	roadLine17.position.x= x;
	roadLine17.position.z=25;
	scene.add(roadLine17);	
	//roadline12
	var roadLine12 = new Physijs.PlaneMesh(rL2Geometry, rL2Material1);
	roadLine12.lookAt(new THREE.Vector3(0, 1, 0));
	roadLine12.position.y = .3;
	roadLine12.position.x=x;
	roadLine12.position.z=-175;
	scene.add(roadLine12);
	//roadline13
	var roadLine13 = new Physijs.PlaneMesh(rL2Geometry, rL2Material1);
	roadLine13.lookAt(new THREE.Vector3(0, 1, 0));
	roadLine13.position.y = .3;
	roadLine13.position.x=x;
	roadLine13.position.z=-375;
	scene.add(roadLine13);
	//roadline14
	var roadLine14 = new Physijs.PlaneMesh(rL2Geometry, rL2Material1);
	roadLine14.lookAt(new THREE.Vector3(0, 1, 0));
	roadLine14.position.y = .3;
	roadLine14.position.x=x;
	roadLine14.position.z=-575;
	scene.add(roadLine14);
	//roadline15
	var roadLine15 = new Physijs.PlaneMesh(rL2Geometry, rL2Material1);
	roadLine15.lookAt(new THREE.Vector3(0, 1, 0));
	roadLine15.position.y = .3;
	roadLine15.position.x=x;
	roadLine15.position.z=-775;
	scene.add(roadLine15);
	//roadline16
	var roadLine16 = new Physijs.PlaneMesh(rL2Geometry, rL2Material1);
	roadLine16.lookAt(new THREE.Vector3(0, 1, 0));
	roadLine16.position.y = .3;
	roadLine16.position.x=x;
	roadLine16.position.z=-975;
	scene.add(roadLine16);
	}
	x+=10
}
//creates a single pyramid
var pyramidGeo = new THREE.CylinderGeometry(0, 40, 60, 4);
var pyramid = new Physijs.CylinderMesh(pyramidGeo, new THREE.MeshLambertMaterial({ color: 0xffffff}));
pyramid.position.set(300, 60/2, -300);
buildingGroup.add(pyramid);

//position boxes in a city like environment
//Coordinates for 200 buildings, and the for loop that creates them
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
	buildingGroup.add(b1);
	var b2 = buildingImage("images/bricks_wall.jpg" ,25, 80,25, buildingXs[i+1], 40,buildingZs[i+1] );
	buildingGroup.add(b2);
	var b3 = buildingImage("images/concrete_wall.jpg" ,25, 100,25, buildingXs[i+2], 50,buildingZs[i+2] );
	buildingGroup.add(b3);	
	var b4 = buildingImage("images/office_wall.jpg" ,25, 140,25, buildingXs[i+3], 70, buildingZs[i+3] );
	buildingGroup.add(b4);
} 
//adds all buildings in buildingGroup to scene
scene.add(buildingGroup);
// add lighting and add to scene
var directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(1000, 50, 300).normalize();
scene.add(directionalLight);
var ambientLight = new THREE.AmbientLight(0x202020);
scene.add(ambientLight);

// create perspective camera
var camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10000);
camera.position.x = 0;
camera.position.y = 10;
camera.position.z = 40;
// add to scene and renderer
scene.add(camera); 
camera.lookAt(pyramid);
//model
var mixers = [];
var timer = new THREE.Clock();
var loader = new THREE.FBXLoader();
var heli;

loader.load('./model/md500.FBX', function (object) {
	object.scale.set( 1, 1, 1 )
	object.position.x = camera.position.x;
	object.position.y = camera.position.y-10;					   
	object.position.z = camera.position.z-20;
	object.rotation.y = Math.PI;
	heli = object;

	mixer = new THREE.AnimationMixer(object);
	mixers.push(mixer);
	mixer.clipAction(object.animations[0]).play();
	scene.add(object);
});
//rotor spin animation	
function rotorSpin() {
    if (mixers.length > 0){
		for (var i = 0; i < mixers.length; i++) {
			mixers[i].update(timer.getDelta());
		}
    }
}
//stats display
var stats = new Stats();
stats.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild( stats.dom );

//event listeners and variables for them
var firstMouseMove  = true;
var raycaster = new THREE.Raycaster(),targeted;
var mouse = new THREE.Vector2();
var camPos = {x: 0, y: 0, z: -1};
var camMove = new THREE.Vector3(0, 0, 0);
var camStrafe = new THREE.Vector3(0, 0, 0);
var cameraLookAt = new THREE.Vector3(0, 0, -1);
var cameraRight = new THREE.Vector3(1, 0, 0);
var cameraUp = new THREE.Vector3().crossVectors(cameraRight, cameraLookAt);
var cameraFloat = new THREE.Vector3(0, 1, 0);
var oldMousePos = {x: 0, y: 0};
var key = [];

function handleMouseMove(event) {
	if(firstMouseMove) {
		oldMousePos.x = event.clientX;
		oldMousePos.y = event.clientY;
		firstMouseMove = false;
		return;
	}

	var yaw = (oldMousePos.x - event.clientX) / 200.0;
	var pitch = (oldMousePos.y - event.clientY) / 200.0;
	
	heli.rotation.y += yaw;
	heli.rotation.x += pitch;										  
	cameraLookAt.applyAxisAngle(new THREE.Vector3(0, 1, 0), yaw);
	cameraRight.applyAxisAngle(new THREE.Vector3(0, 1, 0), yaw);
	
	cameraLookAt.applyAxisAngle(cameraRight, pitch);
	
	
	oldMousePos.x = event.clientX;
	oldMousePos.y = event.clientY;
	
	//raycaster 
	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;	  
		
}
//caster uses raycaster to change emissive element of targeted object 
function caster(){
	raycaster.setFromCamera(mouse, camera);
	var targeting = raycaster.intersectObjects(buildingGroup.children);
	if (targeting.length > 0) {
        if (targeted != targeting[0].object) {
            if (targeted){
				targeted.material.emissive.setHex(targeted.currentHex);
			}
            targeted = targeting[0].object;
            targeted.currentHex = targeted.material.emissive.getHex();
            //setting up new material on hover
            targeted.material.emissive.setHex(0x404040);
        }
    } else {
        if (targeted){
		targeted.material.emissive.setHex(targeted.currentHex);
		}
        targeted = null;	  
    }
}

function movement() {
	//A
    if (key[65]) {   
	   camera.position.sub(cameraRight);
	   heli.position.sub(cameraRight);
    }
	//D
    if (key[68]) {
		camera.position.add(cameraRight);
		heli.position.add(cameraRight);
    }
	if(!key[68]){
		//if(cameraRight.x < 0.9 && cameraRight.x > 0.85)
		//	heli.position.add(cameraRight);
	}
	//W
	if (key[83]) {
		camera.position.sub(cameraLookAt);
		heli.position.sub(cameraLookAt);
	}
	//S
	if (key[87]) {
		camera.position.add(cameraLookAt);
		heli.position.add(cameraLookAt);
	}
	//SPACEBAR
	if (key[32]) {
		camera.position.add(cameraFloat);
		heli.position.add(cameraFloat);
	}
	//SHIFT
	if (key[16]) {
		camera.position.sub(cameraFloat);
		heli.position.sub(cameraFloat);
	}
}

//event listener calls
document.addEventListener('mousemove', handleMouseMove, false);
document.body.addEventListener("keydown", function (k) {
	key[k.keyCode] = true;
});
document.body.addEventListener("keyup", function (k) {
	key[k.keyCode] = false;
});

//render
function render() {
	movement();
	rotorSpin();
	caster();
	stats.update();
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