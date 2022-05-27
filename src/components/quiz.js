export const quiz =  {
    "quizTitle": "Evalúa tus conocimientos",
    "quizSynopsis": "Estas a punto de iniciar el nivel medio de dificultad, ¡buena suerte!",
    "nrOfQuestions": "7",
    "questions": [
        {
            "question": "¿De qué se encarga el vendedor en el Incoterm CPT?",
            "questionType": "text",
            "questionPic": "", // if you need to display Picture in Question
            "answerSelectionType": "single",
            "answers": [
                "El vendedor se encarga del transporte de mercancías, deben permanecer en buenas condiciones,  hasta el lugar convenido y el comprador contrata el seguro.",
                "El vendedor en el CPT se encarga de embalar las mercancías para transportarlas con seguridad.",
                "Suministrar la mercancía y la factura comercial.",
            ],
            "correctAnswer": "1",
            "messageForCorrectAnswer": "Respuesta correcta. ¡Buen trabajo!",
            "messageForIncorrectAnswer": "Respuesta incorrecta.",
            "explanation": "",
            "point": "20"
        },
        {
            "question": "¿Qué significa el Incoterm CIF?",
            "questionType": "text",
            "answerSelectionType": "single",
            "answers": [
                "Las palabras en inglés Cost, Insurance and Freight (Costo, seguro y flete). Este concepto se refiere a que el costo de la mercancía en el momento de la venta incluye también el valor del transporte marítimo o fluvial e igualmente el seguro de viaje.",
                "Significa que el vendedor en este Incoterm realiza la entrega de la mercancía",
                "Significa que el vendedor entrega la mercancía a disposición del comprados en el lugar designado"
            ],
            "correctAnswer": "1",
            "messageForCorrectAnswer": "Respuesta correcta. ¡Buen trabajo!",
            "messageForIncorrectAnswer": "Respuesta incorrecta.",
            "explanation": "",
            "point": "20"
        },
        {
            "question": "¿Que significan las siglas del incoterm FOB?",
            "questionType": "text",
            "answerSelectionType": "single",
            "answers": [
                "Franco a bordo",
                "Franco a punto de abordar",
                "Franco al borde"
            ],
            "correctAnswer": "1",
            "messageForCorrectAnswer": "Respuesta correcta. ¡Buen trabajo!",
            "messageForIncorrectAnswer": "Respuesta incorrecta.",
            "explanation": "",
            "point": "10"
        },
        {
            "question": "¿ Qué significa el incoterm FOB?",
            "questionType": "text",
            "answerSelectionType": "single",
            "answers": [
                "El comprador designa el punto de entrega de la mercancia.",
                "El vendedor entrega la mercancía a bordo del buque designado por el comprador en el puerto de embarque.",
                "El comprador se encarga de todo el proceso de entrega de la mercancía.",
            ],
            "correctAnswer": "2",
            "messageForCorrectAnswer": "Respuesta correcta. ¡Buen trabajo!",
            "messageForIncorrectAnswer": "Respuesta incorrecta.",
            "explanation": "",
            "point": "30"
        },
        {
            "question": "¿Qué significa las siglas DDP?",
            "questionType": "text",
            "answerSelectionType": "single",
            "answers": [
                "Entrega con derechos pagados",
                "Listo para el embarque",
                "Transporte seguro y pagado hasta "
            ],
            "correctAnswer": "1",
            "messageForCorrectAnswer": "Respuesta correcta. ¡Buen trabajo!",
            "messageForIncorrectAnswer": "Respuesta incorrecta.",
            "explanation": "",
            "point": "20"
        },
        {
            "question": "¿Qué significa el incoterm DPU?",
            "questionType": "text",
            "answerSelectionType": "single",
            "answers": [
                "El vendedor cubre todos los gastos ocasionados tanto en origen como en destino, excluyendo el descargue en destino, el vendedor adquiere el riesgo una vez la mercancía sea entregada o llegue al sitio acordado en destino.",
                "El vendedor entrega la mercancía hasta el sitio en destino, cubre todos los gastos. El comprador debe cubrir los gastos generados en aduana de importación.",
                "El vendedor debe dejar las mercancías preparadas en sus instalaciones (oficinas, almacenes, fábrica, etc.) para que el comprador las recoja allí.",
            ],
            "correctAnswer": "2",
            "messageForCorrectAnswer": "Respuesta correcta. ¡Buen trabajo!",
            "messageForIncorrectAnswer": "Respuesta incorrecta.",
            "explanation": "",
            "point": "20"
        },
        {
            "question": "¿Es obligatorio contratar un seguro de transporte para el término FOB?",
            "questionType": "text",
            "answerSelectionType": "single",
            "answers": [
                "VERDADERO",
                "FALSO",
            ],
            "correctAnswer": "2",
            "messageForCorrectAnswer": "Respuesta correcta. ¡Buen trabajo!",
            "messageForIncorrectAnswer": "Respuesta incorrecta.",
            "explanation": "",
            "point": "20"
        }
    ],
    "appLocale": {
        "landingHeaderText": "<questionLength> preguntas",
        "question": "Pregunta",
        "startQuizBtn": "Comenzar Quiz",
        "resultFilterAll": "All",
        "resultFilterCorrect": "Correct",
        "resultFilterIncorrect": "Incorrect",
        "nextQuestionBtn": "Siguiente pregunta",
        "resultPageHeaderText": "Has completado el quiz. Acertaste <correctIndexLength> de <questionLength> preguntas."
    }
}