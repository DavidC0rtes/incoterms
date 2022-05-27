import { ArrowLeftIcon } from '@radix-ui/react-icons';
import { useWindowScroll } from '@mantine/hooks';
import { Affix, Button, Transition } from '@mantine/core';
import { Link } from 'react-router-dom'

function GoBack() {
    const [scroll, scrollTo] = useWindowScroll();

    return (
        <>
            <Affix position={{ top: 70, lef: 10 }}>
                <Transition transition="slide-up" mounted={scroll.y > 0}>
                    {(transitionStyles) => (
                        <Button
                            leftIcon={<ArrowLeftIcon />}
                            style={transitionStyles}
                            component={Link}
                            to="/"
                        >
                            Regresar
                        </Button>
                    )}
                </Transition>
            </Affix>
        </>
    );
}

export default GoBack