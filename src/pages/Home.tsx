import { useState } from 'react'
function Home() {
  const [h, setH] = useState(0);
  const [m, setM] = useState(0);
  const [s, setS] = useState(0);


  const submitTime = async () => {
    const time: number = Date.now() + 1000 * (h * 3600 + m * 60 + s);
    await navigator.clipboard.writeText(window.location.href + "countdown/" + time.toString())
  }
  const submitDate = async () => {
    const time = new Date(Date.now());
    time.setHours(h, m, s, 0);
    await navigator.clipboard.writeText(window.location.href + "/countdown/" + time.getTime());
  }

  return (
    <div>
      <form>
        <label>Hours: </label>
        <input value={h} onChange={(e) => { setH(parseInt(e.target.value)) }}></input>
        <br />
        <label>Minutes: </label>
        <input value={m} onChange={(e) => { setM(parseInt(e.target.value)) }}></input>
        <br />
        <label>Seconds: </label>
        <input value={s} onChange={(e) => { setS(parseInt(e.target.value)) }}></input>
        <br />
      </form>
      <button onClick={submitTime}>Time from now</button>
      <button onClick={submitDate}>Time (24h clock)</button>
    </div>
  )
}

export default Home
