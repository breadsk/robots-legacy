
import { CardBodyComponent } from "./CardBodyComponent";

import type { robotsProps } from "../../interfaces/robots.interfaces"

interface Props{
    robot:robotsProps;
}


export const CardComponent = ({ robot }:Props) => {

  

   return (
    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12 mb-4 mt-2"> {/* Cambios aquí */}
      <div className="card h-100"> {/* Quita m-2 y agrega h-100 */}
        <img src={robot.avatar} className="card-img-top" alt={robot.name} />
        <CardBodyComponent robot = { robot }/>
      </div>
    </div>
  )
}
