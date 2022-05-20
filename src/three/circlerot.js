import * as THREE from 'three';
import { CircleBufferGeometry } from 'three';

'use strict';
          
var scene;
var camera;
var renderer;

var t=0;

function init(){
	function onResize(){
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth,window.innerHeight);
	}

	window.addEventListener('resize', onResize, false)
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

	renderer = new THREE.WebGLRenderer;
	renderer.setClearColor(new THREE.Color(0x000000));
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.shadowMap.enabled = true;

	camera.position.x = -30;
	camera.position.y = 40;
	camera.position.z = 30;
	camera.lookAt(scene.position);

	var cubeSize = 1;

	var cubeGeometry = new THREE.SphereGeometry(cubeSize,16,16);
	var cubeMaterial;
	var cubecolor = [0xef476f,0xffd166,0x06d6a0,0x118ab2,0x073b4c];

	var n = 100;
	var moveSpeed = 0.001;
	var cube = new Array(n).fill(0);

	for(var i = 0; i < n; i++){                
		cubeMaterial = new THREE.MeshBasicMaterial({
			color: cubecolor[i%cubecolor.length],
		});
		
		cube[i] = new THREE.Mesh(cubeGeometry, cubeMaterial);

		cube[i].material.colorsNeedUpdate = true;

		cube[i].position.z = Math.random()*80-40;
		cube[i].rotation.x = Math.random();
		cube[i].rotation.y = Math.random();
		cube[i].rotation.z = Math.random();

		scene.add(cube[i]);
	}

		
	document.getElementById("WebGL-output").appendChild(renderer.domElement)


	function renderScene(){
		t++;
		for(var i = 0; i < n; i++){    
				cube[i].position.x = 40 * Math.cos( t*moveSpeed + i * 0.5 );
				cube[i].position.y = 40 * Math.sin( t*moveSpeed + i* 1.3 );
				cube[i].rotation.x += 0.005;
				cube[i].rotation.y += 0.005;
		}

		requestAnimationFrame(renderScene);
		renderer.render(scene,camera);
	}
	renderScene();
};

window.onload = init;

