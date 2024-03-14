import { ContainerCard } from "./styles";
import { Character } from "../../model";

interface CardCharacterItemProps {
    character: Character;
}
// eslint-disable-next-line react/prop-types
export default function CardCharacter(props: CardCharacterItemProps) {
    return (
        <ContainerCard>
            <div className="image">
                <img src={props.character.image} alt="" />
            </div>
            <div className="info">
                <h3 className="title">{props.character.name}</h3>
            </div>
        </ContainerCard>
    )
}