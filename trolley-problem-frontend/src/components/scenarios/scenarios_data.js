const scenarios = [
    {
        question: "Scenario 1: Do you pull the lever to save five people by sacrificing one?",
        initialImage: "/images/scenario1-initial.png",
        outcomes: [
            {
                option: "Pull the lever",
                image: "/images/scenario1-lever.png",
                description: "You pulled the lever. The trolley switches tracks and hits one person.",
            },
            {
                option: "Do nothing",
                image: "/images/scenario1-nothing.png",
                description: "You did nothing. The trolley continues and hits five people.",
            },
        ],
    },
    {
        question: "Scenario 2: Do you push a large man onto the track to stop the trolley and save five people?",
        initialImage: "/images/scenario2-initial.png",
        outcomes: [
            {
                option: "Push the man",
                image: "/images/scenario2-push.png",
                description: "You pushed the man. The trolley stops and hits the man.",
            },
            {
                option: "Do nothing",
                image: "/images/scenario2-nothing.png",
                description: "You did nothing. The trolley continues and hits five people.",
            },
        ],
    },
    // Add more scenarios here...
]

export default scenarios
