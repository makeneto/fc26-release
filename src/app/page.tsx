"use client"

import Counter from "@/components/Counter"
import Profile from "@/components/Profile"
import useCounter from "@/hooks/useCounter"
import Link from "next/link"

export default function Home() {
    const { finished } = useCounter()
    const gameLink =
        "https://store.playstation.com/pt-pt/product/UP0006-PPSA27360_00-26STANDARDBUNDLE"

    return (
        <main className="fc-bg">
            <Profile />

            <section>
                <img
                    src="/fc-cover.webp"
                    alt="Fc cover"
                    className="release_cover"
                />

                <div className="release_content">
                    <Link href={gameLink}>EA SPORTS FC™ 26</Link>
                    <p className="time_intro">
                        {finished
                            ? "Já disponível 🎉"
                            : "Disponível para jogar dentro de:"}
                    </p>
                    <Counter />
                    <p className="releaseDate">
                        Data prevista do lançamento: 26/09/2025
                    </p>
                </div>
            </section>
        </main>
    )
}
