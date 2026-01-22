import { ComponentExample } from "@/components/component-example"
import Features from "@/components/features-1"
import { ModeToggle } from "@/components/mode-toggle"
import { ThemeProvider } from "@/components/theme-provider"

export function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="fixed top-4 right-4 z-50">
        <ModeToggle />
      </div>
      <ComponentExample />
      <Features />
    </ThemeProvider>
  )
}

export default App