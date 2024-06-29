import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  PresentationControls,
  //PresentationControls,
} from "@react-three/drei";
import { useProgress, Html } from "@react-three/drei";
// import Globe from "./Globe.tsx";
import { Maquina } from "./Maquina.tsx";
import Intro from "../../components/Intro.tsx";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(1)}</Html>;
}

const ladoDerecho = () => {
  return (
    <div className="w-full lg:w-1/2 flex justify-center items-center h-[400px] md:h-[600px]">
      <Canvas camera={{ position: [0, 0, 10] }}>
        {/* <LadoIzquierdo /> */}
        <Intro />
        <PresentationControls
          global
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 4, tension: 1500 }}
          polar={[-Math.PI / 3, Math.PI / 3]}
          azimuth={[-Math.PI / 11.4, Math.PI / 2]}
        >
          <directionalLight />
          <ambientLight intensity={-0.5} />

          <Suspense fallback={<Loader />}>
            <Maquina position={[0, -1.22, 0]} scale={3} rotation-y={-0.51} />
            {/* <Globe /> */}
          </Suspense>
          <Environment preset="apartment" />
          <ContactShadows
            position={[1, 1, 1]}
            opacity={1}
            scale={10}
            blur={1}
            far={2}
          />
        </PresentationControls>
      </Canvas>
    </div>
  );
};

export default ladoDerecho;
