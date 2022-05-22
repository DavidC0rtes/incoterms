import { useState } from "react";
import { Button, Collapse } from "@mantine/core";

const CustomCollapse = ({btnVariant, btnText, children}) => {
    const [opened, setOpen] = useState(false)

    return (
        <div align={"center"} >
            <Button
                mb={"1em"}
                variant={btnVariant}
                onClick={() => setOpen((x) => !x)}>
                {btnText}
            </Button>

            <Collapse in={opened} transitionDuration={1000} transitionTimingFunction="linear">
                {children}
            </Collapse>
        </div>
    )
}

export default CustomCollapse