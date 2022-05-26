import CustomCard from "../components/CustomCard";
import {Stack} from "@mantine/core";

const cards = [
    {
        src: "https://i.ibb.co/5kDN23K/FAS.png",
        title: "FAS",
        text: "Free Alongside Ship",
        link: "/rules/fas"
    },
    {
        src: "https://i.ibb.co/tDYcVSQ/FOB.png",
        title: "FOB",
        text: "Free On Board",
        link: "/rules/fob"
    },
    {
        src: "https://i.ibb.co/k3MP3LM/CFR.png",
        title: "CFR",
        text: "Cost and Freight",
        link: "/rules/cfr",
    },
]

const SeaRules = () => {
    return (
        <Stack sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0]})}>
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

export default SeaRules