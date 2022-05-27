import {AspectRatio, Container, Grid, Image, Text, Title} from "@mantine/core";
import GoBack from "../../components/GoBack";

const CIP = (props) => {
    return (
        <Container>
            <Grid>
                <Grid.Col span={10}>
                    <Title order={3}>CIP (Carriage and Insurance Paid)</Title>
                </Grid.Col>
                <Grid.Col span={2}>
                    <Image src="https://i.ibb.co/NKNYRtX/simbolos.png" />
                </Grid.Col>
            </Grid>

            <Text xs="sm">Transporte y Seguro Pagados hasta (lugar de destino designado)</Text>
            <br/>

            <Text size="sm">Vendedor = Exportador<br/>
                Comprador = Importador
            </Text>
            <br/>

            <AspectRatio ratio={4/3} mx={"auto"}>
                <iframe width="848" height="480" src="https://www.youtube.com/embed/EY12uz91r9c"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                </iframe>
            </AspectRatio>

            <br/>
            <Text align="justify">
                Es el complemento del Incoterm® 2020 CPT, se incluye el valor del seguro que es asumido por el vendedor.
                El vendedor debe asumir todos los gastos relacionados con manipulación, transporte local, trámites de
                exportación, despacho aduanero, transporte internacional y seguro. No obstante, la responsabilidad del
                comprador inicia al finalizar el transporte internacional.
            </Text>
            <br/>
            <Image
                radius={4}
                src={"https://i.ibb.co/sRbXXHr/CIP.png"}
            />
            <br/>
            <Image
                radius={4}
                src={"https://i.ibb.co/4fHmr68/CIP-Infograf-a.jpg"}
            />
            <GoBack/>
        </Container>
    )
}

export default CIP