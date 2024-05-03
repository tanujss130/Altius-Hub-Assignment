import React from "react";
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { useNavigate } from "react-router-dom";
export default function SideNav() {
    const navigate = useNavigate();
    const handleClick = (path) => {
        navigate(path);
    }

    return (
        <div className="side-nav-ui">
            <Drawer
                anchor="left"
                variant="permanent"
            >
                <List>
                    <ListItem onClick={() => handleClick("/listView")}>
                        <ListItemText primary="Invoices" />
                    </ListItem>
                </List>

            </Drawer>
        </div>
    )
}