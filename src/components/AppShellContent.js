import {Container} from "@mantine/core";

import HomeStack from "./HomeStack";
import CustomStepper from "./CustomStepper";
import ModalHomePage from "./ModalHomePage";

const AppShellContent = () => {
    return (
        <Container size="lg">
            <ModalHomePage/>
            <CustomStepper />
        </Container>
    )
}

export default AppShellContent