import { AppBar, Switch, Toolbar, Typography } from "@mui/material"; 

interface Props {
    swichThemeMode: () => void;
}

export default function Header({ swichThemeMode }: Props){
    return(
        <AppBar position="static" sx={{mb: 2}}>
            <Toolbar>
                <Typography variant="h6">
                E-COMMERCE
                </Typography>

                <Switch defaultChecked color="default" onChange={swichThemeMode}/>
            </Toolbar>
        </AppBar>
    )
}