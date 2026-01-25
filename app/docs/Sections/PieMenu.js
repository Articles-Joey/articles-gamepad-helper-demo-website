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
const PieMenu = dynamic(() =>
    import('@articles-media/articles-gamepad-helper/PieMenu'),
    { ssr: false }
);

export default function DocsPieMenu() {

    const darkMode = useStore((state) => state.darkMode)
    const toggleDarkMode = useStore((state) => state.toggleDarkMode)

    const setShowSettingsModal = useStore((state) => state.setShowSettingsModal)
    const setShowCreditsModal = useStore((state) => state.setShowCreditsModal)

    const pieMenuVisible = usePieMenuStore((state) => state.visible)

    return (
        <div>

            <Suspense>
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
                    // onCancel={() => {
                    //     console.log("Pie Menu Canceled")
                    // }}
                />
            </Suspense>

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
                    <li><b>props.menuItemRadius</b>: How far the menu items are from the center of the pie menu. (Defaults to 120)</li>
                </ul>

            </div>

            <div>
                <h2>usePieMenuStore</h2>
                <p>The PieMenu component is used to create a circular menu interface...</p>
            </div>

        </div>
    )
}