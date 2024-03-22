type IProps = {
    setDropDownVisibility: (visibility: boolean) => void
    dropDownPath: {
        path: string
        name: string
    }[]
}

const DropDownMenu = ({ setDropDownVisibility, dropDownPath }: IProps) => {
    return (
        <div className="absolute inset-x-0 top-16 z-10 h-auto bg-gray-700 flex flex-col justify-center items-center gap-2 px-2 py-4 border-b-2 border-orange-200 text-3xl w-96">
            {dropDownPath.map((item) => (
                <a
                    key={item.name}
                    href={item.path}
                    className="w-full h-full text-center text-orange-200 p-2 border-b-2 border-orange-200 hover:text-gray-400 hover:border-gray-400 transition-all duration-200 ease-in-out"
                    onClick={() => setDropDownVisibility(false)}
                >
                    {item.name}
                </a>
            ))}
        </div>
    )
}

export default DropDownMenu
