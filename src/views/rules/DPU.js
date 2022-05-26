import {AspectRatio, Container, Image, Text, Title} from "@mantine/core";

const DPU = () => {
    return (
        <Container>
            <Title order={3}>DPU (Delivered at Place Unloaded)</Title>
            <Text xs="sm">Mercancía entregada y descargada en el lugar convenido</Text>
            <br/>

            <Text size="sm">Vendedor = Exportador<br/>
                Comprador = Importador
            </Text>
            <br/>

            <AspectRatio ratio={4/3} mx="auto">
                <iframe title="dpu-video"
                        src="https://drive.google.com/file/d/11KBYumYGUG7Iy7AiNljuEmjaSvP9oeqn/preview"
                        width="640" height="480" allow="autoplay">
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
        </Container>
    )
}

export default DPU