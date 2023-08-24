import React from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';

const Allnotes = (props) => {

  return (
    <React.Fragment>
      <div className="each-note">
        <Card style={{boxShadow: "5px 5px 20px gray"}}>
          <CardHeader title={props.title} />

          <CardContent>
            <Typography>
              {props.field}
            </Typography>
          </CardContent>

          <div style={{float:"right"}}>
            <Button>
              <Tooltip className="delete-btn" title = "delete"><DeleteIcon onClick={() => props.deleteMethod(props.id)}/></Tooltip>
            </Button>
          </div>
      </Card>
      </div>
      
    </React.Fragment>
  );
}

export default Allnotes;