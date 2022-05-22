import { useState } from "react";
import {
    Stepper,
    Button,
    Group, ScrollArea, Container,
} from '@mantine/core'
import Intro from "../views/Intro";
import TransportModes from "../views/TransportModes";

const CustomStepper = () => {
    const [active, setActive] = useState(0)
    const nextStep = () => setActive((current) => (current < 5 ? current + 1 : current))
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current))

    return (
        <>
            <ScrollArea>
                <Stepper active={active} onStepClick={setActive} orientation="horizontal" size="sm" pb="1em">
                    <Stepper.Step label="¿Qué son?" allowStepSelect={false}>
                    </Stepper.Step>
                    <Stepper.Step label="Tipos de transporte" description="" allowStepSelect={false}>

                    </Stepper.Step>
                    <Stepper.Step label="Reglas" description="" allowStepSelect={false}>

                    </Stepper.Step>
                    <Stepper.Step label="Evalúa" description="" allowStepSelect={false}>

                    </Stepper.Step>
                    <Stepper.Step label="Profundiza" description="" allowStepSelect={false}>

                    </Stepper.Step>
                    <Stepper.Completed>
                        Completed, click back button to get to previous step
                    </Stepper.Completed>
                </Stepper>
            </ScrollArea>
            {active === 0 && <Intro/>}
            {active === 1 && <TransportModes/>}
            <Group position="center" mt="md">
                <Button onClick={prevStep} color="indigo">Anterior</Button>
                <Button onClick={nextStep} color="indigo">Siguiente nivel</Button>
            </Group>
        </>
    )
}

export default CustomStepper