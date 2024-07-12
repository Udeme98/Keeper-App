import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./Note";
import notes from "./notes";
import Todo from "./components/Todo";

const App = () => {
  // const someNotes = notes.map((note) => (
  //   <Note key={note.key} title={note.title} content={note.content} />
  // ));

  return (
    <>
      {/* <Header />
      {someNotes}
      <Footer /> */}
      <Todo />
    </>
  );
};
export default App;
