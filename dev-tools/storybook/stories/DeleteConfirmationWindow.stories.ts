import type { Meta, StoryObj } from '@storybook/react'

import { DeleteConfirmationWindow } from '@shared/ui'

const meta = {
    title: 'DeleteConfirmationWindow',
    component: DeleteConfirmationWindow,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof DeleteConfirmationWindow>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        onDelete: () => console.log('Confirm'),
        onCancel: () => console.log('Cancel'),
        message: 'Are you sure you want to delete this todo?',
    },
}
