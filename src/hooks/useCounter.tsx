import React, { useEffect, useState } from "react"

export default function useCounter() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })
    const [finished, setFinished] = useState(false)

    const calculateTimeLeft = () => {
        const targetDate = new Date("2025-09-26T04:00:00").getTime()
        const now = new Date().getTime()
        const difference = targetDate - now

        if (difference <= 0) {
            setFinished(true)
            return { days: 0, hours: 0, minutes: 0, seconds: 0 }
        } else {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24))
            const hours = Math.floor(
                (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            )
            const minutes = Math.floor(
                (difference % (1000 * 60 * 60)) / (1000 * 60)
            )
            const seconds = Math.floor((difference % (1000 * 60)) / 1000)
            return { days, hours, minutes, seconds }
        }
    }

    useEffect(() => {
        setTimeLeft(calculateTimeLeft())

        const interval = setInterval(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return {timeLeft, finished}
}
