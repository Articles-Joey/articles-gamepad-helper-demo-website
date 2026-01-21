"use client"
import { memo, useEffect } from "react";

import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei";

import { NearestFilter, RepeatWrapping, TextureLoader, Vector3 } from "three";

import { Debug, Physics, useBox, usePlane, useSphere } from "@react-three/cannon";
import { degToRad } from "three/src/math/MathUtils";

// import { Model as SpacesuitModel } from "@/components/Games/Assets/Quaternius/men/Spacesuit";
import Player from "./Player";
import generateRandomInteger from "@/util/generateRandomInteger";

// import Tree from "@/components/Models/Tree";
// import WaterPlane from "./WaterPlane";
// import { ModelQuaterniusAnimalsDeer } from "@/components/Models/Deer";
// import { ModelQuaterniusAnimalsCow } from "@/components/Models/Cow";
// import { ModelJToastieGrassPlatform } from "@/components/Models/Grass Platform";
// import { ModelKennyNLNatureRockTallE } from "@/components/Models/rock_tallE";

import { Enemy } from "./Enemy";
import { useGameStore } from "@/hooks/useGameStore";
import { ModelSteamController2025 } from "../Models/Steam_Controller_2025";

const texture = new TextureLoader().load(`img/grass.webp`)
const textureOther = new TextureLoader().load(`img/grass.webp`)

// const GrassPlane = () => {

//     const width = 100; // Set the width of the plane
//     const height = 100; // Set the height of the plane

//     texture.magFilter = NearestFilter;
//     texture.wrapS = RepeatWrapping
//     texture.wrapT = RepeatWrapping
//     texture.repeat.set(5, 5)

//     return (
//         <>
//             <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]}>
//                 <planeGeometry attach="geometry" args={[width, height]} />
//                 <meshStandardMaterial attach="material" map={texture} />
//             </mesh>
//         </>
//     );
// };

function GameCanvas(props) {

    const {
        debug,
    } = useGameStore(state => ({
        debug: state.debug,
    }));

    let gameContent = (
        <>
            <Player />

            <ModelSteamController2025 />

            <Ground
                args={[30, 30]}
            // args={[30, 0.5, 30]}
            />

        </>
    )

    let physicsContent
    if (debug) {
        physicsContent = (
            <Debug>
                {gameContent}
            </Debug>
        )
    } else {
        physicsContent = (
            gameContent
        )
    }

    return (
        <Canvas shadows camera={{ position: [0, 30, 30], fov: 50 }}>

            <OrbitControls
            // autoRotate={gameState?.status == 'In Lobby'}
            />

            {/* a */}

            {/* <ambientLight intensity={1} /> */}

            {/* <spotLight distance={500} castShadow intensity={10000} position={[0, 100, 0]} angle={1} penumbra={1} /> */}

            <directionalLight
                castShadow
                position={[0, 100, 0]}
                intensity={10}
                shadow-camera-left={-20}
                shadow-camera-right={20}
                shadow-camera-top={20}
                shadow-camera-bottom={-20}
            />

            {/* <WaterPlane
                position={[0, 0, 0]}
            /> */}

            <Physics>

                {physicsContent}

            </Physics>

        </Canvas>
    )
}

export default memo(GameCanvas)

function Ground({ args }) {

    const [ref, api] = usePlane(() => ({
        // mass: 0,
        type: 'Static',
        args: args,
        position: [0, 0, 0],
        rotation: [-Math.PI / 2, 0, 0]
    }))

    texture.magFilter = NearestFilter;
    texture.wrapS = RepeatWrapping
    texture.wrapT = RepeatWrapping
    texture.repeat.set(1, 1)

    return (
        <mesh ref={ref} castShadow receiveShadow>

            <boxGeometry args={args} />

            {/* <meshStandardMaterial color="#08e8de" /> */}

            <meshStandardMaterial attach="material" map={texture} />

        </mesh>
    )

}