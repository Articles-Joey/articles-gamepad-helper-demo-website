import { Suspense, useState } from "react";
import Y from "@articles-media/articles-gamepad-helper/dist/img/Xbox UI/Y.svg"
import dynamic from "next/dynamic";
import ArticlesButton from "@/components/UI/Button";

const GamepadKeyboard = dynamic(() =>
    import('@articles-media/articles-gamepad-helper/GamepadKeyboard'),
    { ssr: false }
);

export default function DocsGamepadKeyboard() {

    const [gamepadKeyboardVisible, setGamepadKeyboardVisible] = useState(false)

    return (
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
                            // setGamepadKeyboardVisible(false)
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
    )
}