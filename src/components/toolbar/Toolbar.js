import { Toolbar, Typography, Box, AppBar } from '@mui/material';
export default function ToolbarComponent() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Altius Hub
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}