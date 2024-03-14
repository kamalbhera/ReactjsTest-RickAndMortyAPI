import { useEffect, useState } from "react";
import CardCharacter from "../CardCharacter";
import {Character, Response as ResponseBody} from '../../model';
import { ContainerCard, ContainerCardBody, ContainerMainCardBody } from "./styles";

export default function Gallery({selectedEpisode}: any){

    const [items, setItems] = useState([] as Array<Character>);
    const [page, setPage] = useState(1);
    const [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
        fetchPage(page);
    }, [page]);

    const fetchPage = (page:number) => {
        fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        .then(response => {
            if(response.status === 200){
                return response.json();
            }
            throw new Error("No Characters here");
        })
        .then((responseBody: ResponseBody) =>  responseBody.results)
        .then(filteredItems => setItems(filteredItems))
        .catch((e : Error) => setErrorMessage(e.message));
    };

    return(
        <ContainerCard>
            <ContainerCardBody>
                {    
                items.map((character, index) => <ContainerMainCardBody className={`${selectedEpisode === character.id? "selected": ""}`} data-testid="all-items"  key={character.id}><CardCharacter  character={character}/></ContainerMainCardBody>)
                }
            </ContainerCardBody>
            <div style={{backgroundColor: "lightblue"}}>
                {errorMessage}
            </div>            
        </ContainerCard>
        
    )
}

