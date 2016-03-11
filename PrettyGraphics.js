
if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

function init(){
	let scene = new THREE.Scene();
	let camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

	// http://stackoverflow.com/questions/9899807/three-js-detect-webgl-support-and-fallback-to-regular-canvas


	let renderer =  Detector.webgl ? new THREE.WebGLRenderer({ alpha: true }): new THREE.CanvasRenderer({ alpha: true });
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

	// http://threejs.org/docs/#Manual/Introduction/Creating_a_scene

	let geometry = new THREE.BoxGeometry( 2.5, 2.5, 2.5 );
	let material = new THREE.MeshPhongMaterial( { color: 0xdddddd, specular: 0x009900, shininess: 70, shading: THREE.FlatShading } )
	let cube = new THREE.Mesh( geometry, material );
	scene.add( cube );

	let directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
	directionalLight.position.set( 0, 1, 0 );
	scene.add( directionalLight );
	let directionalLight2 = new THREE.DirectionalLight( 0x444444, 0.5 );
	directionalLight2.position.set( 1, -1, 0.5 );
	scene.add( directionalLight );
	scene.add( directionalLight2 );

	camera.position.z = 5;
	
	window.addEventListener( 'resize', onWindowResize, false );

}
let onWindowResize = function (){

		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		renderer.setSize( window.innerWidth, window.innerHeight );

}
let render = function () {
		requestAnimationFrame( render );

		cube.rotation.x += 0.01;
		cube.rotation.y += 0.01;
		cube.rotation.z += 0.005;

		renderer.render(scene, camera);
};
render();