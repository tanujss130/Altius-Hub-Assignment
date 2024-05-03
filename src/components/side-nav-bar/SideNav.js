import React from "react";
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
export default function SideNav() {

    const handleClick = (path) => {
        console.log("http://localhost:3000" + path, "clicked");
        // navigate("http://localhost:3000"+path);
    }

    return (
        <div className="side-nav-ui">
            <Drawer
                anchor="left"
                variant="permanent"
            >
                <List>
                    <ListItem onClick={handleClick("/listView")}>
                        <ListItemText primary="Invoices" />
                    </ListItem>
                </List>

            </Drawer>
        </div>
    )
}