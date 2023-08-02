import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material"; 
import { Link, NavLink } from "react-router-dom";
import { useStoreContext } from "../context/StoreContext";

interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
}

const midLink = [
    {title: 'catalog', path: '/catalog'},
    {title: 'about', path: '/about'},
    {title: 'contact', path: '/contact'},

]

const rightLink = [
    {title: 'login', path: '/login'},
    {title: 'register', path: '/register'}
]


const navStyle = {
    color:'inherit', 
    typography:'h6',
    textDecoration: 'none',
    '&:hover': {
        color: 'grey.500'
    },
    '&.active': {
        color: 'warning.light'
    }
}

export default function Header({ darkMode, handleThemeChange }: Props){
    const {basket} = useStoreContext();
    const itemCount = basket?.items.reduce((sum, item) => sum + item.quantity, 0)

    return(
        <AppBar position="static" sx={{mb: 2}}>
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItem: 'center'}}>

                <Box display='flex' alignItems='center'>
                    <Typography variant="h6" component={NavLink} 
                        to='/'
                        sx={navStyle}
                    >
                        E-COMMERCE
                    </Typography>
                    <Switch color="default" checked={darkMode} onChange={handleThemeChange}/>
                </Box>

                <Box display='flex' alignItems='center'>
                    <List sx={{display: 'flex'}}>
                        {midLink.map(({title, path}) => (
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={navStyle}
                            >
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                    </List>
                </Box>

                <Box display='flex' alignItems='center'>
                    <IconButton component={Link} to='/basket' size='large' edge='start' color='inherit' sx={{mr:2}}>
                            <Badge badgeContent={itemCount} color='secondary'> 
                                <ShoppingCart/>
                            </Badge>
                    </IconButton>
                    <List sx={{display: 'flex'}}>
                        {rightLink.map(({title, path}) => (
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={navStyle}
                            >
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                    </List>
                </Box>

            </Toolbar>
        </AppBar>
    )
}