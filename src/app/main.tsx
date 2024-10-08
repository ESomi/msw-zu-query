import {createRoot} from 'react-dom/client'
import './index.css'
import Provider from "./providers";

async function initApp() {
  // Move @mswjs worker to lazy import
  const module = await import('@app/apiMockWorker')
  await module.startApiMockWorker()
}

initApp().then(() => {
  createRoot(document.getElementById('root')!).render(
    <Provider />
  )
})