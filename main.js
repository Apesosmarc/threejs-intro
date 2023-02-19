let scene, camera, renderer, cube;

function init() {
  scene = new THREE.Scene();
  // aspect (2ndarg) should be width / h;
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  renderer = new THREE.WebGLRenderer({ antialias: true });

  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  //color material
  //   const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
  //   const texture = new THREE.TextureLoader().load("textures/crate.gif");
  const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;
}

function animate() {
  // creates a loop everytime monitor refreshes (typically 60fps)
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener("resize", onWindowResize);

init();
animate();
