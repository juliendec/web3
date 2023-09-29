
const Button = ({onClick, text}) => (
    <button onClick={onClick} className={text}>
      {text}
    </button>
  );
  
  export default Button;
  