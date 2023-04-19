import styled from "styled-components";

const Character = (props) => {

    const { dataCharacter } = props;
    const { character, image, quote } = dataCharacter;


  return (
    <ContentCharacter>
        <Title>{character}</Title>
        <ContainerImage>
            <Image src={image}  alt=""/>
        </ContainerImage>
        <PhraseText>{quote}</PhraseText>
    </ContentCharacter>
  )
};

const ContentCharacter = styled.div`
padding: 10px;
border: 1px dotted #2a9d8f;
border-radius: 20px;
width: 300px;
text-align: center;
margin: 10px;

&:hover {
    filter: brightness(40%);
}
`;

const Title = styled.h2`
color: #264653;
height: 40px;
justify-content: center;
align-items: center;
display: flex;
`;

const ContainerImage = styled.div`
height: 250px;
display: flex;
align-items; center;
justify-content: center;
`;

const Image = styled.img`
width: 160px;
height; auto;
`;

const PhraseText = styled.h4`
color: #2a9d8f;
height: 110px;
font-size: 14px
`;

export default Character