import Link from "next/link"
import React from "react"

export default function Profile() {
    return (
        <Link href="https://makenedev.vercel.app" className="myProfile">
            <img
                src="https://github.com/makeneto.png"
                className="profilePic"
                alt="Profile Pic"
            />
            <p>makenedev</p>
        </Link>
    )
}
