import Movies from "./components/Movies";
import Greeter from "./components/Greeter";
import SecondGreeter from "./components/SecondGreeter";

// const App = () => {
//   const fullName = "Titas";
//   const message = "Greetings";

//   return (
//     <div>
//       <Greeter fName={fullName} msg={message}>
//         {/* <SecondGreeter fName={fullName} msg={message}/> */}
//         <p>I am the children</p>
//       </Greeter>
//     </div>
//   );
// };

// export default App;

const movies = [
  {
    id: 1,
    title: "The Terminator 2",
    year: 1991,
  },

  {
    id: 2,
    title: "Avatar",
    year: 2009
  },

  {
    id: 3,
    title: "The Shawshank Redemption",
    year: 1994
  },

  {
    id: 4,
    title: "Inception",
    year: 2010
  },

  {
    id: 5,
    title: "Forrest Gump",
    year: 1994
  },
]

const App = () => {
  return <Movies movies={movies}/>;
};

export default App;
