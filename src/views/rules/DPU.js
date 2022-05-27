import {AspectRatio, Container, Image, Text, Title, Grid} from "@mantine/core";
import GoBack from "../../components/GoBack";

const DPU = () => {
    return (
        <Container>
            <Grid>
                <Grid.Col span={10}>
                    <Title order={3}>DPU (Delivered at Place Unloaded)</Title>
                </Grid.Col>
                <Grid.Col span={2}>
                    <Image src="https://i.ibb.co/NKNYRtX/simbolos.png" />
                </Grid.Col>
            </Grid>

            <Text xs="sm">Mercancía entregada y descargada en el lugar convenido</Text>
            <br/>

            <Text size="sm">Vendedor = Exportador<br/>
                Comprador = Importador
            </Text>
            <br/>

            <AspectRatio ratio={4/3} mx="auto">
                <iframe width="853" height="480" src="https://www.youtube.com/embed/bHi8pip9DRM"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                </iframe>
            </AspectRatio>

            <br/>
            <Text align="justify">
                El vendedor entrega la mercancía hasta el sitio en destino, cubriendo todos los gastos generados en
                transporte local, internacional, seguro, aduana de exportación y manipulación de carga en origen y destino,
                transporte en destino. El comprador debe cubrir los gastos generados en aduana de importación y pago de impuestos.
            </Text>
            <br/>

            <Image
                radius={4}
                src={"https://i.ibb.co/9c7sPJp/DPU.png"}
            />

            <Image
                radius={4}
                src={"https://i.ibb.co/dPQQC0c/DPU-infograf-a.jpg"}
                alt={"Infografía sobre el Incoterm DPU"}
            />
            <GoBack/>
        </Container>
    )
}

export default DPU