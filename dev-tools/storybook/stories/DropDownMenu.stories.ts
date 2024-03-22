import type { Meta, StoryObj } from '@storybook/react'
import DropDownMenu from './components/DropDownMenu'

const meta = {
    title: 'DropDownMenu',
    component: DropDownMenu,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof DropDownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        setDropDownVisibility: (visibility: boolean) => console.log(visibility),
        dropDownPath: [
            {
                path: '/home',
                name: 'Home',
            },
            {
                path: '/todo/create',
                name: 'Create',
            },
        ],
    },
}
