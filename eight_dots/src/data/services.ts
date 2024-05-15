type Services = Array<Service>

type Service = {
    img: string,
    title: string,
    skills: Array<string>,
    cards: Array<Card>
}

type Card = {
    id: number,
    title: string,
    desc: string,
    bgColor: string
}

export const servicesData: Services = [
    {
        img: '/icons/ux_design.svg',
        title: 'UX Design',
        skills: [
            'Current State Assessment',
            'Initial Data Review',
            'QA sessions',
            'User interview',
            'Quantitative research',
            'Competitors research',
            'JTBD',
            'Analysis',
            'Ideas conceptual map',
            'information architecture',
            'User Flows',
            'Empathy Map',
            'CJM'
        ],
        cards: [
            {
                id: 1,
                title: 'Discovery',
                desc: 'This stage enables us to gain an initial understanding of the project and business objectives. It involves reviewing initial data, conducting stakeholder interviews.',
                bgColor: 'bg-secondary'
            },
            {
                id: 2,
                title: 'Research',
                desc: "This stage helps to get insights into the product, conducting market research, analyzing the competitors, identifying users' pain points, and determining the analysis plan.",
                bgColor: 'bg-[#F1FFCF]'
            },
            {
                id: 3,
                title: 'Analysis',
                desc: "This step involves applying design thinking to structure the project. It's akin to piecing together a puzzle, transforming unclear assumptions into a cohesive and comprehensive picture.",
                bgColor: 'bg-secondary'
            },
        ]
    },
    {
        img: '/icons/ui_design.svg',
        title: 'UI Design',
        skills: [
            'low-fi wireframes',
            'high-fi wireframes',
            'UI design',
            'high-fi wireframes',
            'Quantitative research',
            'Competitors research',
            'JTBD',
            'Analysis',
            'Ideas Conceptual Map',
            'Development specifications',
            'User Flows',
            'Empathy map',
            'CJM'
        ],
        cards: [
            {
                id: 4,
                title: 'Implementation',
                desc: 'At this stage, we bring the design to life by creating the visual components of the interface. Building on the established UX principles.',
                bgColor: 'bg-secondary'
            },
            {
                id: 5,
                title: 'Simplicity',
                desc: "This step involves applying design thinking to structure the project. It's akin to piecing together a puzzle, transforming unclear assumptions into a cohesive and comprehensive picture.",
                bgColor: 'bg-[#F1FFCF]'
            }
        ]
    },
    {
        img: '/icons/testing.svg',
        title: 'Testing',
        skills: [
            'User survey & results analysis',
            'Concept validation',
            'A/B testing',
            'Results Report',
            'Quantitative research',
            'Competitors research',
            'JTBD',
            'Analysis',
            'Improvements Implementation',
            'information architecture',
            'User Flows',
            'Empathy map',
            'CJM'
        ],
        cards: [
            {
                id: 6,
                title: 'Validation',
                desc: "This stage enables us to gain an initial understanding of the project and business objectives. It involves reviewing initial data, conducting stakeholder interviews.",
                bgColor: 'bg-secondary'
            },
            {
                id: 7,
                title: 'Processing',
                desc: "We recommend to our clients the inclusion of validation and user testing services. This approach strengthens the usability of the product and enhances its competitiveness in the market.",
                bgColor: 'bg-[#F1FFCF]'
            }
        ]
    }
]