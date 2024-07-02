import * as React from "react"

const Letter = React.forwardRef(({ letter, font, backgroundColor }, ref) => (
    <div
        ref={ref}
        style={{
            fontFamily: font,
            backgroundColor: backgroundColor
        }}
    >
        {letter}
    </div>
))
Letter.displayName = "Letter"

export { Letter }