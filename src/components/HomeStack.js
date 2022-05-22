import { Stack } from "@mantine/core";

import CustomCard from "./CustomCard";

const HomeStack = () => {

    const cards = [
        {
            src: "https://images.unsplash.com/photo-1605745341112-85968b19335b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
            title: "¿Quieres aprender como usar los Incoterms® 2020 en tu empresa?",
            text: "Toma una breve introducción",
            link: "/steps"
        },
        /**{
            src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.VQqM5eC_xtCCROPJat1fcAHaFV%26pid%3DApi&f=1",
            title: "Primeros pasos",
            text: "Lo que las Incoterms 2020 sí son",
            link: "/incoterms-do",
        },
        {
            src: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.jaysonlawgroup.com%2Fwp-content%2Fuploads%2F2015%2F04%2FRed-Traffic-Light.jpg&f=1&nofb=1",
            title: "Primeros pasos",
            text: "Lo que las Incoterms 2020 no son",
            link: "/incoterms-dont",
        }
         */
    ]
    //eslint-disable-next-line
    return (
        <Stack>
            {cards.map((card, i) => (
                <CustomCard
                        key={i}
                        src={card.src}
                        title={card.title}
                        text={card.text}
                        link={card.link}
                    />
                ))}
        </Stack>
    )
}

export default HomeStack