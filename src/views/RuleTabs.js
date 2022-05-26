import CustomTabs from "../components/CustomTabs";
import Rules from "./Rules";
import SeaRules from "./SeaRules";

const tabs = [
    {
        label: "Todos los medios de transporte",
        content: <Rules />,
        color: 'teal'
    },
    {
        label: "Maritimo",
        content: <SeaRules />,
        color: "indigo"
    }
]

const RuleTabs = () => {
    return (
        <CustomTabs tabs={tabs} />
    )
}

export  default RuleTabs