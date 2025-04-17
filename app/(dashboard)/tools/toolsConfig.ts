export type Tool = {
    id: string;
    name: string;
    description: string;
    icon: string;
    overview: {
        title: string;
        description: string;
        features: string[];
    };
}

export const toolsConfig: Tool[] = [
    {
        id : "lessonplan",
        name: "Lesson Planner",
        description: "Create lesson plans easily",
        icon: "📚",
        overview: {
            title: "Lesson Plan Generator",
            description: "Simplify your lesson planning process with our intuitive tool.",
            features: [
                "Customize templates for various subjects and grade levels",
                "Integration with curriculum standards",
                "Activity and resource suggestions",
                "Learning objectives and assessment alignment",
                "Time management and pacing guides",
            ],
        }
    },
    {
        id: "quizcreator",
        name: "Quiz Creator",
        description: "Design effective quizzes and assessments",
        icon: "🧪",
        overview: {
            title: "Interactive Quiz Builder",
            description: "Create engaging quizzes and assessments with ease.",
            features: [
                "Multiple question types (MCQ, true/false, short answer)",
                "Automatic grading and feedback options",
                "Customizable difficulty levels",
                "Question banks for easy reuse",
                "Analytics and performance tracking",
            ],
        },
    },
    {
        id: "flashcards",
        name: "Flashcards",
        description: "Create and study flashcards for effective learning",
        icon: "🃏",
        overview: {
            title: "Flashcard Generator",
            description: "Enhance your study sessions with personalized flashcards.",
            features: [
                "Customizable flashcard templates",
                "Integration with spaced repetition algorithms",
                "Image and audio support",
                "Sharing and collaboration options",
                "Progress tracking and analytics",
            ],
        },
    },
    {
        id: "studyplanner",
        name: "Study Planner",
        description: "Organize your study schedule and materials",
        icon: "📅",
        overview: {
            title: "Study Schedule Organizer",
            description: "Plan and manage your study sessions effectively.",
            features: [
                "Customizable study schedules",
                "Integration with calendars and reminders",
                "Resource and material organization",
                "Goal setting and progress tracking",
                "Collaboration features for group study",
            ],
        },
    },
]