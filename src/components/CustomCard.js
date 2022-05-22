import {
    Card,
    Image,
    Text,
} from '@mantine/core';

import { Link } from 'react-router-dom';

const CustomCard = (props) => {
    return (
        <Card
            shadow="md"
            p="xl"
            component={Link}
            to={props.link}
            >
            <Card.Section>
                <Image src={props.src} height={100}
                    radius={4}
                />
            </Card.Section>

            <Text weight={600} size="md">
                {props.title}
            </Text>

            <Text size="sm">
                {props.text}
            </Text>
        </Card>
    )
}

export default CustomCard