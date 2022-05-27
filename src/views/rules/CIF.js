import {AspectRatio, Container, Image, Text, Title} from "@mantine/core";
import GoBack from "../../components/GoBack";

const CIF = () => {
    return (
        <Container>
            <Title order={3}>CIF (Cost, Insurance and Freight)</Title>
            <Text xs="sm">Coste, Seguro y Flete</Text>
            <br/>

            <Text size="sm">Vendedor = Exportador<br/>
                Comprador = Importador
            </Text>
            <br/>
            <AspectRatio ratio={4/3} mx={"auto"}>
                <iframe width="778" height="429" src="https://www.youtube.com/embed/VUQQK0T-ZEQ"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                </iframe>
            </AspectRatio>

            <br/>
            <Text align="left">
                Es el complemento del CFR, donde se adiciona el seguro marítimo a cargo del vendedor, en este caso el
                vendedor debe asumir los costos generado en origen sumando el flete internacional y el seguro,
                (transporte local en origen, aduana de exportación, manipulación de carga en puerto, flete internacional y seguro),
                el comprador asume los gastos ocasionados como (manipulación de carga en puerto de destino, aduana de importación
                y transporte local en destino).
            </Text>
            <br/>

            <Image
                radius={4}
                src={"https://i.ibb.co/2Nhnv8R/CIF.png"}
                alt={"Regla CIF Imagen"}
            />
            <br/>
            <GoBack/>
        </Container>
    )
}

export default CIF