import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Title = (props) => {
  const [flag, setflag] = useState(false);
  const [currVal, setCurVal] = useState({
    title: "",
    field: ""
  });

  const inputFlag = () => {
    setflag(true);
  }

  const InputEvent = (text) => {
    setCurVal((prev) => {
      return {
        ...prev, [text.target.name]: text.target.value
      }
    })
    return null;
  }

  const submitEvent = (event) => {
    event.preventDefault();
    props.submitMethod(currVal);
    setCurVal({
      title: "",
      field: ""
    });
    setflag(false);
    return null;
  }

  return ( 
    <React.Fragment>
      <form onSubmit={submitEvent}>
        {!flag ?
        <TextField id="outlined-basic"
        placeholder="Add a note ..."
        variant="standard"
        InputProps={{ disableUnderline: true }}
        onClick={inputFlag}
        style={{ width: "100%", padding: "20px"}}/>
        : null}

        <div style={{ display: "flex", flexDirection: "column" }}>
          {flag ?
            <TextField
              id="outlined-basic"
              name="title"
              className="title"
              value={currVal.title}
              placeholder="Add title"
              onChange={InputEvent}
              variant="standard"
              autoComplete="off"
              InputProps={{ disableUnderline: true }}
              style={{ padding: "10px 20px" }} />
            : null}

          {flag ? 
          <TextField
          id="outlined-basic"
          name="field"
          className="title-body"
          placeholder="Take a note ..."
          variant="standard"
          value={currVal.field}
          autoComplete="off"
          onChange={InputEvent}
          InputProps={{ disableUnderline: true }}
          style={{ padding: "10px 20px" }} />
          : null}

          <div className="submit-button-body">
            {flag ? 
            <Button
            type="submit"
            // onClick={submitMethod}
            className="submit-button"
            size="small"
            color="success">close
            </Button>
            : null}
          </div>
        </div>
      </form>

    </React.Fragment>
  );
}

export default Title;