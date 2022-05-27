import {AspectRatio, Container, Image, Text, Title} from "@mantine/core";
import GoBack from "../../components/GoBack";

const FOB = () => {
    return (
        <Container>
            <Title order={3}>FOB Free On Board</Title>
            <Text xs="sm">Franco a bordo</Text>
            <br/>

            <Text size="sm">Vendedor = Exportador<br/>
                Comprador = Importador
            </Text>
            <br/>

            <AspectRatio ratio={4/3} mx="auto">
                <iframe width="819" height="480" src="https://www.youtube.com/embed/PZLJ3glSwss"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                </iframe>
            </AspectRatio>

            <br/>
            <Text align="left">
                El vendedor hace la entrega de la mercancía a bordo del buque, cubriendo los gastos generados en origen
                tales como (transporte local, aduana de exportación y manipulación de mercancía). Así mismo,
                el comprador asume todos los costos y riesgos de daño o pérdida desde ese lugar.
                (Flete internacional, seguro, manipulación de mercancía, aduana de importación y transporte local en destino).
            </Text>
            <br/>

            <Image
                radius={4}
                src={"https://i.ibb.co/tDYcVSQ/FOB.png"}
            />
            <br/>
            <GoBack/>
        </Container>
    )
}

export default FOB