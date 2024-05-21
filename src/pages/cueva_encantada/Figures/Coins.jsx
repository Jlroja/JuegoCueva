import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useState } from "react";

export const Coins = (props, catchCoin) => {
  const [position, setPosition] = useState([0, 2, -32]);
  const group = useRef();
  const [numeroDeMonedas, setNumeroDeMonedas] = useState(0);
  const { nodes, materials, animations } = useGLTF(
    "/assets/models/world/coin.glb"
  );
  const { actions } = useAnimations(animations, group);
  const [visible, setVisible] = useState(true);
  const refRigidBody = useRef();

  const onCollisionEnter = ({ manifold, target, other }) => {
    console.log(other.colliderObject);
    if (other.colliderObject.name == "character-capsule-collider") {

      console.log("Chocó");
      setVisible(false);
      setNumeroDeMonedas(numeroDeMonedas + 1);
      console.log(numeroDeMonedas);
      catchCoin();
      // setPosition([0, 2, -38])
       refRigidBody.current.teleportTo({
       translation: { x: 0, y: 2, z: -32 },
      })
      ;
    }
    console.log("Collision at world position", manifold.solverContactPoint(0));
  };
  // const onCollisionEnter = (e) =>{
  //   console.log("Collision at world position", manifold.solverContactPoint(0));
  //   if(e.other.rigidBodyObject.name === "AVATAR"){
  //     console.log("coin ++")
  //    setVisible(false);
  //   }
  // }
  return (
    <>
      {visible ? (
        <RigidBody
          ref={refRigidBody}
          type="fixed"
          colliders="ball"
          onCollisionEnter={(e) => {
            onCollisionEnter(e);
          }}
        >
          <group {...props} ref={group} dispose={null}>
            <group name="Scene">
              <group name="coin" userData={{ name: "coin" }}>
                <mesh
                  name="CoinObj_Coin_0"
                  geometry={nodes.CoinObj_Coin_0.geometry}
                  material={materials.Coin}
                  userData={{ name: "CoinObj_Coin_0" }}
                />
              </group>
            </group>
          </group>
        </RigidBody>
      ) : null}
    </>
  );
};
useGLTF.preload("/assets/models/world/coin.glb");
