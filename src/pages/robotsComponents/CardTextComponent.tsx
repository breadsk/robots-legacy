
interface Props {
    weapon:string;
}

export const CardTextComponent = ({weapon}:Props) => {
  return (
    <p className="card-text">{ weapon }</p>
  )
}
