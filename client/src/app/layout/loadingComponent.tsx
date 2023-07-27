import { Backdrop, Box, CircularProgress, LinearProgress, Typography } from "@mui/material";

interface Props{
    message?: string;
}

export default function loadingComponent({message = 'Loading...'}){
    return (
        <Backdrop open={true} invisible={true}>
            <Box display='flex' justifyContent='center' alignItems='center' height='100vh'>
                <CircularProgress  color='secondary'/>
                <Typography variant="h4" sx={{justifyContent: 'center', position: 'fixed', top: '60%'}}>{message}</Typography>
            </Box>
        </Backdrop>
    )
}