import { useState, useEffect } from 'react'

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined
    })
    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        handleResize()
        // Listen the event and save into the memory
        window.addEventListener("resize", handleResize)
        // Clean the memory by return the event lintener
        return () => window.addEventListener("resize", handleResize)
    }, [])

    return (
        windowSize
    )
}

export default useWindowSize