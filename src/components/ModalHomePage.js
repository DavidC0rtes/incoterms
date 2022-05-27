import {useEffect, useState} from 'react'
import {Text, Modal, AspectRatio} from "@mantine/core";

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
            <AspectRatio ratio={4/3} mx="auto">
                <iframe width="853" height="480" src="https://www.youtube.com/embed/0GM77EyuomU"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                </iframe>
            </AspectRatio>
        </Modal>
    )
}

export default ModalHomePage