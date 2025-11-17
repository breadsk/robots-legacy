import { getRobotsByName } from "../actions";
import type { robotNameProps } from "../interfaces/robots.interfaces";

export async function tryCatchGetRobotsByName(query: string): Promise<robotNameProps | null> {
    try {    
        const wantedRobot = await getRobotsByName(query);
        
        // Si wantedRobot ya tiene la estructura correcta, devuélvelo directamente
        if (wantedRobot.robot) {
            return wantedRobot; // Devuelve el objeto completo
        }
        return null;
    
    } catch (error) {
        console.log(`Error en: ${error}`);
        return null;
    }
}
