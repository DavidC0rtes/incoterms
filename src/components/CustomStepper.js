import {useState, useEffect } from "react";
import {
    Stepper,
    Button,
    Group, ScrollArea, Container,
} from '@mantine/core'
import Intro from "../views/Intro";
import TransportModes from "../views/TransportModes";
import RuleTabs from "../views/RuleTabs";
import CustomQuiz from "./CustomQuiz";
import LinksOfInterest from "../views/LinksOfInterest";

const CustomStepper = () => {
    const [active, setActive] = useState(() => {
        const val = sessionStorage.getItem('step')

        return val !== null
            ? JSON.parse(val)
            : 0
    })

    const nextStep = () => setActive((current) => (current < 5 ? current + 1 : current))
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current))

    useEffect(() => {
        sessionStorage.setItem('step', JSON.stringify(active))
        window.scrollTo(0,0)
    },[active])
    return (
        <>
            <ScrollArea>
                <Stepper active={active} onStepClick={setActive} orientation="horizontal" size="sm" pb="1em">
                    <Stepper.Step label="¿Qué son?" allowStepSelect={active > 0}>
                    </Stepper.Step>
                    <Stepper.Step label="Tipos de transporte" description="" allowStepSelect={active > 1}>

                    </Stepper.Step>
                    <Stepper.Step label="Reglas" description="" allowStepSelect={active > 2}>

                    </Stepper.Step>
                    <Stepper.Step label="Evalúa" description="" allowStepSelect={active > 3}>

                    </Stepper.Step>
                    <Stepper.Step label="Profundiza" description="" allowStepSelect={active > 4}>

                    </Stepper.Step>
                    <Stepper.Completed>
                        Has completado todas las etapas, clic en "Anterior" para ir a la etapa previo.
                    </Stepper.Completed>
                </Stepper>
            </ScrollArea>
            {active === 0 && <Intro/>}
            {active === 1 && <TransportModes/>}
            {active === 2 && <RuleTabs/>}
            {active === 3 && <CustomQuiz/>}
            {active === 4 && <LinksOfInterest/>}
            <Group position="center" mt="md">
                <Button onClick={prevStep} color="indigo">Anterior</Button>
                <Button onClick={nextStep} color="indigo">Siguiente</Button>
            </Group>
        </>
    )
}

export default CustomStepper