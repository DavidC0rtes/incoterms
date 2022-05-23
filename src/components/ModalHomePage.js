import {useEffect, useState} from 'react'
import { Text, Button, Modal } from "@mantine/core";

const ModalHomePage = () => {
    const [open, setOpen] = useState(() => {
        const val = JSON.parse(sessionStorage.getItem('click'))
        
        return val !== false
    });

    useEffect(() => {
        sessionStorage.setItem('click', JSON.stringify(open))
    }, [open])

    return (
        <Modal
            opened={open}
            onClose={() => setOpen(false)} title={<Text weight={700}>¿Quieres aprender cómo usar los Incoterms 2020 en tu empresa?</Text>}>
            <Button compact onClick={() => setOpen(false)}>
                Dame clic para comenzar.
            </Button>
        </Modal>
    )
}

export default ModalHomePage