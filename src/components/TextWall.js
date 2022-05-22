import {Container, Image, Title} from "@mantine/core";

const TextWall = (props) => {
    return (
        <Container size="lg" px="0" style={{alignContent:'left'}}>
            <div style={{justifyContent: 'center'}}>
                <Image
                    width={props.w}
                    height={props.h}
                    src={props.img}
                    fit="contain"
                    radius="md"
                />
            </div>
            <Title order={props.titleOrder || 1}>{props.title}</Title>

            <hr/>

            {props.children}
        </Container>
    )
}

export default TextWall