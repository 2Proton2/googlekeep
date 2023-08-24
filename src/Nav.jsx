import React from "react";
import BatchPredictionRoundedIcon from '@mui/icons-material/BatchPredictionRounded';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import ViewStreamRoundedIcon from '@mui/icons-material/ViewStreamRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';

const Nav = () => {

  return (
    <React.Fragment>
      <div style={{display:"flex", flexDirection: 'row', justifyContent: "space-between", borderBottom: "solid", borderWidth: "thin", borderColor: "gray"}}>
        <div style={{display:"flex", flexDirection: 'row'}}>
          <BatchPredictionRoundedIcon  style={{color: "yellow", fontSize:"60" }}/>
          <h2 style={{color: "gray", paddingLeft: "8px"}}>Google Cloned Keep App</h2>
        </div>
        <div style={{display:"flex", flexDirection: 'row', color: "gray", alignItems: "center"}}>
          <Tooltip title="Refresh"><Button style={{color:"gray"}}><RefreshRoundedIcon style={{padding: "0px 15px 0px"}}/></Button></Tooltip>
          <Tooltip title="List View"><Button style={{color:"gray"}}><ViewStreamRoundedIcon style={{padding: "0px 15px 0px"}}/></Button></Tooltip>
          <Tooltip title="Settings"><Button style={{color:"gray"}}><SettingsRoundedIcon style={{padding: "0px 15px 0px"}}/></Button></Tooltip>
          <Tooltip title="Profile"><Button style={{marginLeft: "150px", color:"green"}}><AccountBoxRoundedIcon fontSize="large"/></Button></Tooltip>
          
        </div>
      </div>
    </React.Fragment>
  );
}

export default Nav;