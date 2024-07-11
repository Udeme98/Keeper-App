import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import notes from "./notes";

const App = () => {
  return (
    <>
      <Header />
      {notes.map((note) => (
        <Note title={note.title} content={note.content} />
      ))}

      <Footer />
    </>
  );
};
export default App;
