import { AuthProvider } from "./context/AuthContext";
import { AvatarProvider } from "./context/AvatarContext";
import RoutesCueva_Encantada from "./routes/RoutesCueva_Encantada"

const Experience = () => {
    return (
        <AuthProvider>
            <AvatarProvider>
                <RoutesCueva_Encantada />
            </AvatarProvider>
        </AuthProvider>
    )
}

export default Experience;