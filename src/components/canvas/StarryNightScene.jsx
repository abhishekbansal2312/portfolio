import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import styled from "styled-components";

const StyledCanvasWrapper = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  inset: 0;
`;

const Stars = (props) => {
  const ref = useRef();
  const [stars] = useState(() =>
    random.inSphere(new Float32Array(10000), { radius: 2 })
  );
  const [meteorites] = useState(() =>
    random.inSphere(new Float32Array(200), { radius: 50 })
  );

  useFrame((state, delta) => {
    ref.current.rotation.x += delta / 10;
    ref.current.rotation.y += delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={stars} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
      <Points
        positions={meteorites}
        stride={3}
        frustumCulled
        {...props}
        rotation={[0, 0, Math.PI / 4]}>
        <PointMaterial
          transparent
          color="#ffcc00"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarryNightScene = () => {
  return (
    <StyledCanvasWrapper>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
        <Preload all />
      </Canvas>
    </StyledCanvasWrapper>
  );
};

export default StarryNightScene;
