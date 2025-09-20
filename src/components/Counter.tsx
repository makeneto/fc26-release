import useCounter from "@/hooks/useCounter"
import React from "react"

export default function Counter() {
    const { timeLeft } = useCounter()

    return (
        <div className="time_container">
            <div className="timer">
                <div>
                    <p>Dias</p>
                    <h1>{timeLeft.days}</h1>
                </div>

                <div className="timer_counter">
                    <div>
                        <p className="timerText">Horas</p>
                        <h1>{String(timeLeft.hours).padStart(2, "0")}</h1>
                    </div>
                    <span>:</span>
                    <div>
                        <p className="timerText">Minutos</p>
                        <h1>{String(timeLeft.minutes).padStart(2, "0")}</h1>
                    </div>
                    <span>:</span>
                    <div>
                        <p className="timerText">Segundos</p>
                        <h1>{String(timeLeft.seconds).padStart(2, "0")}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
