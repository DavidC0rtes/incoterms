import Quiz from 'react-quiz-component'
import {quiz} from "./quiz";
import {quiz1} from "./quiz1";
import {quiz2} from "./quiz2";
import { useState, useEffect } from "react";
import {Image, Notification, Text} from "@mantine/core";

import {
    Badge,
    Button, Container,
    Group,
} from "@mantine/core";


const CustomQuiz = () => {

    const [lvl, setLvl] = useState(() => {
        const val = sessionStorage.getItem('lvl')
        return val !== null
            ? JSON.parse(val)
            : 1
    })
    const [state, setState] = useState(0)

    useEffect(() => {
        sessionStorage.setItem('lvl', JSON.stringify(lvl));
    },[lvl])

    useEffect(() => {
        if (state !== 0) {
            window.location.reload()
        }
    },[state])


    const color = ["yellow", "teal", "dark"]

    const lvlName = ["Principiante", "Medio", "Díficil"]

    const setQuizResult = (obj) => {
        const pass = obj.numberOfCorrectAnswers > Math.floor(obj.numberOfQuestions / 2)
        setTimeout(() => {
            if (pass) {
                setLvl(lvl+1)
            } else {
                setState(state+1)
            }
        }, 3500)
    }

    return (
        <>
            <Container>
                <Group position="apart" spacing="xl">
                    <Badge color={color[lvl-1]} size="lg" radius="md" variant="filled">
                        Nivel {lvlName[lvl-1]}
                    </Badge>
                    <Button compact color="red" variant="outline" onClick={() => setLvl(1)}>
                        Reiniciar
                    </Button>
                </Group>

            </Container>

            { lvl == 1 && <Quiz quiz={quiz1} onComplete={setQuizResult} showDefaultResult={false} customResultPage={ResultPage} showInstantFeedback={true} /> }
            { lvl == 2 && <Quiz quiz={quiz} onComplete={setQuizResult} showDefaultResult={false} customResultPage={ResultPage} showInstantFeedback={true} /> }
            { lvl == 3 && <Quiz quiz={quiz2} onComplete={setQuizResult} showInstantFeedback={true} showDefaultResult={false} customResultPage={ResultPage}/> }
            { lvl > 3 && <QuizCompleted/>}
        </>

    )
}

const ResultPage = (obj) => {
    const pass = obj.numberOfCorrectAnswers > Math.floor(obj.numberOfQuestions / 2)
    return (
        <>
            {
                pass &&
                <NextPhasePage
                    src={"https://cdn.dribbble.com/users/1138069/screenshots/8974973/media/2b32ae97856da7406151c6ae6ea086cc.gif"}
                    alt={"Gif de hombre celebrando"}
                    waitMsg={"Mientras te enviamos al siguiente nivel."}
                    text={"¡Felicitaciones, haz superado este nivel!"}
                />
            }
            {!pass &&
                <NextPhasePage
                    src={"https://i.pinimg.com/originals/5b/83/ef/5b83ef5ba73ca499f556bce1859dd9ab.gif"}
                    alt={"Gif de hombre estudiando, rascandose la cabeza"}
                    waitMsg={"Te estamos redirigiendo al paso anterior."}
                    text={"Sigue estudiando, animo"}
                />
            }

        </>
    )
}

const NextPhasePage = ({text, alt, src, waitMsg}) => {

    return (
        <div align={'left'}>
            <Text>{text}</Text>
            <Image
                radius={4} alt={alt} width={"55%"}
                src={src}
            />
            <Notification
                loading
                title={"Espera"}
                disallowClose
            >
                {waitMsg}
            </Notification>
        </div>
    )
}

const QuizCompleted = () => {
    return (
        <>
            <Text size="lg" align="center" weight={600}>
                Has superado todo el quiz, bien hecho
            </Text>
            <Image radius={4}
                   src={"https://i.gifer.com/8i75.gif"}
            />
        </>
    )
}

export default CustomQuiz