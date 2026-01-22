"use client"
import topLevelComponents from "@/components/constants/topLevelComponents"
import ArticlesButton from "@/components/UI/Button"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

import LB from "@articles-media/articles-gamepad-helper/dist/img/Xbox UI/icons8-xbox-lb-96.png"
import A from "@articles-media/articles-gamepad-helper/dist/img/Xbox UI/A.svg"
import Y from "@articles-media/articles-gamepad-helper/dist/img/Xbox UI/Y.svg"

import { usePieMenuStore } from "@articles-media/articles-gamepad-helper"

// const GamepadKeyboard = dynamic(() =>
//     import('@articles-media/articles-dev-box').then(module => module).GamepadKeyboard,
//     { ssr: false }
// );
const GamepadKeyboard = dynamic(() =>
    import('@articles-media/articles-gamepad-helper/GamepadKeyboard'),
    { ssr: false }
);

// const GamepadPreview = dynamic(() =>
//     import('@articles-media/articles-dev-box').then(module => module).GamepadPreview,
//     { ssr: false }
// );
const GamepadPreview = dynamic(() =>
    import('@articles-media/articles-gamepad-helper/GamepadPreview'),
    { ssr: false }
);

const PieKeyboard = dynamic(() =>
    import('@articles-media/articles-gamepad-helper/PieKeyboard'),
    { ssr: false }
);

// import { PieMenu } from "@articles-media/articles-gamepad-helper"
const PieMenu = dynamic(() =>
    import('@articles-media/articles-gamepad-helper/PieMenu'),
    { ssr: false }
);

import { Suspense, useState } from "react"
import { useStore } from "@/hooks/useStore"
import dynamic from "next/dynamic"

export default function PageContent() {

    const searchParams = useSearchParams()
    const searchParamsObject = Object.fromEntries(searchParams.entries())
    const { component } = searchParamsObject

    const darkMode = useStore((state) => state.darkMode)
    const toggleDarkMode = useStore((state) => state.toggleDarkMode)

    const setShowInfoModal = useStore((state) => state.setShowInfoModal)
    const setShowSettingsModal = useStore((state) => state.setShowSettingsModal)
    const setShowCreditsModal = useStore((state) => state.setShowCreditsModal)

    const [pieMenuKeyboardInput, setPieMenuKeyboardInput] = useState("")

    const [pieMenuDualMode, setPieMenuDualMode] = useState(false)

    const [ gamepadKeyboardVisible , setGamepadKeyboardVisible ] = useState(false)

    const pieMenuVisible = usePieMenuStore((state) => state.visible)

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
                            <div>

                                {/* <Suspense> */}
                                    <PieMenu
                                        options={[
                                            {
                                                label: 'Settings',
                                                icon: 'fad fa-cog',
                                                callback: () => {
                                                    setShowSettingsModal(prev => !prev)
                                                }
                                            },
                                            {
                                                label: 'Go Back',
                                                icon: 'fad fa-arrow-left',
                                                callback: () => {
                                                    window.history.back()
                                                }
                                            },
                                            {
                                                label: 'Credits',
                                                icon: 'fad fa-info-circle',
                                                callback: () => {
                                                    setShowCreditsModal(true)
                                                }
                                            },
                                            {
                                                label: 'Game Launcher',
                                                icon: 'fad fa-gamepad',
                                                callback: () => {
                                                    window.location.href = 'https://games.articles.media';
                                                }
                                            },
                                            {
                                                label: `${darkMode ? "Light" : "Dark"} Mode`,
                                                icon: 'fad fa-palette',
                                                callback: () => {
                                                    toggleDarkMode()
                                                }
                                            }
                                        ]}
                                        onFinish={(event) => {
                                            console.log("Event", event)
                                            if (event.callback) {
                                                event.callback()
                                            }
                                        }}
                                    />
                                {/* </Suspense> */}

                                <div className="mb-3">

                                    <h2>PieMenu</h2>
                                    <div>{pieMenuVisible ? "Visible" : "Not Visible"}</div>
                                    <p>The PieMenu component is used to create a circular menu interface...</p>

                                    <div className="d-flex align-items-center">
                                        <img className="me-3" src={LB.src} />
                                        <div> Press the <b>LB</b> button to open the Pie Menu.</div>
                                    </div>

                                    <ul>
                                        <li><b>props.options</b>: An array of menu items to display in the pie menu.</li>
                                        <li><b>props.onFinish</b>: A callback function that is called when a menu item is selected.</li>
                                        <li><b>props.onCancel</b>: A callback function that is called when the pie menu is canceled.</li>
                                        <li><b>props.keyboard</b>: 123.</li>
                                    </ul>

                                </div>

                                <div>
                                    <h2>usePieMenuStore</h2>
                                    <p>The PieMenu component is used to create a circular menu interface...</p>
                                </div>

                            </div>
                        }

                        {component === 'PieKeyboard' &&
                            <div>

                                <Suspense>
                                    <PieKeyboard
                                        keyboardMode={true}
                                        dual={pieMenuDualMode}
                                        value={pieMenuKeyboardInput}
                                        allowDualSwitching={true}
                                        onClear={() => setPieMenuKeyboardInput("")}
                                        onFinish={(action) => {

                                            // One mode to return new state, one to return only action

                                            console.log(action)
                                            // setPieMenuKeyboardInput(pieMenuKeyboardInput + action.label)
                                            setPieMenuKeyboardInput(action)

                                        }}
                                    />
                                </Suspense>

                                <div className="mb-3">

                                    <h2>PieKeyboard</h2>
                                    <div>{pieMenuVisible ? "Visible" : "Not Visible"}</div>
                                    <p>The PieMenu component is used to capture user input via a circular menu interface.</p>

                                    <input
                                        type="text"
                                        className="form-control mb-3"
                                        placeholder="Selected Keyboard Input"
                                        value={pieMenuKeyboardInput}
                                        readOnly
                                    />

                                    <div className="d-flex align-items-center">
                                        <img className="me-3" src={LB.src} />
                                        <div> Press the <b>LB</b> button to open the Pie Menu.</div>
                                    </div>

                                    <ul>
                                        <li><b>props.options</b>: An array of menu items to display in the pie menu.</li>
                                        <li><b>props.onFinish</b>: A callback function that is called when a menu item is selected.</li>
                                        <li><b>props.onCancel</b>: A callback function that is called when the pie menu is canceled.</li>
                                        <li><b>props.keyboard</b>: 123.</li>
                                        <li><b>props.allowDualSwitching</b>: Allows enabling and disabling of dual mode via user input.</li>
                                        <li>
                                            <b>props.dual</b>:
                                            <ArticlesButton small className="ms-2" onClick={() => setPieMenuDualMode(prev => !prev)}>
                                                {pieMenuDualMode ? "Enabled" : "Disabled"}
                                            </ArticlesButton>
                                        </li>
                                    </ul>

                                </div>

                                <div>
                                    <h2>usePieMenuStore</h2>
                                    <p>The PieMenu component is used to create a circular menu interface...</p>
                                </div>

                            </div>
                        }


                        {component === 'GamepadKeyboard' &&
                            <div>

                                {/* <Suspense>
                                    
                                </Suspense> */}

                                <div className="mb-3">

                                    <h2>GamepadKeyboard</h2>

                                    <ArticlesButton
                                        className="mb-3"
                                        onClick={() => {
                                            setGamepadKeyboardVisible(true)
                                        }}
                                    >
                                        <img className="me-2" src={Y.src} />
                                        Open Gamepad Keyboard
                                    </ArticlesButton>

                                    <Suspense>
                                        <GamepadKeyboard
                                            onFinish={(value) => {
                                                console.log("value", value)
                                                setGamepadKeyboardVisible(false)
                                            }}
                                            onCancel={(value) => {
                                                console.log("onCancel", value)
                                            }}
                                            // active={gamepadKeyboardVisible}
                                            // showPreview={true}
                                            // controllerState={}
                                        />
                                    </Suspense>

                                    {/* <div>{pieMenuVisible ? "Visible" : "Not Visible"}</div> */}
                                    {/* <p>The PieMenu component is used to capture user input via a circular menu interface.</p> */}

                                    {/* <input
                                        type="text"
                                        className="form-control mb-3"
                                        placeholder="Selected Keyboard Input"
                                        value={pieMenuKeyboardInput}
                                        readOnly
                                    />

                                    <div className="d-flex align-items-center">
                                        <img className="me-3" src={LB.src} />
                                        <div> Press the <b>LB</b> button to open the Pie Menu.</div>
                                    </div>

                                    <ul>
                                        <li><b>props.options</b>: An array of menu items to display in the pie menu.</li>
                                        <li><b>props.onFinish</b>: A callback function that is called when a menu item is selected.</li>
                                        <li><b>props.onCancel</b>: A callback function that is called when the pie menu is canceled.</li>
                                        <li><b>props.keyboard</b>: 123.</li>
                                        <li><b>props.allowDualSwitching</b>: Allows enabling and disabling of dual mode via user input.</li>
                                        <li>
                                            <b>props.dual</b>:
                                            <ArticlesButton small className="ms-2" onClick={() => setPieMenuDualMode(prev => !prev)}>
                                                {pieMenuDualMode ? "Enabled" : "Disabled"}
                                            </ArticlesButton>
                                        </li>
                                    </ul> */}

                                </div>

                                {/* <div>
                                    <h2>usePieMenuStore</h2>
                                    <p>The PieMenu component is used to create a circular menu interface...</p>
                                </div> */}

                            </div>
                        }

                        {component === 'GamepadPreview' &&
                            <div>

                                <Suspense>
                                    
                                </Suspense>

                                <div className="mb-3">

                                    <h2>GamepadPreview</h2>

                                    <GamepadPreview
                                        showPreview={true}
                                        // controllerState={}
                                    />

                                    {/* <div>{pieMenuVisible ? "Visible" : "Not Visible"}</div> */}
                                    {/* <p>The PieMenu component is used to capture user input via a circular menu interface.</p> */}

                                    {/* <input
                                        type="text"
                                        className="form-control mb-3"
                                        placeholder="Selected Keyboard Input"
                                        value={pieMenuKeyboardInput}
                                        readOnly
                                    />

                                    <div className="d-flex align-items-center">
                                        <img className="me-3" src={LB.src} />
                                        <div> Press the <b>LB</b> button to open the Pie Menu.</div>
                                    </div>

                                    <ul>
                                        <li><b>props.options</b>: An array of menu items to display in the pie menu.</li>
                                        <li><b>props.onFinish</b>: A callback function that is called when a menu item is selected.</li>
                                        <li><b>props.onCancel</b>: A callback function that is called when the pie menu is canceled.</li>
                                        <li><b>props.keyboard</b>: 123.</li>
                                        <li><b>props.allowDualSwitching</b>: Allows enabling and disabling of dual mode via user input.</li>
                                        <li>
                                            <b>props.dual</b>:
                                            <ArticlesButton small className="ms-2" onClick={() => setPieMenuDualMode(prev => !prev)}>
                                                {pieMenuDualMode ? "Enabled" : "Disabled"}
                                            </ArticlesButton>
                                        </li>
                                    </ul> */}

                                </div>

                                {/* <div>
                                    <h2>usePieMenuStore</h2>
                                    <p>The PieMenu component is used to create a circular menu interface...</p>
                                </div> */}

                            </div>
                        }

                    </div>
                }

            </div>

        </div>
    )
}