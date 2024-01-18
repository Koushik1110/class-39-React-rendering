

const Greeter = ({ fName, msg, children }) => {
  // console.log(props.fName);
  return (
    <div>
      <h1>{msg}, {fName}</h1>
      <div>
        <P>{children}</P>
      </div>
      </div>
  )
}

export default Greeter