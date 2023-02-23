const Box = (props) => {
  //  Write your code here.
  const { text, backgroundColor } = props;
  return (
    <div className={backgroundColor}>
      <p> {text}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="box-container">
    <h1> Boxes </h1>
    <div className="boxes-container">
      <Box text="Small" backgroundColor="box small-box" />>
      <Box text="Medium" backgroundColor="box medium-box" />>
      <Box text="Large" backgroundColor="box large-box" />>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
