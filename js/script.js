//objeto cena
var scene = new THREE.Scene();
//objeto camera
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000 );
//objeto renderizado
var renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);

	document.body.appendChild(renderer.domElement);

//objeto cubo e definiçao das coordenadas
var geometry = new THREE.BoxGeometry(1,1,1);
//objeto para colorir
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//objeto para receber as cordenadas da geometry + material"cor".
var cube = new THREE.Mesh( geometry,material );
//será adicionada às coordenadas. isso faz com que a camera e o cubo estejam um dentro do outro.
scene.add( cube );

//defini a posição de profundidade do cubo na tela.
camera.position.z = 3; 



var animate = function(){
	//realiza a animação.
	requestAnimationFrame( animate );	
	
	//Isso será executado em cada quadro (60 vezes por segundo) e dará ao cubo uma boa animação de rotação. 
	cube.rotation.x += 0.02;
	cube.rotation.y += 0.02;

	//renderiza a scene e camera junto com a animação do cubo.
	renderer.render(scene, camera);
};

animate();