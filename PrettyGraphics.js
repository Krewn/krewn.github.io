let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

let renderer = Detector.webgl? new THREE.WebGLRenderer({ alpha: true }): new THREE.CanvasRenderer({ alpha: true });
//new THREE.WebGLRenderer({ alpha: true });
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

let geometry = new THREE.BoxGeometry( 2.5, 2.5, 2.5 );
let material = new THREE.MeshLambertMaterial( {
      color: 0xFFFFFF,
      shading: THREE.SmoothShading,
      ambient: 0x555555,
      specular: 0xffffff
    } );
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

let render = function () {
	requestAnimationFrame( render );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render(scene, camera);
};
window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

render();