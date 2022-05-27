import {Stack} from "@mantine/core";
import CustomCard from "../components/CustomCard";

const Rules = () => {
    const cards = [
        {
            src: "EXW.jpg",
            title: "EXW",
            text: "EX Works",
            link: "/rules/exw"
        },
        {
            src: "FCA1.png",
            title: "FCA",
            text: "Free Carrier",
            link: "/rules/fca"
        },
        {
            src: "CPT.png",
            title: "CPT",
            text: "Carriage Paid To",
            link: "/rules/cpt",
        },
        {
            src: "https://i.ibb.co/sRbXXHr/CIP.png",
            title: "CIP",
            text: "Carriage and Insurance Paid To",
            link: "/rules/cip",
        },
        {
            src: "https://i.ibb.co/XZqLMJ9/DAP.png",
            title: "DAP",
            text: "Delivered At Place",
            link: "/rules/dap",
        },
        {
            src: "https://i.ibb.co/9c7sPJp/DPU.png",
            title: "DPU",
            text: "Delivered at Place Unloaded",
            link: "/rules/dpu",
        },
        {
            src: "https://i.ibb.co/XZqLMJ9/DAP.png",
            title: "DDP",
            text: "Delivered Duty Paid",
            link: "/rules/ddp",
        }
    ]
    return(
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

export default Rules