import { useGLTF } from "@react-three/drei"
import { CuboidCollider, CylinderCollider, RigidBody } from "@react-three/rapier"

export default function World(props) {
    const { nodes, materials } = useGLTF("/assets/models/world/CuevaEncantada.glb")

    return (
        <group {...props} dispose={null}>
            
            <group>
                <RigidBody type="fixed" colliders="trimesh">
                    <mesh onClick={(e) => e.stopPropagation()} receiveShadow={true} geometry={nodes.Floor.geometry} material={materials.floorMaterial} />
                    <mesh onClick={(e) => e.stopPropagation()} receiveShadow={true} geometry={nodes.Bow.geometry} material={materials.bow} />
                    <mesh onClick={(e) => e.stopPropagation()} receiveShadow={true} geometry={nodes.Caja.geometry} material={materials.Caja} />
                </RigidBody>
                
            </group>

        </group>
    );
}

useGLTF.preload("/assets/models/world/CuevaEncantada.glb");
