import {TextInput, Checkbox, Button, Group, Box, Notification, Transition} from '@mantine/core';
import { useForm } from '@mantine/form';
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { Check } from "tabler-icons-react";
import { useState } from "react";

const SignUpForm = () => {
    const form = useForm({
        initialValues: {
            email: '',
            termsOfService: false,
        },

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    });
    const [show, setShow] = useState(false)
    const handleClick = () => {
        setShow(true)
        setTimeout(() => {
            setShow(false)
        }, 2000)
    }

    return (
        <>
        <Box sx={{ maxWidth: 300 }} mx="auto">
            <form onSubmit={form.onSubmit(handleClick)}>
                <TextInput
                    required
                    label="Correo electrónico"
                    placeholder="tu@email.com"
                    {...form.getInputProps('email')}
                />

                <Checkbox
                    mt="md"
                    label="Quiero recibir emails promocionales."
                    {...form.getInputProps('termsOfService', { type: 'checkbox' })}
                />

                <Group position="right" mt="md">
                    <Button type="submit" color="dark" leftIcon={<EnvelopeClosedIcon/>} mb="1em" compact>
                        Unirme
                    </Button>
                </Group>
            </form>
        </Box>

                <Transition mounted={show} transition="slide-left" duration={1000} timingFunction="ease">
                    {() => (
                        <div>
                        <Notification title="Hecho" icon={<Check size={18}/>} color="teal">
                            Gracias por unirte a nosotros
                        </Notification>
                        </div>
                        )
                    }

                </Transition>


        </>
    );
}

export default SignUpForm