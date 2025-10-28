import { CardTitleComponent } from "./CardTitleComponent";
import { CardTextComponent } from "./CardTextComponent";

import type { robotsProps } from "../../interfaces/robots.interfaces"

interface Props {
    robot:robotsProps;
}

export const CardBodyComponent = ({ robot }:Props) => {
  return (
    <div className="card-body">
        <CardTitleComponent name={ robot.name } />        
        <CardTextComponent weapon={robot.weapon} />
        <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  )
}
