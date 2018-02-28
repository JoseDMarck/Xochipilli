var scene = new THREE.Scene();

camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 100;

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.getElementById("inter-BloqueA").appendChild( renderer.domElement );
 
var controls = new THREE.OrbitControls(camera, renderer.domElement);

controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;

var keyLight = new THREE.DirectionalLight(new THREE.Color(), 1.0);
keyLight.position.set(-100, 0, 100);

var fillLight = new THREE.DirectionalLight(new THREE.Color(), 1.0);
fillLight.position.set(100, 0, 100);

var backLight = new THREE.DirectionalLight(0xffffff, 1);
backLight.position.set(100, 0, -100).normalize();

scene.add(keyLight);
scene.add(fillLight);
scene.add(backLight);



var mtlLoader = new THREE.MTLLoader();
mtlLoader.setTexturePath('../../images/p05-interpretacion/3DObject/');
mtlLoader.setPath('../../images/p05-interpretacion/3DObject/');
mtlLoader.load('400milU.mtl', function (materials) {

    materials.preload();

    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.setPath('../../images/p05-interpretacion/3DObject/');
    objLoader.load('400milU.obj', function (object) {

        scene.add(object);
        object.position.y -= 50;

    });

});

var animate = function () {
	requestAnimationFrame( animate );
	controls.update();
	renderer.render(scene, camera);
};

animate();