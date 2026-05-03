import { useEffect, useState } from "react"

import './CountDown.css'
import { useParams } from "react-router-dom";
function CountDown() {
  const [endTime] = useState<number>(() => {
    const { endTime } = useParams();
    return endTime ? parseInt(endTime, 10) : 0;
  });
  const [remaining, setRemaining] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      const diff = endTime - Date.now();
      setRemaining(diff > 0 ? diff : 0);
    }, 1000);

    return () => clearInterval(id);
  }, [endTime]);

  const totalSeconds = Math.floor(remaining / 1000);

  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;

  return (
    <h1 className="clock">{h}:{m}:{s}</h1>
  );
}

export default CountDown
