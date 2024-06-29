import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import * as THREE from "three";

const Intro = () => {
  const [vec] = useState(() => new THREE.Vector3());
  return useFrame((state) => {
    state.camera.position.lerp(
      vec.set(state.mouse.x * 1, 4 + state.mouse.y * 1, 9),
      0.05
    );
    state.camera.lookAt(0, 0, 0);
  });
};

export default Intro;
