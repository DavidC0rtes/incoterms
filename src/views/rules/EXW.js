import {
    Image,
    Title,
    Container,
    Text,
    List, AspectRatio,
} from "@mantine/core";
import GoBack from "../../components/GoBack";


const EXW = () => {
    return(
        <Container size="md">
            <Title order={2}> Ex Works / En fábrica</Title>
            <Text xs="sm">Incluir el lugar de entrega designado.</Text>
            <br />
            <Image src={"../exw.gif"} radius={4} alt="GIF trabajadores desplazando pallets."/>
            <Title order={4}>Definición</Title>
            <br/>
            <Text align="justify">
                El exportador entrega la mercancía a disposición del
                importador en el lugar designado por él mismo,
                bien sea en la fábrica, almacén o taller, entre otros.
                El importador asume todos los riesgos y los costos desde el momento que recibe la mercancía hasta su destino.
            </Text>
            <br />
            <AspectRatio ratio={4/3} mx="auto">
                <iframe width="848" height="480" src="https://www.youtube.com/embed/La4xX-JnHYU"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                </iframe>
            </AspectRatio>
            <br/>
            <Title order={4}>Consideraciones</Title>
                <List>
                    <List.Item>El exportador indica el lugar de entrega de la mercancía.</List.Item>
                    <List.Item>El exportador no está obligado a realizar el cargue de la mercancía.</List.Item>
                    <List.Item>El exportador debe entrgar el producto listo para despacho, con embalaje y rotulado necesario.</List.Item>
                    <List.Item>El importador debe asumir los costos y los riesgos al momento de recibir la mercancía no cargada.</List.Item>
                    <List.Item>Se recomienda que se pacte el cargue de la carga, ya que usualmente el vendedor dispone de los recursos necesarios para la correcta manipulación de la carga.</List.Item>
                    <List.Item>Se recomienda leer las notas explicativas y obligaciones de las partes.</List.Item>
                </List>
            <br/>
            <Image
                radius={4}
                alt="Regla EXW"
                src={"../EXW.jpg"}
            />
            <Title order={4}>Recomendaciones</Title>

            <List>
                <List.Item>La factura comercial debe indicar el Incoterms®️ 2020 utilizado.</List.Item>
                <List.Item>En la factura comercial se deben desglosar los gastos de acuerdo al Incoterms®️ 2020 utilizado.</List.Item>
                <List.Item>Verificar que la mercancía viaje con un seguro internacional.</List.Item>
                <List.Item>Se recomienda validar la información declarada en el BL o Guía Aérea o Carta Porte.</List.Item>
                <List.Item>Los datos del consignatario deben ser claros y precisos.</List.Item>
            </List>
            <Image
                radius={4}
                alt="Regla EXW"
                src={"https://i.ibb.co/wsfnNQ3/EXW-infografia.jpg"}
            />
            <GoBack/>
        </Container>
    )
}

export default EXW