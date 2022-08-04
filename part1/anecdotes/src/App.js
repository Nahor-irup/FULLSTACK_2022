import { useState } from 'react'

const Anecdotes = (props) => {
  const { anecdotes, selected, voteArray } = props

  return (
    <div>
      <h1>Anecdotes of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {voteArray[selected]} votes</p>
    </div>
  )
}

const MostViewd = (props) => {
  const { anecdotes, voteArray } = props

  const highest = Math.max(...voteArray)
  const index = voteArray.indexOf(highest)
  const anc = anecdotes[index]
  if (highest !== 0)
    return (
      <div>
        <h1>Anecdotes with most votes</h1>
        {anc} <br></br>
        has {highest} vote
      </div>
    )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0)

  const varray = Array(anecdotes.length).fill(0);

  const [voteArray, setVoteArray] = useState(varray);

  const handleVote = () => {
    const copy = [...voteArray]
    copy[selected] += 1
    setVoteArray(copy)
  }
  const handleClick = () => {
    setSelected(selected + 1)
  }

  if (selected === 7) {
    setSelected(0)
  } else {
    return (
      <div>
        <Anecdotes anecdotes={anecdotes} selected={selected} voteArray={voteArray} />
        <button onClick={handleVote}>vote</button>
        <button onClick={handleClick}>next anecdote</button>
        <MostViewd anecdotes={anecdotes} voteArray={voteArray} />
      </div>
    )
  }
}

export default App