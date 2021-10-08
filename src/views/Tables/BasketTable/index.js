import * as React from "react";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import Button from '@mui/material/Button';
import DeleteIcon from "@mui/icons-material/Delete";
import Tables from "..";
import { initialRows } from "../../../const";
import { stylejs } from "../styles";


const BasketTable = () => {
    const [rows, setRows] = React.useState(initialRows);
    const [page, setPage] = React.useState(0);

    const deleteUser = React.useCallback(
        (id) => () => {
            setRows((prevRows) => prevRows.filter((row) => row.id !== id));
        },
        []
    );

    const columns = React.useMemo(
        () => [
            { field: "name", type: "string", width: 300, },
            { field: "dateCreated", type: "date", width: 130 },
            { field: "dateDeleted", type: "date", width: 130 },
            {
                field: "actions",
                type: "actions",
                width: 170,
                getActions: (params) => [
                    <GridActionsCellItem
                        icon={<DeleteIcon />}
                        label="Delete"
                        onClick={deleteUser(params.id)}
                    />,
                    <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                        style={{ marginLeft: 16 }}
                        onClick={deleteUser(params.id)}
                    >
                        Востановить
                    </Button>

                ]
            }
        ],
        [deleteUser]
    );

    return (
        <div style={{
            ...stylejs.table,
            ...stylejs.table_basket
        }}>
            <DataGrid
                columns={columns}
                rows={rows}
                page={page}
                onPageChange={(newPage) => setPage(newPage)}
                // pageSize={9}
                // rowsPerPageOptions={[5]}
                autoPageSize
                components={{
                    Pagination: Tables.CustomPagination,
                }}
                disableColumnMenu={true}
            />
        </div>
    );
}

export default BasketTable