import { Suspense } from "react"
import LobbyPage from "."

export const metadata = {
    title: `Gamepad Helper Demo`,
}

export default function Home() {

  return (
    <Suspense><LobbyPage /></Suspense>
  )

}
