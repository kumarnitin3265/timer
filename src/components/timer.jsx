import { useEffect, useRef, useState } from "react"

function Timer(){

    const [count, setCount] = useState(0);
    const [isContinue, setIsContinue] = useState(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        if(isContinue){
            intervalRef.current = setInterval(() => {
                setCount((prev) => (prev+1)%10);
            }, 1000);
        }

        return () => clearInterval(intervalRef.current);
    }, [isContinue]);

    const handleStart = () => {
        setIsContinue(true);
    }

    const handleStop = () => {
        setIsContinue(false);
        clearInterval(intervalRef.current);
    }

    const handleReset = () => {
        setCount(0);
    }

    return (
        <>
            <div style={{marginLeft: "600px"}}>
                <h4>Timer: {count}</h4>
                <button onClick={handleStart} style={{backgroundColor: "grey"}}>Start</button>
                <button onClick={handleStop} style={{backgroundColor: "red"}}>Stop</button>
                <button onClick={handleReset} style={{backgroundColor: ""}}>Reset</button>
            </div>
        </>
    )
}

export default Timer;