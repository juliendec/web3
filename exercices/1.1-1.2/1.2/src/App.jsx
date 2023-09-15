
const Header = (props) => (
  <div>
      <h1>{props.course}</h1>
  </div>
)

const Content = ({part1,part2,part3,exercises1,exercises2,exercises3}) => {
  return (
    <div>
      <Part part={part1} exercice={exercises1}/>
      <Part part={part2} exercice={exercises2}/>
      <Part part={part3} exercice={exercises3}/>
    </div>
  )
}

const Part = (props) => (
  <div>
      <p>{props.part} {props.exercice}</p>
  </div>
)

const Total = (props) => (
  <div>
      <p>
        Number of exercises {props.total}
      </p>
  </div>
)

const App = () => {
  // const-definitions
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content {...{part1,part2,part3,exercises1,exercises2,exercises3}} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App