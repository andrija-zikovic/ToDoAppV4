import type { Meta, StoryObj } from '@storybook/react'
import { SelectInput } from '@shared/ui'

const meta = {
    title: 'SelectInput',
    component: SelectInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof SelectInput>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        label: 'Change Stage',
        name: 'select',
        value: 'option1',
    },
}
