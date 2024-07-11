import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./Note";
import notes from "./notes";

const App = () => {
  const someNotes = notes.map((note) => (
    <Note key={note.key} title={note.title} content={note.content} />
  ));

  return (
    <>
      <Header />
      {someNotes}
      <Footer />
    </>
  );
};
export default App;
