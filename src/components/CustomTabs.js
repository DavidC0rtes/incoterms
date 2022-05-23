import { useState } from "react";
import { Tabs } from "@mantine/core";

const CustomTabs = ({tabs}) => {
    const [activeTab, setActiveTab] = useState(0)

    return (
        <Tabs active={activeTab} onTabChange={setActiveTab} grow>
            {tabs.map((tab, i) => {
                return (
                    <Tabs.Tab label={tab.label} color={tab.color} key={i}>{tab.content}</Tabs.Tab>
                )
            })}
        </Tabs>
    )
}

export default CustomTabs