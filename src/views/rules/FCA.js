import {
    AspectRatio,
    Container, Grid, Image, List, Text, Title,
} from "@mantine/core";
import GoBack from "../../components/GoBack";

const FCA = () => {
    return(
        <Container size="md">
            <Grid>
                <Grid.Col span={10}>
                    <Title order={2} align="center">FCA</Title>
                </Grid.Col>
                <Grid.Col span={2}>
                    <Image src="https://i.ibb.co/NKNYRtX/simbolos.png" />
                </Grid.Col>
            </Grid>

            < hr />
            <Title order={3}>Free Carrier / Franco porteador</Title>
            <br />
            <AspectRatio ratio={4/3} mx="auto">
                <iframe width="853" height="480" src="https://www.youtube.com/embed/looCVY_YbAE"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                </iframe>
            </AspectRatio>
            <br/>
            <Text>En este Incoterms®️ 2020 existen dos modalidades de
                entrega y riesgo de la mercancía:</Text>

            <List>
                <List.Item>Cuando el lugar designado son las instalaciones del vendedor, la mercancía se debe cargar en los medios de transporte dispuestos por el comprador.</List.Item>
                <List.Item>Cuando el lugar designado es otro, se debe acordar o concretar un punto de entrega de la mercancía al transportista elegido por el comprador, en los medios de transporte del vendedor preparada para la descarga.</List.Item>
            </List>
            <br/>
            <Image src="../FCAimg.jpg"/>
            <br/>
            <Title order={4}>Consideraciones</Title>
            <List>
                <List.Item>Cuenta con dos condiciones de entrega.</List.Item>
                <List.Item>El vendedor debe entregar el producto listo para despacho, con embalaje y rotulado necesario.</List.Item>
                <List.Item>El vendedor debe pagar los costos de verificación de calidad u operaciones de recuento.</List.Item>
                <List.Item>El vendedor es responsable de pérdida o daños hasta que se haya entregado al porteador o persona designada por el comprador.</List.Item>
                <List.Item>El comprador debe contratar el transporte desde el punto designado de entrega.</List.Item>
                <List.Item>Se recomienda leer las notas explicativas y obligaciones de las partes.</List.Item>
            </List>
            <br/>

            <Title order={4}>Recomendaciones</Title>
            <List>
                <List.Item>La factura comercial debe indicar el Incoterms®️ 2020 utilizado.</List.Item>
                <List.Item>En la factura comercial se deben desglosar los gastos de acuerdo al Incoterms®️ 2020 utilizado.</List.Item>
                <List.Item>Verificar que la mercancía viaje con un seguro internacional</List.Item>
                <List.Item>Se recomienda validar la información declarada en el BL o Guía Aérea o Carta Porte.</List.Item>
            </List>
            <Image radius={4} src={"../FCA1.png"}/>
            <Image radius={4} src={"../FCA2.png"}/>
            <GoBack/>
        </Container>
    )
}

export default FCA