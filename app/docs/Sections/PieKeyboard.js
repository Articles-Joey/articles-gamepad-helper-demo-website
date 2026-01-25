import ArticlesButton from "@/components/UI/Button";
import { usePieMenuStore } from "@articles-media/articles-gamepad-helper";
import { Suspense, useState } from "react";

import LB from "@articles-media/articles-gamepad-helper/dist/img/Xbox UI/icons8-xbox-lb-96.png"
import dynamic from "next/dynamic";

const PieKeyboard = dynamic(() =>
    import('@articles-media/articles-gamepad-helper/PieKeyboard'),
    { ssr: false }
);

export default function DocsPieKeyboard() {

    const [pieMenuKeyboardInput, setPieMenuKeyboardInput] = useState("")

    const [pieMenuDualMode, setPieMenuDualMode] = useState(false)

    const pieMenuVisible = usePieMenuStore((state) => state.visible)

    return (
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
                    {[
                        {
                            propLabel: 'options',
                            description: 'An array of menu items to display in the pie menu.'
                        },
                        {                            propLabel: 'onFinish',
                            description: 'A callback function that is called when a menu item is selected.'
                        },
                        {
                            propLabel: 'onCancel',
                            description: 'A callback function that is called when the pie menu is canceled.'
                        },
                        {
                            propLabel: 'allowDualSwitching',
                            description: 'Allows enabling and disabling of dual mode via user input.'
                        },
                        {
                            propLabel: 'dual',
                            description: (<>
                                Enables or disables dual mode.
                                <ArticlesButton small className="ms-2" onClick={() => setPieMenuDualMode(prev => !prev)}>
                                    {pieMenuDualMode ? "Enabled" : "Disabled"}
                                </ArticlesButton>
                            </>)
                        }
                    ]
                        .map(({ propLabel, description }, index) => (
                            <li key={index}>
                                <b>props.{propLabel}</b>: {description}
                            </li>
                        ))
                    }
                    {/* <li><b>props.options</b>: An array of menu items to display in the pie menu.</li>
                    <li><b>props.onFinish</b>: A callback function that is called when a menu item is selected.</li>
                    <li><b>props.onCancel</b>: A callback function that is called when the pie menu is canceled.</li>
                    <li><b>props.allowDualSwitching</b>: Allows enabling and disabling of dual mode via user input.</li>
                    <li>
                        <b>props.dual</b>:
                        <ArticlesButton small className="ms-2" onClick={() => setPieMenuDualMode(prev => !prev)}>
                            {pieMenuDualMode ? "Enabled" : "Disabled"}
                        </ArticlesButton>
                    </li> */}
                </ul>

            </div>

            <div>
                <h2>usePieMenuStore</h2>
                <p>The PieMenu component is used to create a circular menu interface...</p>
            </div>

        </div>
    )
}