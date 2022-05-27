import { BackgroundImage, Center, Text, Box, Paper } from '@mantine/core';

function ImageLink(props) {
    return (
        <a href={props.site} style={{textDecoration: 'none'}}>
            <Paper  withBorder shadow="xl" radius="lg">
                <BackgroundImage
                    src={props.image}
                    radius="lg"
                >
                    <Center p="md">
                        <Text color={props.textColor} weight={600}>
                            {props.text}
                        </Text>
                    </Center>
                </BackgroundImage>
            </Paper>
        </a>
    );
}

export default ImageLink