import type { Meta, StoryObj } from '@storybook/react'
import { HeaderComponent } from './components/HeaderComponent'

const meta = {
    title: 'HeaderComponent',
    component: HeaderComponent,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof HeaderComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {},
}
