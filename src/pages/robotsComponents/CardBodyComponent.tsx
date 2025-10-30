import { CardTitleComponent } from "./CardTitleComponent";
import { CardTextComponent } from "./CardTextComponent";

import { capitalizeFirst } from '../../helpers'

import type { robotsProps } from "../../interfaces/robots.interfaces"

interface Props {
    robot:robotsProps;
}

export const CardBodyComponent = ({ robot }:Props) => {
  return (
    <div className="card-body">
        <CardTitleComponent name={ capitalizeFirst(robot.name) } />        
        <CardTextComponent weapon={ capitalizeFirst(robot.weapon) } />
        <a href="#" className="btn btn-primary">Ver mas...</a>
    </div>
  )
}
