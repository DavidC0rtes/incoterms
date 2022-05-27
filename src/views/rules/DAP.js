import {AspectRatio, Container, Grid, Image, Text, Title} from "@mantine/core";
import GoBack from "../../components/GoBack";

const DAP = () => {
    return (
        <Container>
            <Grid>
                <Grid.Col span={10}>
                    <Title order={3}>DAP (Delivered At Place)</Title>
                </Grid.Col>
                <Grid.Col span={2}>
                    <Image src="https://i.ibb.co/NKNYRtX/simbolos.png" />
                </Grid.Col>
            </Grid>

            <Text xs="sm">Entregada en el Lugar Convenido</Text>
            <br/>

            <Text size="sm">Vendedor = Exportador<br/>
                Comprador = Importador
            </Text>
            <br/>

            <AspectRatio ratio={4/3} mx={"auto"}>
                <iframe width="835" height="480" src="https://www.youtube.com/embed/o0vRwaz1fYY"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                </iframe>
            </AspectRatio>
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
            <GoBack/>
        </Container>
    )
}

export default DAP