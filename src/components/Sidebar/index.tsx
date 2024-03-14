import { Container,SideMenuWrapper, MenuItem, MenuList } from "./styles";

import { useEffect, useState } from "react";
// eslint-disable-next-line react/prop-types
interface Interface {
    setSelectEpisod: Function;
    selectedEpisode: any;
  }
export default function Sidebar(props: Interface) {
    const [episode, setEpisode] = useState([])
    const [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/episode`)
        .then(response => {
            if(response.status === 200){                
                return response.json();
            }
            throw new Error("No Characters here");
        
        })
        .then(character => {
            setEpisode(character.results)
        })
        .catch((e : Error) => setErrorMessage(e.message));
    }, []);

    return (
     <Container>
      <div className="photo-main">
        <SideMenuWrapper>
          <MenuItem>
              {episode && episode.map((item: any, key: any) => ( <MenuList className={`${props.selectedEpisode === item.id? "selected": ""}`} key={key} onClick={() => props.setSelectEpisod(item.id)}><a href="#">{item.name}</a></MenuList>))}
          </MenuItem>
        </SideMenuWrapper>
      </div>
    </Container> 
    )
}