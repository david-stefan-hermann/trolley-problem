const scenarios = [
    {
        title: "Szenario 1",
        shortDescription: "Entscheidung zwischen dem Umfahren einer Person auf dem Gehweg oder fünf Leuten auf dem Zebrastreifen.",
        question: "Fünf Leute gehen plötzlich über einen Zebrastreifen. Würden Sie das autonome Fahrzeug die fünf Leute überfahren lassen oder eine Person auf dem Gehweg überfahren lassen?",
        initialImage: "/scenarios/scenario1-initial.jpeg",
        outcomes: [
            {
                option: "Eine Person überfahren",
                image: "/scenarios/scenario1-one.jpeg",
                description: "Sie haben gewählt, eine Person überfahren zu lassen. Das Fahrzeug weicht aus und trifft die eine Person auf dem Gehweg.",
            },
            {
                option: "Fünf Leute überfahren",
                image: "/scenarios/scenario1-five.jpeg",
                description: "Sie haben gewählt, die fünf Leute überfahren zu lassen. Das Fahrzeug weicht nicht aus und trifft die fünf Leute.",
            },
        ],
    },
    {
        title: "Szenario 2",
        shortDescription: "Entscheidung zwischen dem Umfahren von vier Personen auf dem Gehweg oder fünf Leuten auf dem Zebrastreifen.",
        question: "Fünf Leute gehen plötzlich über einen Zebrastreifen. Würden Sie das autonome Fahrzeug die fünf Leute überfahren lassen oder vier Personen auf dem Gehweg überfahren lassen?",
        initialImage: "/scenarios/scenario2-initial.jpeg",
        outcomes: [
            {
                option: "Vier Personen überfahren",
                image: "/scenarios/scenario2-four.jpeg",
                description: "Sie haben gewählt, vier Personen überfahren zu lassen. Das Fahrzeug weicht aus und trifft die vier Personen auf dem Gehweg.",
            },
            {
                option: "Fünf Leute überfahren",
                image: "/scenarios/scenario2-five.jpeg",
                description: "Sie haben gewählt, die fünf Leute überfahren zu lassen. Das Fahrzeug weicht nicht aus und trifft die fünf Leute.",
            },
        ],
    },
    /*
    {
        title: "Szenario 3",
        shortDescription: "Entscheidung zwischen dem Umfahren einer Familie oder fünf Jugendlichen.",
        question: "Würden Sie das autonome Fahrzeug eine Familie oder fünf Jugendliche überfahren lassen?",
        initialImage: "/scenarios/scenario3-initial.jpeg",
        outcomes: [
            {
                option: "Eine Familie überfahren",
                image: "/scenarios/scenario3-family.jpeg",
                description: "Sie haben gewählt, die Familie überfahren zu lassen. Das Fahrzeug trifft die Familie.",
            },
            {
                option: "Fünf Jugendliche überfahren",
                image: "/scenarios/scenario3-teens.jpeg",
                description: "Sie haben gewählt, die fünf Jugendlichen überfahren zu lassen. Das Fahrzeug trifft die fünf Jugendlichen.",
            },
        ],
    },*/
    {
        title: "Szenario 3",
        shortDescription: "Entscheidung zwischen dem Umfahren einer eilenden Geschäftsperson oder einer obdachlosen Person.",
        question: "Ein Geschäftsmann / eine Geschäftsfrau eilt über die Straße, um einen wichtigen Termin nicht zu verpassen, und befindet sich direkt im Fahrweg des autonomen Fahrzeugs. Auf der gegenüberliegenden Seite der Straße steht ein Obdachloser, der ebenfalls vom Fahrzeug erfasst werden könnte. Würden Sie das autonome Fahrzeug den Geschäftsmann / die Geschäftsfrau überfahren lassen oder die obdachlose Person?",
        initialImage: "/scenarios/business-initial.jpeg",
        outcomes: [
            {
                option: "Die obdachlose Person überfahren",
                image: "/scenarios/business-homeless.jpeg",
                description: "Sie haben gewählt, die obdachlose Person überfahren zu lassen. Das Fahrzeug weicht aus und trifft die obdachlose Person, der auf der anderen Straßenseite stand."
            },
            {
                option: "Den Geschäftsmann / die Geschäftsfrau überfahren",
                image: "/scenarios/business-businessman.jpeg",
                description: "Sie haben gewählt, die Geschäftsperson überfahren zu lassen. Das Fahrzeug weicht aus und trifft die Geschäftsperson, der über die Straße eilte."
            }
        ]
    },
    {
        title: "Szenario 4",
        shortDescription: "Entscheidung zwischen dem Umfahren einer eilenden Geschäftsperson mit seinem Hund oder einer obdachlosen Person.",
        question: "Ein Geschäftsmann / eine Geschäftsfrau eilt mit seinem / ihrem Hund über die Straße und befindet sich im direkten Fahrweg des autonomen Fahrzeugs. Auf der gegenüberliegenden Seite der Straße steht wie zuvor ein Obdachloser. Würden Sie das autonome Fahrzeug den Geschäftsmann / die Geschäftsfrau mit seinem Hund überfahren lassen oder die obdachlose Person?",
        initialImage: "/scenarios/dog-initial.jpeg",
        outcomes: [
            {
                option: "Die obdachlose Person überfahren",
                image: "/scenarios/dog-homeless.jpeg",
                description: "Sie haben gewählt, die obdachlose Person überfahren zu lassen. Das Fahrzeug weicht aus und trifft die obdachlose Person, der auf der anderen Straßenseite stand."
            },
            {
                option: "Den Geschäftsmann / die Geschäftsfrau überfahren",
                image: "/scenarios/dog-businessman.jpeg",
                description: "Sie haben gewählt, die Geschäftsperson mit seinem Hund überfahren zu lassen. Das Fahrzeug weicht aus und trifft beide, die über die Straße eilten."
            }
        ]
    },
    {
        title: "Szenario 5",
        shortDescription: "Entscheidung zwischen dem Umfahren einer Familie oder einem Zusammenstoß mit einem Baum.",
        question: "Würden Sie das autonome Fahrzeug eine Familie überfahren lassen oder gegen einen Baum fahren lassen? Achtung: Sie befinden sich in dem Fahrzeug.",
        initialImage: "/scenarios/scenario4-initial.jpeg",
        outcomes: [
            {
                option: "Eine Familie überfahren",
                image: "/scenarios/scenario4-family.jpeg",
                description: "Sie haben gewählt, die Familie überfahren zu lassen. Das Fahrzeug trifft die Familie.",
            },
            {
                option: "Gegen Baum fahren",
                image: "/scenarios/scenario4-tree.jpeg",
                description: "Sie haben gewählt, das Fahrzeug gegen den Baum fahren zu lassen. Das Fahrzeug kollidiert mit dem Baum. Sie werden lebensgefährlich verletzt.",
            },
        ],
    },
    {
        title: "Szenario 6",
        shortDescription: "Entscheidung zwischen dem Umfahren einer Familie oder dem Lenken in den Gegenverkehr.",
        question: "Würden Sie das autonome Fahrzeug eine Familie überfahren lassen oder in den Gegenverkehr lenken lassen?  Achtung: Sie befinden sich in dem Fahrzeug.",
        initialImage: "/scenarios/scenario5-initial.jpeg",
        outcomes: [
            {
                option: "In den Gegenverkehr lenken",
                image: "/scenarios/scenario5-traffic.jpeg",
                description: "Sie haben gewählt, das Fahrzeug in den Gegenverkehr lenken zu lassen. Das Fahrzeug kollidiert mit dem Gegenverkehr. Sie und eine Familie im Gegenverkehr werden lebensgefährlich verletzt.",
            },
            {
                option: "Eine Familie überfahren",
                image: "/scenarios/scenario5-family.jpeg",
                description: "Sie haben gewählt, die Familie überfahren zu lassen. Das Fahrzeug trifft die Familie.",
            },
        ],
    },
]

export default scenarios
