import { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";

useGLTF.preload("/nasa_earth.glb");
export default function Globe() {
  const group = useRef(null);
  const { animations, scene } = useGLTF("/nasa_earth.glb");
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    console.log(actions);
  }, []);
  return (
    <group ref={group} scale={0.0108}>
      <primitive object={scene} />
    </group>
  );
}
