import {Text, List} from "@mantine/core";

import TextWall from "../components/TextWall";

const IncoDo = () => {
    return (
        <TextWall
            img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.VQqM5eC_xtCCROPJat1fcAHaFV%26pid%3DApi&f=1"
            title="Lo que las reglas Incoterms® son"
        >
            <p>
                <Text>
                    Las reglas Incoterms® explican un conjunto de once de los acrónimos comerciales más utilizados
                    en la industria, e.g. CIF, DAP, etc.., que reflejan la práctica comercial en los contratos de
                    compra y venta de bienes.
                </Text>
            </p>
            <Text>Los Incoterms® describen:</Text>
            <List spacing={"sm"}>
                <List.Item><b>Obligaciones:</b> Quién hace qué entre el comprador y el vendedor, p.e. quién organiza
                    el transporte y seguro de las mercancías, o quién debe obtener documentos de embarque y licencias
                    de importación o exportación.
                </List.Item>

                <List.Item><b>Riesgo:</b> Dónde y cuándo el vendedor "envía" la mercancía, es decir,
                    en que punto el riesgo se transfiere del vendedor al comprador.
                </List.Item>

                <List.Item><b>Costo:</b> Quién es responsable por que costos, por ejemplo el embarque,
                    empaque, carga y/o descarga y control u otros costes asociados a la verificación y seguridad
                    de la mercancía.
                </List.Item>
            </List>

            <p>
                <Text>
                    Las reglas Incoterms® cubren estas áreas en un conjunto de diez artículos, numerados A1/B1 y así
                    sucesivamente. Los artículos que inician con A representan las obligaciones del vendedor y
                    aquellos que inician con la letra B representan las obligaciones del comprador.
                </Text>
            </p>
        </TextWall>
    )
}

export default IncoDo