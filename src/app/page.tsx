"use client"

import { useEffect, useState } from "react"

export default function Home() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })
    const [finished, setFinished] = useState(false)

    // Função para calcular a diferença
    const calculateTimeLeft = () => {
        const targetDate = new Date("2025-09-26T00:00:00").getTime()
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
        // Atualiza imediatamente no primeiro render
        setTimeLeft(calculateTimeLeft())

        const interval = setInterval(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <main className="fc-bg">
            <div className="myProfile">
                <img
                    src="https://github.com/makeneto.png"
                    className="profilePic"
                    alt="Profile Pic"
                />
                <p>makenedev</p>
            </div>

            <section>
                <img
                    src="/fc-cover.webp"
                    alt="Fc cover"
                    className="release_cover"
                />

                <div className="release_content">
                    <h3>EA SPORTS FC™ 26</h3>
                    <p className="time_intro">
                        {finished
                            ? "Já disponível 🎉"
                            : "Disponível para jogar dentro de:"}
                    </p>

                    <div className="time_container">
                        <div className="timer">
                            <div>
                                <p>Dias</p>
                                <h1>{timeLeft.days}</h1>
                            </div>

                            <div className="timer_counter">
                                <div>
                                    <p className="timerText">Horas</p>
                                    <h1>
                                        {String(timeLeft.hours).padStart(
                                            2,
                                            "0"
                                        )}
                                    </h1>
                                </div>
                                <span>:</span>
                                <div>
                                    <p className="timerText">Minutos</p>
                                    <h1>
                                        {String(timeLeft.minutes).padStart(
                                            2,
                                            "0"
                                        )}
                                    </h1>
                                </div>
                                <span>:</span>
                                <div>
                                    <p className="timerText">Segundos</p>
                                    <h1>
                                        {String(timeLeft.seconds).padStart(
                                            2,
                                            "0"
                                        )}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="releaseDate">
                        Data prevista do lançamento: 26/09/2025
                    </p>
                </div>
            </section>
        </main>
    )
}
