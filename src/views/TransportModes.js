import TextWall from "../components/TextWall";
import {AspectRatio, Image, List, Text, Timeline, Title} from "@mantine/core";

const TransportModes = () => {
    return (
        <TextWall
            titleOrder={3}
            img="transportlogo.png"
            title="¿Sabes cuáles son los modos de transporte internacional?"
        >
            <Text size="md" >
                Se estiman que existen al menos 5 modos de transporte de mercancías: el marítimo, terrestre, aéreo,
                ferroviario y multimodal. Cada uno, tiene sus características, así como sus ventajas y desventajas;
                aquí te vamos a explicar en qué consiste cada uno y cuáles son sus características principales.
                El modo de transporte se debe escoger según el tipo de mercancía, el tiempo y el costo.
                Hay unos modos de transporte que son rápidos, pero su costo es muy elevado; otros, resultan más económicos, pero el tiempo de entrega es mucho mayor. La idea es, tener un balance según las necesidades de cada empresa, el tipo de negocio y del cliente final.
            </Text>
            <br />
            <hr />
            <Title order={3}>Transporte marítimo</Title>
            <Image
                src={"Transporte-maritimo.png"}
                width="30%"
            />
            <Text size="md">
                Permite trasladar grandes pesos y volúmenes de mercancías sólidas o líquidas.
                <p>Las características esenciales del tráfico marítimo son:</p>

                <div align="left">
                    <List icon="✔️" spacing={"sm"}>
                        <List.Item><strong>Carácter internacional</strong>: es prácticamente el único medio económico para transportar grandes volúmenes de mercancías, entre puntos distantes geográficamente.</List.Item>
                        <List.Item><b>Capacidad</b>: los tonelajes de los buques han llegado a superar el medio millón de toneladas de peso muerto en los grandes petroleros.</List.Item>
                        <List.Item><b>Flexibilidad</b>: es posible emplear buques pequeños.</List.Item>
                        <List.Item><b>Versatilidad</b>: se pueden adaptar diferentes tipos de buques a todo tipo de cargas.</List.Item>
                    </List>
                </div>
            </Text>
            <hr />
            <Title order={3}>Transporte aéreo</Title>
            <Image width={"25%"} src="avion.png"/>
            <Text>
                Se utiliza para transportar mercancías a nivel intercontinental, especialmente si se trata de mercancías de valor.
                Gracias a su rapidez, seguridad, facilidad de control y seguimiento, resulta el medio ideal para hacer envíos urgentes o especiales,
                principalmente de mercancías perecederas o de elevado valor unitario. También es conveniente para el envío
                de material de cirugía, instrumentos científicos, etc.
            </Text>
            <br />
            <hr />
            <Title order={3}>Transporte terrestre de mercancías</Title>
            <Title order={4}>Transporte por camión</Title>
            <Image src="Transporte-terrestre.png" width="25%"/>
            <Text>
                Este tipo de transporte, además de contar con diferentes tipos de vehículos y una gran variedad de líneas,
                ofrece una mayor flexibilidad, ya que los vehículos pueden transportar cualquier cantidad, tipo y tamaño de carga.
            </Text>
            <br/>
            <Title order={4}>Transporte ferroviario</Title>
            <Image src="ferroviario.png" width="50%"/>
            <Text>
                Su capacidad de transporte es mucho mayor que la de un camión y requiere menos mano de obra por tonelada/kilómetro para su traslado.
                Sin embargo, está limitado por la red ferroviaria. <br/>
                Algunas de sus ventajas son: costos bajos, amplia distribución geográfica y buena disponibilidad de depósito o almacenamiento.
            </Text>
            <br />
            <Title order={4}>Transporte multimodal</Title>
            <Image src="multimodal.png"  width="30%"/>
            <Text>
                <p>
                    Consiste en la entrega de mercancías desde el lugar de origen hasta el destino final, a través de distintos medios de transporte.
                </p>
                <p>
                    La gestión comercial del transporte multimodal es realizada por los denominados Operadores de
                    Transporte Multimodal (OTM), que son generalmente compañías navieras, operadores ferroviarios o de
                    tránsito especializados que, frecuentemente, no son propietarios de los medios utilizados,
                    sino que celebran un contrato de transporte multimodal, asumiendo la responsabilidad de su cumplimiento.
                </p>
            </Text>
            <AspectRatio ratio={4/3}>
                <iframe width="640" height="360" src="https://www.youtube.com/embed/Q_J7kyajYD8"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                </iframe>
            </AspectRatio>
            <hr/>
            <Title order={3}>Comparación</Title>
            <br />
            <Image radius="md" src="infografia.webp" />
        </TextWall>




    )
}

export default TransportModes