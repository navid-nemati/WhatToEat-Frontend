'use client'

import { Button } from "@mui/material"
import { useState } from "react"
import BoxTest from "./components/box"

export default function TestPage() {

    const [nav, setNav] = useState(false)

    return (
        <div>

            <Button style={{marginTop: "150px"}} variant="outlined" onClick={() => setNav(!nav)}>
                {nav ? 'close' : 'open'}
            </Button>

            <div className={`z-60 fixed p-10 right-0 top-20 w-60 h-20 bg-black/50 transform transition-transform
                duration-300 ${nav ? 'translate-x-0' : 'translate-x-full'}`}>
                    سلاممم
            </div>

            <BoxTest variant="style1">
                <Button>سلام</Button>
            </BoxTest>
        </div>
    )
}