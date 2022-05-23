import CustomTabs from "../components/CustomTabs";
import Rules from "./Rules";

const tabs = [
    {
        label: "Todos los medios de transporte",
        content: <Rules />,
        color: 'teal'
    },
    {
        label: "Maritimo",
        content: <Rules />,
        color: "indigo"
    }
]

const RuleTabs = () => {
    return (
        <CustomTabs tabs={tabs} />
    )
}

export  default RuleTabs