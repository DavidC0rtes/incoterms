import {
    Title,
    Text,
    Image,
    AspectRatio
} from "@mantine/core";
import CustomCollapse from "../components/CustomCollapse";
import IncoDo from "./IncoDo";
import IncoDont from "./IncoDont";

const Intro = () => {
    return (
        <div>

            <Title align="center">Introducción a los Incoterms® 2020</Title>

            <Image
                radius="md"
                src="https://blog.solarnub.com/wp-content/uploads/2019/11/Incoterms-2020.jpg"
                height="100%"
                width="90%"
            />

            <Text>
                <p>
                    Los Incoterms® 2020 son los términos comerciales oficiales publicados por la Cámara de Comercio Internacional (CCI).
                    Se trata de un texto voluntario, autorizado, aceptado y respetado en todo el mundo para determinar
                    las responsabilidades de compradores y vendedores en la entrega de mercancías en el marco de los contratos de venta
                    para el comercio internacional.
                    Los Incoterms se corresponden estrechamente con la Convención de las Naciones Unidas sobre los Contratos de Compraventa Internacional de Mercaderías.
                    Además, los Incoterms son conocidos y aplicados por las principales naciones comerciales.
                </p>
            </Text>

            <AspectRatio ratio={4 / 3} mx="auto">
                <iframe width="619" height="348" src="https://www.youtube.com/embed/0XxKKF4My4g"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                </iframe>
            </AspectRatio>

            <Title order={2}>¿Por qué fueron necesarios?</Title>
            <Text>
                <p>
                    Las diferencias en las prácticas comerciales y las interpretaciones jurídicas entre los comerciantes
                    de los distintos países hacían necesario un conjunto de normas comunes.
                    Estas reglas debían ser fáciles para todos los participantes para evitar malentendidos, disputas y litigios.
                </p>

                <p>
                    Los Incoterms fueron concebidos por primera vez por la CCI en 1921, y las primeras reglas Incoterms se crearon en 1936. Se designaron oficialmente como Incoterms en 1936.
                    Desde entonces, los Incoterms han evolucionado hasta convertirse en una norma contractual mundial codificada.
                    Se actualizan periódicamente cuando los acontecimientos del comercio internacional requieren atención.
                    Se realizaron modificaciones y adiciones en 1953, 1967, 1976, 1980, 2000, 2010 y 2020.
                </p>
            </Text>

            <IncoDo />
            <IncoDont />
        </div>
    )
}

export default Intro