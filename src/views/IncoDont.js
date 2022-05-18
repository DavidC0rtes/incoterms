import {List, Text} from "@mantine/core";

import TextWall from "../components/TextWall";

const IncoDont = () => {
    return (
        <TextWall
            img="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.jaysonlawgroup.com%2Fwp-content%2Fuploads%2F2015%2F04%2FRed-Traffic-Light.jpg&f=1&nofb=1"
            title="Lo que las reglas Incoterms® no son"
        >
            <p>
                <Text>
                    Las reglas Incoterms® NO son por si solas -- y por consiguiente no son sustituto de -- un contrato
                    de venta. Estan diseñadas para reflejar la práctica comercial para ningún tipo en particular de bienes.
                    Se pueden utilizar tanto para el comercio de una carga a granel de mineral de hierro, como para cinco
                    contenedores de equipos electrónicos, o diez pallets de flores frescas transportadas por vía aérea.
                </Text>
            </p>
            <Text>Las reglas Incoterms® no se ocupan de lo siguiente:</Text>
            <List>
                <List.Item>Si se realiza un contrato o una venta si quiera.</List.Item>
                <List.Item>Las especificaciones de los bienes vendidos.</List.Item>
                <List.Item>El tiempo, lugar, método o moneda de pago.</List.Item>
                <List.Item>Las medidas que puedan tomarse por el incumplimiento del contrato de venta.</List.Item>
                <List.Item>La mayoría de consecuencias producto del retraso y otros incumplimientos
                    en el rendimiento de las obligaciones contractuales.</List.Item>
                <List.Item>El efecto de las sanciones.</List.Item>
                <List.Item>La imposición de aranceles.</List.Item>
                <List.Item>Prohibiciones de importación o exportación.</List.Item>
                <List.Item>Inconvenientes de fuerza mayor.</List.Item>
                <List.Item>Derechos de propiedad intelectual, o</List.Item>
                <List.Item>el método, el lugar o la ley de resolución de disputas en caso de tal incumplimiento.</List.Item>
            </List>
            <p>
                <Text>
                    Quizá aún más importante, las reglas Incoterms® NO se ocupan de la transferencia de propiedad,
                    título,posesión de los bienes vendidos.
                </Text>
            </p>
        </TextWall>
    )
}

export default IncoDont