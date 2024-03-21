export type TTodo = {
    id: string
    description: string
    stage: string
    created_at: number
}

export type TUpdateFormData = {
    id: string
    description?: string
    stage?: string
}

export type IForm = {
    event: React.FormEvent<HTMLFormElement>
}
