import React from "react"

const TitleLabel: React.FC<{label: string}> = ({label}) => {
    return (
        <p className="bg-secondary bg-opacity-10 w-max py-2 px-10 rounded-xl mx-auto text-xl text-label font-bai-jamjuree">
            {label}
        </p>
    )
}

export default TitleLabel