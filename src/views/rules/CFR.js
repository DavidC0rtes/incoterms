import {AspectRatio, Container, Image, Text, Title} from "@mantine/core";
import GoBack from "../../components/GoBack";

const CFR = () => {
    return (
        <Container>
            <Title order={3}>CFR (Cost and Freight)</Title>
            <Text xs="sm">Coste y Flete</Text>
            <br/>

            <Text size="sm">Vendedor = Exportador<br/>
                Comprador = Importador
            </Text>

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
                src={"https://i.ibb.co/k3MP3LM/CFR.png"}
            />
            <br/>
            <GoBack/>
        </Container>
    )
}

export default CFR