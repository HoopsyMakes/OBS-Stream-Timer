import { useState } from 'react'

function Home() {
  const [h, setH] = useState(0)
  const [m, setM] = useState(0)
  const [s, setS] = useState(0)

  const buildCountdownUrl = (time: number) => {
    const basePath = import.meta.env.BASE_URL.replace(/\/$/, '')
    return `${window.location.origin}${basePath}/countdown/${time}`
  }

  const submitTime = async () => {
    const time = Date.now() + 1000 * (h * 3600 + m * 60 + s)
    await navigator.clipboard.writeText(buildCountdownUrl(time))
  }

  const submitDate = async () => {
    const time = new Date(Date.now())
    time.setHours(h, m, s, 0)
    await navigator.clipboard.writeText(buildCountdownUrl(time.getTime()))
  }

  return (
    <div>
      <form>
        <label>Hours: </label>
        <input value={h} onChange={(e) => { setH(Number(e.target.value) || 0) }}></input>
        <br />
        <label>Minutes: </label>
        <input value={m} onChange={(e) => { setM(Number(e.target.value) || 0) }}></input>
        <br />
        <label>Seconds: </label>
        <input value={s} onChange={(e) => { setS(Number(e.target.value) || 0) }}></input>
        <br />
      </form>
      <button onClick={submitTime}>Time from now</button>
      <button onClick={submitDate}>Time (24h clock)</button>
    </div>
  )
}

export default Home
