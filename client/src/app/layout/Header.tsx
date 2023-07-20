import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

export default function Header(){
    return(
        <AppBar position="static" sx={{mb: 2}}>
            <Toolbar>
                <Typography variant="h6">
                E-COMMERCE
                </Typography>

                <Switch defaultChecked color="default"/>
            </Toolbar>
        </AppBar>
    )
}