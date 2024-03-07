import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const Header = ({ text }) => (
  <h1>{text}</h1>
)

const Anecdote = ({ text, voteCount }) => (
  <>
    <AnecdoteText text={text}></AnecdoteText>
    <VoteCount voteCount={voteCount}></VoteCount>
  </>
)

const VoteCount = ({ voteCount }) => (
  <p>has {voteCount} vote{voteCount === 1 ? '' : 's'}</p>
)

const AnecdoteText = ({ text }) => (
  <p>{text}</p>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [anecdoteVotes, setAnecdoteVotes] = useState(new Array(anecdotes.length).fill(0))

  const handleNextClick = () => {
    const next = Math.floor(Math.random() * (anecdotes.length))
    setSelected(next)
  }

  const handleVoteClick = () => {
    const newVotes = [...anecdoteVotes]
    newVotes[selected] += 1
    setAnecdoteVotes(newVotes)
  }

  return (
    <div>
      <Header text='Anecdote of the day'></Header>
      <Anecdote text={anecdotes[selected]} voteCount={anecdoteVotes[selected]}></Anecdote>
      <Button handleClick={handleVoteClick} text='vote'></Button>
      <Button handleClick={handleNextClick} text='next anecdote'></Button>
      <Header text='Anecdote with the most votes'></Header>
      <Anecdote text={anecdotes[anecdoteVotes.indexOf(Math.max(...anecdoteVotes))]} voteCount={Math.max(...anecdoteVotes)}></Anecdote>
    </div>
  )
}

export default App