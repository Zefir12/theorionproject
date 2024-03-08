import { useState } from "react"
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import { Button } from "@mantine/core"

export default function MainPage() {
    const [count, setCount] = useState(0)

    return (
      <div className="flex flex-col bg-red-800 h-64 w-64">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <div className="card">
          <Button onClick={() => setCount((count) => count + 1)}>count is {count}</Button>a
        </div>
      </div>
    )
}
