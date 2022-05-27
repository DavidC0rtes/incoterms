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
import NewsletterSignUp from "../components/NewsletterSignUp";

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
                    <NewsletterSignUp/>
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
                <Footer height={60} p="md" style={{textAlign: 'center'}}>
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
                           src="https://i.ibb.co/4mtV3b9/incotermslogo.png"
                           width="60%"
                        />
                        <Image
                            src="https://i.ibb.co/6NPzC70/logo.png"
                            height="100%"
                            width="100%"
                        />
                    </div>
                </Header>
            }
        >
            <Outlet />
        </AppShell>
    );
}
