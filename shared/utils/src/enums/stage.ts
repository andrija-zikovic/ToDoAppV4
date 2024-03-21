const Stage = {
    ALL: 'all',
    PENDING: 'pending',
    IN_PROGRESS: 'in_progress',
    DONE: 'done',
} as const

type TStage = (typeof Stage)[keyof typeof Stage]
const StageColors = {
    DONE: 'bg-green-500',
    IN_PROGRESS: 'bg-orange-500',
    PENDING: 'bg-default',
} as const

type TStageColors = (typeof StageColors)[keyof typeof StageColors]
const SortStage = {
    NEWEST: 'newest',
    OLDEST: 'oldest',
} as const

type TSortStage = (typeof SortStage)[keyof typeof SortStage]

export { Stage, SortStage, StageColors, TStage, TSortStage, TStageColors }
