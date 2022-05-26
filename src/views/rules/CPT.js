import {AspectRatio, Container, Image, List, Text, Title} from "@mantine/core";

const CPT = () => {
    return(
        <Container size="md">
            <Title order={2}>CPT (Carriage Paid To)</Title>
            <Text xs="sm">Transporte pagado hasta (el lugar designado)</Text>
            <br/>
            <Title order={4}>Definición</Title> <br/>

            <Text size="sm">Vendedor = Exportador<br/>
                Comprador = Importador
            </Text>
            <br/>
            <AspectRatio ratio={4/3} mx="auto">
                <iframe title="exw"
                        src="https://drive.google.com/file/d/1ZFVPqI-wXpiB7PEsa5PIyZjZHR7MaH66/preview"
                        width="640" height="480"
                        allow="autoplay">
                </iframe>
            </AspectRatio>

            <br/>
            <Text align="justify">
                El vendedor hace la entrega de la mercancía y
                asume el costo del transporte hasta un puerto o
                destino acordado, incluyendo todos los gastos,
                trámites de exportación, despacho aduanero y
                transporte internacional.
                No obstante, la responsabilidad y el riesgo lo
                asume el comprador desde que inicia el transporte internacional.
            </Text>
            <br />
            <Image
                radius={4}
                alt="Regla CPT"
                src={"../CPT.png"}
            />
            <br/>
            <Image
                radius={4}
                alt="Regla CPT"
                src={"https://i.ibb.co/JrLP6mR/cpt-infografia-pages-to-jpg-0001.jpg"}
            />
        </Container>
    )
}

export default CPT