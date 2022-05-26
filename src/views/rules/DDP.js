import {AspectRatio, Container, Image, Text, Title} from "@mantine/core";

const DDP = () => {
    return (
        <Container>
            <Title order={3}>DDP (Delivered Duty Paid)</Title>
            <Text xs="sm">Entrega con Derechos Pagados</Text>
            <br/>

            <Text size="sm">Vendedor = Exportador<br/>
                Comprador = Importador
            </Text>
            <br/>

            <AspectRatio ratio={4/3} mx="auto">
                <iframe title={"video-ddp"}
                    src="https://drive.google.com/file/d/1JD4M8OBGy9EOs9-iH8yPWUYcMxB-V_8o/preview"
                        width="640" height="480" allow="autoplay">
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
        </Container>
    )
}

export default DDP