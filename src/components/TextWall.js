import {Container, Image, Title} from "@mantine/core";

const TextWall = (props) => {
    return (
        <Container size="lg" px="0">
            <Image width="100%" src={props.img}/>
            <Title order={1}>{props.title}</Title>

            <hr/>

            {props.children}
        </Container>
    )
}

export default TextWall