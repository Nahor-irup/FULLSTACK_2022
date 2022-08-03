import { useState } from 'react'

const Button = (props) => {
  const { text } = props
  return (
    <button onClick={props.handleClick}>{text}</button>
  )
}
const StatisticLine = (props) => {
  const { text, value } = props
  return (
    <div>{text} {value}</div>
  )
}

const Statistics = (props) => {
  const { good, neutral, bad } = props

  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <p>No feedback given</p>
    )
  } else {
    return (
      <div>
        <StatisticLine text={"good"} value={good} />
        <StatisticLine text={"neutral"} value={neutral} />
        <StatisticLine text={"bad"} value={bad} />
        <StatisticLine text={"all"} value={good + neutral + bad} />
        <StatisticLine text={"average"} value={(good + neutral * 0 + bad * -1) / (good + neutral + bad)} />
        <StatisticLine text={"positive"} value={good / (good + neutral + bad) * 100 + " %"} />
      </div>
    )
  }

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
      <Statistics good={good} neutral={neutral} bad={bad} />


    </div>
  )
}

export default App