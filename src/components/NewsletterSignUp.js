import {
    Container,
    Title,
    Paper
} from "@mantine/core";

import SignUpForm from "./SignUpForm";

const NewsletterSignUp = () => {
    return (
        <Paper shadow="xl" withBorder style={{background: '#c5f1ff'}} radius="md">
            <Title order={2} align="center">Unete a nuestra comunidad</Title>
            <br/>

            <SignUpForm/>

        </Paper>
    )
}

export default NewsletterSignUp