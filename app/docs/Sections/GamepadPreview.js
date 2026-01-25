import { useStore } from "@/hooks/useStore";
import { usePieMenuStore } from "@articles-media/articles-gamepad-helper";
import { Suspense } from "react";

import LB from "@articles-media/articles-gamepad-helper/dist/img/Xbox UI/icons8-xbox-lb-96.png"
import dynamic from "next/dynamic";
// import A from "@articles-media/articles-gamepad-helper/dist/img/Xbox UI/A.svg"

// const PieKeyboard = dynamic(() =>
//     import('@articles-media/articles-gamepad-helper/PieKeyboard'),
//     { ssr: false }
// );

// import { PieMenu } from "@articles-media/articles-gamepad-helper"
const GamepadPreview = dynamic(() =>
    import('@articles-media/articles-gamepad-helper/GamepadPreview'),
    { ssr: false }
);

export default function DocsGamepadPreview() {
    
    return (
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
    )
}