import {Grid, Title} from "@mantine/core";
import ImageLink from "../components/ImageLink";
import SubscribeBtn from "../components/SubscribeBtn";

const LinksOfInterest = () => {
    return (
        <>
            <Title order={3} align="center">Links para profundizar más.</Title>
            <br/>
        <Grid justify="space-around" grow>
            <Grid.Col span={7}>
                <ImageLink
                    image={"https://images.unsplash.com/photo-1601897690942-bcacbad33e55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"}
                    textColor={"white"}
                    text={"Procolombia: Herramientas y servicios para el exportador"}
                    site={"https://www.colombiatrade.com.co/herramientas-del-exportador/logistica/incoterms-2020"}
                />
            </Grid.Col>
            <Grid.Col span={5}>
                <ImageLink
                    image={"https://images.unsplash.com/photo-1485628390555-1a7bd503f9fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}
                    textColor={"black"}
                    text={"Página oficial del ICC"}
                    site={"https://iccwbo.org/"}
                />
            </Grid.Col>
            <Grid.Col span={6}>
                <ImageLink
                    image={"https://images.unsplash.com/photo-1609895314390-cb64c186466a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"}
                    textColor={"black"}
                    text={"Compra el libro Incoterms® 2020 - eBook"}
                    site={"https://2go.iccwbo.org/incoterms-2020-eng-config+book_version-Book/"}
                />
            </Grid.Col>
            <Grid.Col span={7}>
                <ImageLink
                    image={"https://images.unsplash.com/photo-1605745341112-85968b19335b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"}
                    textColor={"#fff"}
                    text={"Visita Legiscomex"}
                    site={"https://www.legiscomex.com"}
                />
            </Grid.Col>
        </Grid>
        </>
    )
}

export default LinksOfInterest