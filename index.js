import * as BABYLON from '@babylonjs/core';
import { MToonMaterial } from 'babylon-mtoon-material';

const canvas = document.getElementById('renderCanvas');
const engine = new BABYLON.Engine(canvas, true);
const scene = new BABYLON.Scene(engine);
const camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), scene);
camera.setTarget(BABYLON.Vector3.Zero());
camera.attachControl(canvas, false);
new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);
const ground = BABYLON.MeshBuilder.CreateGround('ground', {width: 100, height: 100}, scene)

// Assign MToonMaterial
ground.material = new MToonMaterial('mat1', scene);

engine.runRenderLoop(function(){
  scene.render();
});
window.addEventListener('resize', function(){
  engine.resize();
});
