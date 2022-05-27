import {AspectRatio, Container, Image, List, Text, Title} from "@mantine/core";
import GoBack from "../../components/GoBack";

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
                <iframe width="816" height="480" src="https://www.youtube.com/embed/eI2XsfYV58U"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
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
            <GoBack/>
        </Container>
    )
}

export default CPT