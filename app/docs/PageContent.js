"use client"
import topLevelComponents from "@/components/constants/topLevelComponents"
import ArticlesButton from "@/components/UI/Button"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

// import { usePieMenuStore } from "@articles-media/articles-gamepad-helper"
// import { Suspense, useState } from "react"
// import { useStore } from "@/hooks/useStore"
// import dynamic from "next/dynamic"

import DocsPieMenu from "./Sections/PieMenu"
import DocsPieKeyboard from "./Sections/PieKeyboard"
import GamepadKeyboard from "./Sections/GamepadKeyboard"
import GamepadPreview from "./Sections/GamepadPreview"

export default function PageContent() {

    const searchParams = useSearchParams()
    const searchParamsObject = Object.fromEntries(searchParams.entries())
    const { component } = searchParamsObject

    // const darkMode = useStore((state) => state.darkMode)
    // const toggleDarkMode = useStore((state) => state.toggleDarkMode)

    // const setShowInfoModal = useStore((state) => state.setShowInfoModal)
    // const setShowSettingsModal = useStore((state) => state.setShowSettingsModal)
    // const setShowCreditsModal = useStore((state) => state.setShowCreditsModal)

    // const [pieMenuKeyboardInput, setPieMenuKeyboardInput] = useState("")

    // const [pieMenuDualMode, setPieMenuDualMode] = useState(false)

    // const [ gamepadKeyboardVisible , setGamepadKeyboardVisible ] = useState(false)

    // const pieMenuVisible = usePieMenuStore((state) => state.visible)

    return (
        <div className="docs-page">

            <div className="container py-5">

                {!component &&
                    <div>

                        <Link href={"/"} prefetch={false}>
                            <ArticlesButton
                                small
                            >
                                <i className="fas fa-arrow-left me-2"></i>
                                Back to Landing
                            </ArticlesButton>
                        </Link>
                        <h1>Documentation</h1>
                        <p>Please select a component to view its documentation.</p>

                        {topLevelComponents.map((link, index) => (
                            <Link key={index} href={link.link} prefetch={false}>
                                <ArticlesButton
                                    className={`w-100 mb-2`}
                                    small
                                >
                                    <i className="fas fa-play me-2"></i>
                                    {link.name}
                                </ArticlesButton>
                            </Link>
                        ))}

                    </div>
                }

                {component &&
                    <div>

                        <h1>{component} Documentation</h1>
                        <p className="">Here is the documentation for the {component} component.</p>
                        <Link href={"/docs"} prefetch={false}>
                            <ArticlesButton
                                small
                            >
                                <i className="fas fa-arrow-left me-2"></i>
                                Back to Documentation Home
                            </ArticlesButton>
                        </Link>

                        <hr className="my-5" />

                        {component === 'PieMenu' &&
                            <DocsPieMenu />
                        }

                        {component === 'PieKeyboard' &&
                            <DocsPieKeyboard />
                        }


                        {component === 'GamepadKeyboard' &&
                            <GamepadKeyboard />
                        }

                        {component === 'GamepadPreview' &&
                            <GamepadPreview />
                        }

                    </div>
                }

            </div>

        </div>
    )
}