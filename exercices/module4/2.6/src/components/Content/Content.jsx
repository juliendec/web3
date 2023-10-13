const Part = (props) => (
  <div>
    <p>
      {props.part} {props.exercice}
    </p>
  </div>
);

const Content = ({ parts }) => {
  console.log(parts);
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part.name} exercice={part.exercises} />
      ))}
    </div>
  );
};

export default Content;
