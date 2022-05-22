import { useState } from 'react'
import { Text, Button, Modal } from "@mantine/core";
import { Link } from "react-router-dom";

const ModalHomePage = () => {
    const [open, setOpen] = useState(true);

    return (
        <Modal opened={open} onClose={() => setOpen(false)} title={<Text weight={700}>¿Sabes que son los Incoterms® 2020?</Text>}>
            <Button compact component={Link} to="/intro" onClick={() => setOpen(false)}>
                Dame clic para comenzar.
            </Button>
        </Modal>
    )
}

export default ModalHomePage