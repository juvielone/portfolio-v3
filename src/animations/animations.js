
// Container
export const container = {
    show: {
        transition: {
            staggerChildren: 0.35,
        },
    },
};

// Child fade Y-AXIS
export const yItem = {
    hidden: { opacity: 0, y: 100 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1.6,
        },
    },
    exit: {
        opacity: 0,
        y: -200,
        transition: {
            ease: "easeInOut",
            duration: 0.8,
            delay: 1
        },
    },
};

// Child fade X-AXIS

export const xItem = {
    hidden: { opacity: 0, x: 100 },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1.6,
        },
    },
    exit: {
        opacity: 0,
        y: -200,
        transition: {
            ease: "easeInOut",
            duration: 0.8,
        },
    },
};