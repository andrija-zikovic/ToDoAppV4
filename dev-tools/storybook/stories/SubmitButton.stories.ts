import type { Meta, StoryObj } from '@storybook/react'
import { SubmitButton } from '@shared/ui'

const meta = {
    title: 'SubmitButton',
    component: SubmitButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof SubmitButton>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        isSubmitting: false,
    },
}
