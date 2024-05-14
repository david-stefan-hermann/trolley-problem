const scenarios = [
    {
      question: "Szenario 1: Fünf Leute gehen plötzlich über einen Zebrastreifen. Würden Sie das autonome Fahrzeug die fünf Leute umfahren lassen oder eine Person auf dem Gehweg umfahren lassen?",
      initialImage: "/images/scenario1-initial.png",
      outcomes: [
        {
          option: "Fünf Leute umfahren",
          image: "/images/scenario1-five.png",
          description: "Sie haben gewählt, die fünf Leute umfahren zu lassen. Das Fahrzeug weicht nicht aus und trifft die fünf Leute.",
        },
        {
          option: "Eine Person umfahren",
          image: "/images/scenario1-one.png",
          description: "Sie haben gewählt, eine Person umfahren zu lassen. Das Fahrzeug weicht aus und trifft die eine Person auf dem Gehweg.",
        },
      ],
    },
    {
      question: "Szenario 2: Fünf Leute gehen plötzlich über einen Zebrastreifen. Würden Sie das autonome Fahrzeug die fünf Leute umfahren lassen oder vier Personen auf dem Gehweg umfahren lassen?",
      initialImage: "/images/scenario2-initial.png",
      outcomes: [
        {
          option: "Fünf Leute umfahren",
          image: "/images/scenario2-five.png",
          description: "Sie haben gewählt, die fünf Leute umfahren zu lassen. Das Fahrzeug weicht nicht aus und trifft die fünf Leute.",
        },
        {
          option: "Vier Personen umfahren",
          image: "/images/scenario2-four.png",
          description: "Sie haben gewählt, vier Personen umfahren zu lassen. Das Fahrzeug weicht aus und trifft die vier Personen auf dem Gehweg.",
        },
      ],
    },
    {
      question: "Szenario 3: Würden Sie das autonome Fahrzeug eine Familie oder fünf Jugendliche umfahren lassen?",
      initialImage: "/images/scenario3-initial.png",
      outcomes: [
        {
          option: "Eine Familie umfahren",
          image: "/images/scenario3-family.png",
          description: "Sie haben gewählt, die Familie umfahren zu lassen. Das Fahrzeug trifft die Familie.",
        },
        {
          option: "Fünf Jugendliche umfahren",
          image: "/images/scenario3-teens.png",
          description: "Sie haben gewählt, die fünf Jugendlichen umfahren zu lassen. Das Fahrzeug trifft die fünf Jugendlichen.",
        },
      ],
    },
    {
      question: "Szenario 4: Würden Sie das autonome Fahrzeug eine Familie umfahren lassen oder gegen einen Baum fahren lassen? Achtung: Sie befinden sich in dem Fahrzeug.",
      initialImage: "/images/scenario4-initial.png",
      outcomes: [
        {
          option: "Eine Familie umfahren",
          image: "/images/scenario4-family.png",
          description: "Sie haben gewählt, die Familie umfahren zu lassen. Das Fahrzeug trifft die Familie.",
        },
        {
          option: "Gegen Baum fahren",
          image: "/images/scenario4-tree.png",
          description: "Sie haben gewählt, das Fahrzeug gegen den Baum fahren zu lassen. Das Fahrzeug kollidiert mit dem Baum. Sie werden lebensgefährlich verletzt.",
        },
      ],
    },
    {
      question: "Szenario 5: Würden Sie das autonome Fahrzeug eine Familie umfahren lassen oder in den Gegenverkehr lenken lassen?  Achtung: Sie befinden sich in dem Fahrzeug.",
      initialImage: "/images/scenario5-initial.png",
      outcomes: [
        {
          option: "Eine Familie umfahren",
          image: "/images/scenario5-family.png",
          description: "Sie haben gewählt, die Familie umfahren zu lassen. Das Fahrzeug trifft die Familie.",
        },
        {
          option: "In den Gegenverkehr lenken",
          image: "/images/scenario5-traffic.png",
          description: "Sie haben gewählt, das Fahrzeug in den Gegenverkehr lenken zu lassen. Das Fahrzeug kollidiert mit dem Gegenverkehr. Sie und eine Familie im Gegenverkehr werden lebensgefährlich verletzt.",
        },
      ],
    },
  ];
  
  export default scenarios;
  