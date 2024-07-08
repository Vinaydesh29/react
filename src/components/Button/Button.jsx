function Button(props) {
  let f = props.data;

  return <button onClick={() => f("123")}>Submit</button>;
}
export default Button;
