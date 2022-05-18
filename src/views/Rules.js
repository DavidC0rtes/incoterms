import {Stack} from "@mantine/core";
import CustomCard from "../components/CustomCard";

const Rules = () => {
    const cards = [
        {
            src: "exw.png",
            title: "EXW - EX Works",
            link: "/rules/exw"
        },
        {
            src: "fcafree.png",
            title: "FCA Free Carrier",
            link: "/rules/fca"
        },
        {
            src: "cpt.png",
            title: "",
            text: "CPT - Carriage Paid To",
            link: "/rules/cpt",
        },
        {
            src: "cip.png",
            text: "CIP - Carriage and Insurance Paid To",
            link: "/rules/cip",
        },
        {
            src: "dap.png",
            text: "DAP - Delivered At Place",
            link: "/rules/dap",
        },
        {
            src: "dpu.png",
            text: "DPU - Delivered at Place Unloaded",
            link: "/rules/dpu",
        },
        {
            src: "ddp.png",
            text: "DDP - Delivered Duty Paid",
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