import './style.css'
import { checkBackend } from './api.js'

document.querySelector('#app').innerHTML = `
  <div style="padding: 40px; font-family: Arial;">
    <h1>AI Smart Logistics</h1>
    <p id="status">Checking backend...</p>
  </div>
`

async function testBackend() {
  const status = document.querySelector('#status')

  try {
    const data = await checkBackend()
    status.textContent = `Backend Connected ✅ Status: ${data.status}`
  } catch (error) {
    status.textContent = `Backend Connection Failed ❌`
    console.error(error)
  }
}

testBackend()