import type { Meta, StoryObj } from '@storybook/react'
import { InfoMessage } from '@shared/ui'

const meta = {
    title: 'InfoMessage',
    component: InfoMessage,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof InfoMessage>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        message: 'This is an info message',
        type: 'success',
    },
}
