//     border: "12px solid #483d8b",

import * as React from "react";
import { DataGrid, GridActionsCellItem, ruRU, useGridSlotComponentProps } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  randomCreatedDate,
} from "@mui/x-data-grid-generator";
import Pagination from '@mui/material/Pagination';
import { makeStyles } from '@mui/styles';

const initialRows = [
  {
    id: 1,
    name: "Damien",
    dateCreated: randomCreatedDate()
  },
  {
    id: 2,
    name: "Nicolas Nicolas Nicolas Nicolas Nicolas Nicolas",
    dateCreated: randomCreatedDate()
  },
  {
    id: 3,
    name: "Kate",
    dateCreated: randomCreatedDate()
  },
  {
    id: 4,
    name: "Damien",
    dateCreated: randomCreatedDate()
  },
  {
    id: 5,
    name: "Nicolas",
    dateCreated: randomCreatedDate()
  },
  {
    id: 6,
    name: "Kate",
    dateCreated: randomCreatedDate()
  },
  {
    id: 7,
    name: "Nicolas",
    dateCreated: randomCreatedDate()
  },
  {
    id: 8,
    name: "Kate",
    dateCreated: randomCreatedDate()
  },
  {
    id: 9,
    name: "Damien",
    dateCreated: randomCreatedDate()
  },
  {
    id: 10,
    name: "Nicolas",
    dateCreated: randomCreatedDate()
  },
  {
    id: 11,
    name: "Kate",
    dateCreated: randomCreatedDate()
  }
];

export default function TodoTable() {
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
      {
        field: "actions",
        type: "actions",
        width: 80,
        getActions: (params) => [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={deleteUser(params.id)}
          />
        ]
      }
    ],
    [deleteUser]
  );
  ///////////////////////////////////////////

  const useStyles = makeStyles({
    root: {
      display: 'flex',
    },
  });

  function CustomPagination() {
    const { state, apiRef } = useGridSlotComponentProps();
    const classes = useStyles();

    return (
      <Pagination
        className={classes.root}
        color="secondary"
        count={state.pagination.pageCount}
        page={state.pagination.page + 1}
        onChange={(event, value) => apiRef.current.setPage(value - 1)}
      />
    );
  }

  ///////////////////////////////////

  return (
    <div style={{ height: "81%", width: "90%", boxShadow: "3px -1px 32px 6px rgba(34, 60, 80, 0.2)" }}>
      <DataGrid checkboxSelection
        columns={columns}
        rows={rows}
        page={page}
        onPageChange={(newPage) => setPage(newPage)}
        pageSize={9}
        rowsPerPageOptions={[5]}
        components={{
          Pagination: CustomPagination,
        }}
        disableColumnMenu={true}
      //  localeText={ruRU.props.MuiDataGrid.localeText}
      />
    </div>
  );
}
