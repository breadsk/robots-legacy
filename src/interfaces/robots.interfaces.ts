export interface robotsProps {
    series: number;
    id: number;
    name: string;
    weapon: string;
    avatar: string;
    sprite1: string;
    weakness: string;
    stageImg: string;
}

export interface robotsAllProps {
    ok: boolean;
    statusCode: number;
    robots: robotsProps[];
}

export interface robotNameProps {
    ok:boolean;
    statusCode:number;
    robot:robotsProps;
}