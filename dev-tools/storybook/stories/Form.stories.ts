import type { Meta, StoryObj } from '@storybook/react'

import { TodoForm } from '@shared/ui'

const meta = {
    title: 'TodoForm',
    component: TodoForm,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof TodoForm>

export default meta

type Story = StoryObj<typeof meta>

export const Create: Story = {
    args: {
        onSubmit: () => console.log('submit'),
        onDelete: () => console.log('delete'),
        isSubmitting: false,
        submitType: 'Create',
        errorMessage: '',
    },
}

export const Edit: Story = {
    args: {
        onSubmit: () => console.log('submit'),
        onDelete: () => console.log('delete'),
        isSubmitting: false,
        initData: {
            id: '1234',
            description: 'This is a todo item',
            stage: 'done',
            created_at: 1234567,
        },
        submitType: 'Update',
        errorMessage: '',
    },
}
