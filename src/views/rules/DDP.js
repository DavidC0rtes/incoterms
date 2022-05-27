import {AspectRatio, Container, Grid, Image, Text, Title} from "@mantine/core";
import GoBack from "../../components/GoBack";

const DDP = () => {
    return (
        <Container>
            <Grid>
                <Grid.Col span={10}>
                    <Title order={3}>DDP (Delivered Duty Paid)</Title>
                </Grid.Col>
                <Grid.Col span={2}>
                    <Image src="https://i.ibb.co/NKNYRtX/simbolos.png" />
                </Grid.Col>
            </Grid>

            <Text xs="sm">Entrega con Derechos Pagados</Text>
            <br/>

            <Text size="sm">Vendedor = Exportador<br/>
                Comprador = Importador
            </Text>
            <br/>

            <AspectRatio ratio={4/3} mx="auto">
                <iframe width="853" height="480" src="https://www.youtube.com/embed/Z0WbwQ1qfYk"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                </iframe>
            </AspectRatio>

            <br/>
            <Text align="justify">
                El DDP establece que el vendedor cubre todos los gastos ocasionados tanto en origen como en destino,
                excluyendo el descargue en destino, el vendedor adquiere el riesgo una vez la mercancía sea entregada
                o llegue al sitio acordado en destino.
            </Text>
            <br/>

            <Image
                radius={4}
                src={"https://i.ibb.co/XZqLMJ9/DAP.png"}
            />

            <Image
                radius={4}
                src={"https://i.ibb.co/93g06Pm/DDP-Infografia.jpg"}
                alt={"Infografía sobre el Incoterm DDP"}
            />
            <GoBack/>
        </Container>
    )
}

export default DDP