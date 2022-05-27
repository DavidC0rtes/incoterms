import {AspectRatio, Container, Image, Text, Title} from "@mantine/core";
import GoBack from "../../components/GoBack";

const FAS = () => {
    return (
        <Container>
            <Title order={3}>FAS Free Alongside Ship</Title>
            <Text xs="sm">Franco al Costado del Buque</Text>
            <br/>

            <Text size="sm">Vendedor = Exportador<br/>
                Comprador = Importador
            </Text>
            <br/>

            <AspectRatio ratio={4/3} mx="auto">
                <iframe width="835" height="480" src="https://www.youtube.com/embed/zjvIEZa9dXA"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                </iframe>
            </AspectRatio>

            <br/>
            <Text align="left">
                El vendedor se hace cargo de la entrega de la mercancía en el puerto de embarque, es decir el vendedor
                asume los costos generado hasta la entrega de la mercancía en puerto (transporte en origen, aduana  de
                exportación y demás gastos que se generen al ingresar y dejar la mercancía a disposición del puerto),
                el comprador asume el riesgo una vez sea transferida la responsabilidad en el puerto de origen hasta
                la entrega de la mercancía en destino, debe asumir los gastos generados tales como (manipulación de carga
                en  puerto origen, flete internacional, seguro, manipulación de carga en destino, aduana y transporte local).
            </Text>
            <br/>

            <Image
                radius={4}
                src={"https://i.ibb.co/5kDN23K/FAS.png"}
            />
            <br/>
            <Image
                radius={4}
                src={"https://i.ibb.co/MC06PZq/FAS-incoterm.jpg"}
                alt={"Explicación gráfica sobre el Incoterm FAS"}
            />
           <br/>
            <Image
                radius={4}
                src={"https://i.ibb.co/Xx7Yp98/FAS-Infografia.jpg"}
                alt={"Infografía sobre el Incoterm FAS"}
            />
            <GoBack/>
        </Container>
    )
}

export default FAS