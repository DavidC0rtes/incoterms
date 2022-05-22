import React, { useState } from 'react';
import {
    AppShell,
    Navbar,
    Header,
    Footer,
    Aside,
    Text,
    MediaQuery,
    Burger,
    useMantineTheme,
    Image,
} from '@mantine/core';
import { Outlet, Link } from 'react-router-dom'
import ModalHomePage from "../components/ModalHomePage";
import CustomStepper from "../components/CustomStepper";


export default function AppShellDemo() {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
    return (
        <AppShell
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            fixed
            navbar={
                <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
                    <Text component={Link} to="/">Inicio</Text>
                    <Text component={Link} to="/rules">Reglas Incoterms 2020</Text>
                </Navbar>
            }
            aside={
                <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                    <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
                        <Text>Application sidebar</Text>
                    </Aside>
                </MediaQuery>
            }
            footer={
                <Footer height={60} p="md">
                    Universidad Autónoma de Occidente
                </Footer>
            }
            header={
                <Header height={70} p="md" style={{background: 'white'}}>
                    <div style={{ display: 'flex', alignItems: 'center', height: '100%'}}>
                        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                            <Burger
                                opened={opened}
                                onClick={() => setOpened((o) => !o)}
                                size="sm"
                                color={theme.colors.gray[6]}
                                mr="xl"
                            />
                        </MediaQuery>

                        <Image
                            src="incotermslogo.png"
                            width="50%"
                        />
                    </div>
                </Header>
            }
        >
            <Outlet />
        </AppShell>
    );
}
