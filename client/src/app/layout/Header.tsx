import { AppBar, Switch, Toolbar, Typography } from "@mui/material"; 

interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
}

export default function Header({ darkMode, handleThemeChange }: Props){
    return(
        <AppBar position="static" sx={{mb: 2}}>
            <Toolbar>
                <Typography variant="h6">
                    E-COMMERCE
                </Typography>

                <Switch color="default" checked={darkMode} onChange={handleThemeChange}/>
            </Toolbar>
        </AppBar>
    )
}