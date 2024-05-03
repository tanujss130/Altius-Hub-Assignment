import { Toolbar, Typography, Box, AppBar, styled } from '@mui/material';
export default function ToolbarComponent() {
    const CenteredTypography = styled(Typography)({
        flexGrow: 1,
        textAlign: 'center'
    });
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <CenteredTypography variant="h6" component="div">
                        Altius Hub
                    </CenteredTypography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}