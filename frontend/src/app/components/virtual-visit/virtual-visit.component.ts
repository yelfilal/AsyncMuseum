import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

@Component({
  selector: 'app-virtual-visit',
  standalone: true,
  templateUrl: './virtual-visit.component.html',
  styleUrls: ['./virtual-visit.component.scss']
})
export class VirtualVisitComponent implements AfterViewInit {
  @ViewChild('rendererContainer', { static: true }) rendererContainer!: ElementRef;
  
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private controls!: OrbitControls;
  private paintings: THREE.Mesh[] = [];

  ngAfterViewInit() {
    this.initScene();
    this.animate();
  }

  initScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xaaaaaa);

    // Configuration de la caméra
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.set(0, 1.5, 5);

    // Initialisation du rendu
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = true;
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);

    // Ajout de lumières
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    this.scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.position.set(5, 5, 5);
    spotLight.castShadow = true;
    this.scene.add(spotLight);

    // Ajout du sol en marbre
    const floorTexture = new THREE.TextureLoader().load('assets/textures/marble.jpg');
    floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
    floorTexture.repeat.set(4, 4);
    
    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(10, 10),
      new THREE.MeshStandardMaterial({ map: floorTexture })
    );
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    this.scene.add(floor);

    // Ajout des murs
    const wallMaterial = new THREE.MeshStandardMaterial({ color: 0xf5f5dc });

    const backWall = new THREE.Mesh(new THREE.PlaneGeometry(10, 3), wallMaterial);
    backWall.position.z = -5;
    backWall.position.y = 1.5;
    this.scene.add(backWall);

    const leftWall = new THREE.Mesh(new THREE.PlaneGeometry(10, 3), wallMaterial);
    leftWall.position.x = -5;
    leftWall.position.y = 1.5;
    leftWall.rotation.y = Math.PI / 2;
    this.scene.add(leftWall);

    const rightWall = new THREE.Mesh(new THREE.PlaneGeometry(10, 3), wallMaterial);
    rightWall.position.x = 5;
    rightWall.position.y = 1.5;
    rightWall.rotation.y = -Math.PI / 2;
    this.scene.add(rightWall);

    // Ajout de tableaux sur les murs
    this.addPainting(-2, 1.5, -4, 'assets/img/Mona_Lisa.jpg');
    this.addPainting(2, 1.5, -4, 'assets/img/VanGogh-starry_night_ballance1.jpg');
    this.addPainting(-4.8, 1.5, 0, 'assets/img/The_Scream.jpg');
    this.addPainting(4.8, 1.5, 0, 'assets/img/Girl_with_a_Pearl_Earring.jpg');

    // Ajout du contrôle de navigation
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;

    // Redimensionnement de la fenêtre
    window.addEventListener('resize', () => this.onWindowResize(), false);
  }

  addPainting(x: number, y: number, z: number, texturePath: string) {
    const texture = new THREE.TextureLoader().load(texturePath);
    const material = new THREE.MeshStandardMaterial({ map: texture });
    const painting = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 1), material);
    
    painting.position.set(x, y, z);
    if (z === -4) painting.rotation.y = 0;
    if (x === -4.8) painting.rotation.y = Math.PI / 2;
    if (x === 4.8) painting.rotation.y = -Math.PI / 2;

    this.scene.add(painting);
    this.paintings.push(painting);
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}
