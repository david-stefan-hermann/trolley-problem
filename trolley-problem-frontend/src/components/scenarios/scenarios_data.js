const scenarios = [
    {
        title: "Szenario 1",
        question: "Fünf Leute gehen plötzlich über einen Zebrastreifen. Würden Sie das autonome Fahrzeug die fünf Leute umfahren lassen oder eine Person auf dem Gehweg umfahren lassen?",
        initialImage: "/scenarios/scenario1-initial.jpeg",
        outcomes: [
            {
                option: "Fünf Leute umfahren",
                image: "/scenarios/scenario1-five.jpeg",
                description: "Sie haben gewählt, die fünf Leute umfahren zu lassen. Das Fahrzeug weicht nicht aus und trifft die fünf Leute.",
            },
            {
                option: "Eine Person umfahren",
                image: "/scenarios/scenario1-one.jpeg",
                description: "Sie haben gewählt, eine Person umfahren zu lassen. Das Fahrzeug weicht aus und trifft die eine Person auf dem Gehweg.",
            },
        ],
    },
    {
        title: "Szenario 2",
        question: "Fünf Leute gehen plötzlich über einen Zebrastreifen. Würden Sie das autonome Fahrzeug die fünf Leute umfahren lassen oder vier Personen auf dem Gehweg umfahren lassen?",
        initialImage: "/scenarios/scenario2-initial.jpeg",
        outcomes: [
            {
                option: "Fünf Leute umfahren",
                image: "/scenarios/scenario2-five.jpeg",
                description: "Sie haben gewählt, die fünf Leute umfahren zu lassen. Das Fahrzeug weicht nicht aus und trifft die fünf Leute.",
            },
            {
                option: "Vier Personen umfahren",
                image: "/scenarios/scenario2-four.jpeg",
                description: "Sie haben gewählt, vier Personen umfahren zu lassen. Das Fahrzeug weicht aus und trifft die vier Personen auf dem Gehweg.",
            },
        ],
    },
    {
        title: "Szenario 3",
        question: "Würden Sie das autonome Fahrzeug eine Familie oder fünf Jugendliche umfahren lassen?",
        initialImage: "/scenarios/scenario3-initial.jpeg",
        outcomes: [
            {
                option: "Eine Familie umfahren",
                image: "/scenarios/scenario3-family.jpeg",
                description: "Sie haben gewählt, die Familie umfahren zu lassen. Das Fahrzeug trifft die Familie.",
            },
            {
                option: "Fünf Jugendliche umfahren",
                image: "/scenarios/scenario3-teens.jpeg",
                description: "Sie haben gewählt, die fünf Jugendlichen umfahren zu lassen. Das Fahrzeug trifft die fünf Jugendlichen.",
            },
        ],
    },
    {
        title: "Szenario 4",
        question: "Würden Sie das autonome Fahrzeug eine Familie umfahren lassen oder gegen einen Baum fahren lassen? Achtung: Sie befinden sich in dem Fahrzeug.",
        initialImage: "/scenarios/scenario4-initial.jpeg",
        outcomes: [
            {
                option: "Eine Familie umfahren",
                image: "/scenarios/scenario4-family.jpeg",
                description: "Sie haben gewählt, die Familie umfahren zu lassen. Das Fahrzeug trifft die Familie.",
            },
            {
                option: "Gegen Baum fahren",
                image: "/scenarios/scenario4-tree.jpeg",
                description: "Sie haben gewählt, das Fahrzeug gegen den Baum fahren zu lassen. Das Fahrzeug kollidiert mit dem Baum. Sie werden lebensgefährlich verletzt.",
            },
        ],
    },
    {
        title: "Szenario 5",
        question: "Würden Sie das autonome Fahrzeug eine Familie umfahren lassen oder in den Gegenverkehr lenken lassen?  Achtung: Sie befinden sich in dem Fahrzeug.",
        initialImage: "/scenarios/scenario5-initial.jpeg",
        outcomes: [
            {
                option: "Eine Familie umfahren",
                image: "/scenarios/scenario5-family.jpeg",
                description: "Sie haben gewählt, die Familie umfahren zu lassen. Das Fahrzeug trifft die Familie.",
            },
            {
                option: "In den Gegenverkehr lenken",
                image: "/scenarios/scenario5-traffic.jpeg",
                description: "Sie haben gewählt, das Fahrzeug in den Gegenverkehr lenken zu lassen. Das Fahrzeug kollidiert mit dem Gegenverkehr. Sie und eine Familie im Gegenverkehr werden lebensgefährlich verletzt.",
            },
        ],
    },
];

export default scenarios;
