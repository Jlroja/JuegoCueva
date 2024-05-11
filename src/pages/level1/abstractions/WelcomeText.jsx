import { Center, Float, Text3D } from "@react-three/drei";

const WelcomeText = (props) => {
    const text = "Cueva Encantada";

    return (
        <Float
            speed={1.5}
            rotationIntensity={0.01}
            floatIntensity={0.5}
            floatingRange={[1, 2]}

        >
        <Center
            position={props.position}
        >
            <Text3D
                font={"/assets/fonts/FontGame.json"}
                bevelEnabled
                bevelSize={0.002}
                bevelThickness={0.01}
                height={0.5}
                letterSpacing={0.02}
                size={0.9}
            >
                <meshNormalMaterial />
                {text}
            </Text3D>
        </Center>
        </Float>
    )
}
export default WelcomeText;
