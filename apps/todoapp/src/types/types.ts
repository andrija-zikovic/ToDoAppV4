type TTodo = {
    id: string
    description: string
    stage: string
    created_at: number
}

type TUpdateFormData = {
    id: string
    description?: string
    stage?: string
}

type IForm = {
    event: React.FormEvent<HTMLFormElement>
}

export type { TTodo, TUpdateFormData, IForm }
