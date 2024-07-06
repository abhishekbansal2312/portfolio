import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import styled from "styled-components";

const StyledCanvasWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background: radial-gradient(
    circle,
    rgba(20, 20, 30, 1) 0%,
    rgba(10, 10, 20, 1) 100%
  );
`;

const StyledStarsCanvas = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const StyledOverlay = styled.div`
  position: absolute;
  bottom: 20px;
  width: 100%;
  text-align: center;
  color: #ffffff;
  font-family: Arial, sans-serif;
  font-size: 1.5rem;
  z-index: 10;
`;

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarryNightCanvas = () => {
  return (
    <StyledCanvasWrapper>
      <StyledStarsCanvas>
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Suspense fallback={null}>
            <Stars />
          </Suspense>
          <Preload all />
        </Canvas>
      </StyledStarsCanvas>
      <StyledOverlay></StyledOverlay>
    </StyledCanvasWrapper>
  );
};

export default StarryNightCanvas;
