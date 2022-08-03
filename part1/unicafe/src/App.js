import { useState } from 'react'

const Button = (props) => {
  const { text } = props
  return (
    <button onClick={props.handleClick}>{text}</button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => {
    setGood(good + 1);
  }
  const increaseNeutral = () => {
    setNeutral(neutral + 1)
  }
  const increaseBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={increaseGood} text={"good"} />
      <Button handleClick={increaseNeutral} text={"neutral"} />
      <Button handleClick={increaseBad} text={"bad"} />
      <h1>statistics</h1>
      <p>
        good {good} <br></br>
        neutral {neutral} <br></br>
        bad {bad} <br></br>
        all {good + neutral + bad} <br></br>
        average {(good + neutral * 0 + bad * -1) / (good + neutral + bad)} <br></br>
        positive {good / (good + neutral + bad) * 100}%
      </p>

    </div>
  )
}

export default App