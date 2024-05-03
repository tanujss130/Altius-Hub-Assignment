import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { spacing } from '@mui/system';
const columns = [

    { field: 'Id', headerName: 'ID', width: 70 },
    { field: 'Date', headerName: 'Date', width: 130 },
    { field: 'InvoiceNumber', headerName: 'InvoiceNumber', width: 130, type: "number" },
    { field: 'CustomerName', headerName: 'CustomerName', width: 130 },
    { field: 'BillingAddress', headerName: 'BillingAddress', width: 130 },
    { field: 'ShippingAddress', headerName: 'ShippingAddress', width: 130 },
    { field: 'GSTIN', headerName: 'GSTIN', width: 130 },
    { field: 'Items', headerName: 'Items', width: 130 },
    { field: 'BillSundrys', headerName: 'BillSundrys', width: 130 },
    { field: 'TotalAmount', headerName: 'TotalAmount', width: 130 },

];
const handleAddClick = () => {
    console.log("clicked 2");
}

export default function ListView() {

    return (
        <>
            <Button variant="contained" sx={{ mx: 'auto', width: 200 }} onClick={handleAddClick("/InvoiceDetailComponent/0")}>Add</Button>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    // rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                />
            </div>
        </>
    );
}
