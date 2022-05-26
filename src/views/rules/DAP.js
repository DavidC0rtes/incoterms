import {AspectRatio, Container, Image, Text, Title} from "@mantine/core";

const DAP = () => {
    return (
        <Container>
            <Title order={3}>DAP (Delivered At Place)</Title>
            <Text xs="sm">Entregada en el Lugar Convenido</Text>
            <br/>

            <Text size="sm">Vendedor = Exportador<br/>
                Comprador = Importador
            </Text>
            <br/>

            <Image
                radius={4}
                src={"https://i.ibb.co/XZqLMJ9/DAP.png"}
            />

            <br/>
            <Text align="justify">
                El vendedor entrega la mercancía y asume los costos generados en origen tales como
                (transporte, cargue, aduana exportación, transporte internacional, seguro y demás movimientos ocasionados
                para lograr el despacho de la mercancía) y costos en destino como (gastos por manipulación y movimiento
                de la mercancía y transporte en destino hasta entregar la mercancía en un punto acordado).
                El comprador debe asumir los costos y gastos en aduana de importación.
            </Text>
            <br/>

            <Image
                radius={4}
                src={"https://i.ibb.co/zFftDnT/DAP-infografia.jpg"}
                alt={"Infografía sobre el Incoterm DAP"}
            />

            <Image
                radius={4}
                src={"https://i.ibb.co/S0YNQKc/DAP-infografia-2.jpg"}
                alt={"Infografía sobre el Incoterm DAP"}
            />
        </Container>
    )
}

export default DAP