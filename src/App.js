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
import CustomStepper from "./components/CustomStepper";
import CPT from "./views/rules/CPT";
import CIP from "./views/rules/CIP";
import DAP from "./views/rules/DAP";
import DPU from "./views/rules/DPU";
import DDP from "./views/rules/DDP";
import FAS from "./views/rules/FAS";
import FOB from "./views/rules/FOB";
import CFR from "./views/rules/CFR";
import CustomQuiz from "./components/CustomQuiz";
import BegQuiz from "./components/BegQuiz";
import CIF from "./views/rules/CIF";


function App() {
  return (
    <MantineProvider theme={{ colorScheme: 'light' }}>
        <BrowserRouter>
            <Routes>
                <Route element={<CustomAppShell />}>
                    <Route path="/" element={<AppShellContent />}/>
                    <Route path="intro" element={<Intro/>}/>
                    <Route path="/steps" element={<CustomStepper />}/>
                    <Route path="incoterms-do" element={<IncoDo/>}/>
                    <Route path="incoterms-dont" element={<IncoDont/>}/>
                    <Route path="rules" element={<Rules/>} />
                    <Route path={"rules/fca"} element={<FCA/>} />
                    <Route path={"rules/exw"} element={<EXW/>} />
                    <Route path={"rules/cpt"} element={<CPT/>} />
                    <Route path={"rules/cip"} element={<CIP/>} />
                    <Route path={"rules/dap"} element={<DAP/>} />
                    <Route path={"rules/dpu"} element={<DPU/>} />
                    <Route path={"rules/ddp"} element={<DDP/>} />
                    <Route path={"rules/fas"} element={<FAS/>} />
                    <Route path={"rules/fob"} element={<FOB/>} />
                    <Route path={"rules/cfr"} element={<CFR/>} />
                    <Route path={"rules/cif"} element={<CIF/>} />
                    <Route path={"begginer"} element={<BegQuiz/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
