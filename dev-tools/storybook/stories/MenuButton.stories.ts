import type { Meta, StoryObj } from '@storybook/react'
import { MenuButton } from '@shared/ui'

const meta = {
    title: 'MenuButton',
    component: MenuButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        setDropDownVisibility: { control: 'function' },
        dropDownVisibility: { control: 'boolean' },
    },
} satisfies Meta<typeof MenuButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        setDropDownVisibility: (visibility: boolean) => console.log(visibility),
        dropDownVisibility: false,
    },
}
