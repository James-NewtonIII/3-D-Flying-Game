var streetsEW = [];
var streetsEWXCoords = 20;
var streetsEWYCoords = .2;
var streetsEWZCoords = [25, 175, 375, 575, 775, 975];
var street2Geometry = new THREE.PlaneGeometry(40, 2050);
var street2Material1 = new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load('images/street.jpg')});
for (var i = 0; i < 6; i++){	
	var street = new Physijs.PlaneMesh(street2Geometry, street2Material1);
	street.lookAt(new THREE.Vector3(0, 1, 0));
	street.position.y = streetsEWYCoords;
	street.position.x = streetsEWXCoords;
	street.position.z = streetsEWZCoords[i];
	scene.add(street);
	streetsEW.push(street);
}