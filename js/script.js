//organizando as variaveis.
var camera, scene, renderer;
var geometry, material, mesh;

//função que inicia o cenário. 
function init() {
	//objeto render
	renderer = new THREE.CanvasRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );
	//objeto camera
	camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
	//define a posição de profundidade do cubo na tela.
	camera.position.z = 3;
	//objeto scene 
	scene = new THREE.Scene();
	//objeto cubo e definiçao das coordenadas.
	geometry = new THREE.CubeGeometry( 1, 1, 1 );
	//objeto material para colorir.
	material = new THREE.MeshBasicMaterial( { color: 0x000000, wireframe: true, wireframeLinewidth: 2 } );
	//objeto mesh para receber as cordenadas da geometry + material"cor".
	mesh = new THREE.Mesh( geometry, material );
	//será adicionada às coordenadas. isso faz com que a camera e o cubo estejam um dentro do outro.
	scene.add( mesh );

}

function animate() {
	//realiza a animação.
	requestAnimationFrame( animate );
	//Isso será executado em cada quadro (60 vezes por segundo) e dará ao cubo uma boa animação de rotação. 
	mesh.rotation.x = Date.now() * 0.0005;
	mesh.rotation.y = Date.now() * 0.001;
	
	//renderiza a scene e camera junto com a animação do cubo.
	renderer.render( scene, camera );

}

init();
animate();
