import { EnvelopeClosedIcon } from '@radix-ui/react-icons';
import { useWindowScroll } from '@mantine/hooks';

import { useState, useEffect } from "react";
import {
    Affix,
    Button,
    Transition,
    Dialog,
    Text,
    Group,
    TextInput
} from '@mantine/core';

function SubscribeBtn() {
    const [scroll, scrollTo] = useWindowScroll();
    const [opened, setOpened] = useState(false);


    return (
        <>
            <Affix position={{ bottom: 45, right: 20 }}>
                <Transition transition="slide-up" mounted={scroll.y > 0}>
                    {(transitionStyles) => (
                        <Button
                            leftIcon={<EnvelopeClosedIcon />}
                            style={transitionStyles}
                            onClick={() => setOpened((o) => !o)}
                            compact
                            size="xs"
                        >
                            Suscribete
                        </Button>
                    )}
                </Transition>
            </Affix>

            <Dialog
                opened={opened}
                withCloseButton
                onClose={() => setOpened(false)}
                size="md"
                radius="md"
            >
                <Text size="sm" style={{ marginBottom: 10 }} weight={500}>
                    Unete a nuestra comunidad
                </Text>

                <Group align="flex-end">
                    <TextInput placeholder="email@example.com" style={{ flex: 1 }} />
                    <Button compact onClick={() => setOpened(false)}>Suscribir</Button>
                </Group>
            </Dialog>

        </>
    );
}

export default SubscribeBtn