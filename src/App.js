import { MantineProvider } from "@mantine/core";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import CustomAppShell from './layout/CustomAppShell'
import AppShellContent from "./components/AppShellContent";

import Intro from "./views/Intro";
import IncoDo from "./views/IncoDo";
import IncoDont from "./views/IncoDont";
import Rules from "./views/Rules";
import FCA from "./views/rules/FCA";
import EXW from "./views/rules/EXW";


function App() {
  return (
    <MantineProvider theme={{ colorScheme: 'light' }}>
        <BrowserRouter>
            <Routes>
                <Route element={<CustomAppShell />}>
                    <Route path="/" element={<AppShellContent />}/>
                    <Route path="intro" element={<Intro/>}/>
                    <Route path="incoterms-do" element={<IncoDo/>}/>
                    <Route path="incoterms-dont" element={<IncoDont/>}/>
                    <Route path="rules" element={<Rules/>} />
                    <Route path={"rules/fca"} element={<FCA/>} />
                    <Route path={"rules/exw"} element={<EXW/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
