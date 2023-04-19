import styled from "styled-components"
import Character from "./Character";


const ChracterContainer = (props) => {
    const { characters, reqApi }  = props;

  return (
    <>
      <CotainerCharacter>
        {characters.map((character, index) => (
          <Character dataCharacter={character} key={index} />
        ))}
      </CotainerCharacter>
      <ContainerButton>
        <Button onClick={reqApi}>Recargar personajes</Button>
      </ContainerButton>
    </>
  );  
};

const CotainerCharacter = styled.div`
display: flex;
justify-content: center;
`;

const ContainerButton = styled.div`
width: 100%;
text-align: center;
`;

const Button = styled.button`
width: 250px;
background-color: #e76f51;
color: #fff;
border: none;
padding: 10px 20px;
border-radius: 20px;
font-size: 18px;
margin-top: 40px;
transition: all 0.2s ease-out;

&:hover {
    cursor: pointer;
    background-color: #1c0950;
}
`;

export default ChracterContainer