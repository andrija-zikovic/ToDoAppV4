import type { Meta, StoryObj } from '@storybook/react'
import { SortByStageRadioInput } from '@shared/ui'

const meta = {
    title: 'SortByStageRadioInput',
    component: SortByStageRadioInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof SortByStageRadioInput>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        title: 'All',
        stage: 'ALL',
        sortStageBy: () => {},
    },
}
