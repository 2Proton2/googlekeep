import React, { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Title from "./Title";
import Allnotes from "./Allnotes";
import "./App.css"

const App = () => {
  const [noteArr, setNoteArr] = useState([]);

  const submitMethod = (note) => {
    const flag = Object.keys(note).some((property) => {
      return (note[property].length === 0);
    })
    if(!flag){
      setNoteArr((prev) => {
        return [...prev, note];
      })
    } else {
      alert("Enter all required fields to save the note")
    }
    return null;
  }

  const deleteMethod = (clickedID) => {
    setNoteArr((prev) => {
      return prev.filter((element, id) => {
        return id !== clickedID;
      })
    })
    return null;
  }
  return (
    <React.Fragment>
      <div className="main">
        <Nav className="Nav one"/>
        <div className="note-main-body two">
          <Title submitMethod={submitMethod} className="title-body"/>
        </div>
        <div className="note-main-elements three">
          {
            noteArr.map((each, index) => {
              return (
              <React.Fragment>
                  <Allnotes key={index} deleteMethod={deleteMethod} id={index} className="each-note" title={each.title} field={each.field}/>
              </React.Fragment>);
            })
          }
        </div>
        
        <Footer className="footer four"/>
      </div>
    </React.Fragment>
  );
}

export default App;