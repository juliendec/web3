const Part = (props) => (
  <div>
      <p>{props.part} {props.exercice}</p>
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

  export default Content  