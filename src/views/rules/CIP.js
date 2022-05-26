import {AspectRatio, Container, Image, Text, Title} from "@mantine/core";

const CIP = (props) => {
    return (
        <Container>
            <Title order={3}>CIP (Carriage and Insurance Paid)</Title>
            <Text xs="sm">Transporte y Seguro Pagados hasta (lugar de destino designado)</Text>
            <br/>

            <Text size="sm">Vendedor = Exportador<br/>
                Comprador = Importador
            </Text>
            <br/>

            <AspectRatio ratio={4/3} mx={"auto"}>
                <iframe title="cip-video"
                        src="https://drive.google.com/file/d/1G_QI1y7xMjEqLhal3ofaftTkftgKn7kt/preview"
                        width="640" height="480" allow="autoplay">
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

        </Container>
    )
}

export default CIP