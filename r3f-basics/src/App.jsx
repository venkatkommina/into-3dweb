/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { useRef, useState } from "react";
import "./App.css";
import { Canvas, useFrame } from "@react-three/fiber";

const Cube = () => {
  const ref = useRef();

  // useFrame((state, delta) => {
  //   ref.current.rotation.x += delta;
  //   ref.current.rotation.y += delta * 2;
  //   ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2;
  // });

  return (
    <mesh position={[-2, 0, 0]} ref={ref}>
      <boxGeometry args={[1.5, 1, 1]} />
      <meshStandardMaterial color={"lightgreen"} />
    </mesh>
  );
};

const Sphere = () => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  useFrame((state, delta) => {
    const rotSpeed = isHovered ? 4 : 0.2;
    ref.current.rotation.y += delta * rotSpeed;
  });
  return (
    <mesh
      position={[0, 1, 0]}
      ref={ref}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
    >
      <sphereGeometry />
      <meshStandardMaterial
        color={isHovered ? "hotpink" : "orange"}
        wireframe
      />
    </mesh>
  );
};

const Torus = () => {
  const ref = useRef();

  // useFrame((state, delta) => {
  //   ref.current.rotation.y += delta * 4;
  //   ref.current.position.z = Math.sin(state.clock.elapsedTime) * -2;
  // });
  return (
    <mesh position={[2, 0, 0]} ref={ref}>
      <torusGeometry args={[0.5, 0.2, 12, 48]} />
      <meshStandardMaterial color={"lightblue"} />
    </mesh>
  );
};

const TorusKnot = () => {
  return (
    <mesh position={[0, -2, 0]}>
      <torusKnotGeometry args={[0.5, 0.15, 64, 16]} />
      <meshStandardMaterial color={"hotpink"} />
    </mesh>
  );
};

function App() {
  return (
    <Canvas>
      <directionalLight position={[0, 0, 2]} />
      <ambientLight />
      <Cube />
      <Sphere />
      <Torus />
      <TorusKnot />
    </Canvas>
  );
}

export default App;
