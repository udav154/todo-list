import * as React from "react";
import { DataGrid, GridActionsCellItem, ruRU, useGridSlotComponentProps } from "@mui/x-data-grid";
import Button from '@mui/material/Button';
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
    dateCreated: randomCreatedDate(),
    dateDone: randomCreatedDate()
  },
  {
    id: 2,
    name: "Nicolas Nicolas Nicolas Nicolas Nicolas Nicolas",
    dateCreated: randomCreatedDate(),
    dateDone: randomCreatedDate()
  },
  {
    id: 3,
    name: "Kate",
    dateCreated: randomCreatedDate(),
    dateDone: randomCreatedDate()
  },
  {
    id: 4,
    name: "Damien",
    dateCreated: randomCreatedDate(),
    dateDone: randomCreatedDate()
  },
  {
    id: 5,
    name: "Nicolas",
    dateCreated: randomCreatedDate(),
    dateDone: randomCreatedDate()
  },
  {
    id: 6,
    name: "Kate",
    dateCreated: randomCreatedDate(),
    dateDone: randomCreatedDate()
  },
  {
    id: 7,
    name: "Nicolas",
    dateCreated: randomCreatedDate(),
    dateDone: randomCreatedDate()
  },
  {
    id: 8,
    name: "Kate",
    dateCreated: randomCreatedDate(),
    dateDone: randomCreatedDate()
  },
  {
    id: 9,
    name: "Damien",
    dateCreated: randomCreatedDate(),
    dateDone: randomCreatedDate()
  },
  {
    id: 10,
    name: "Nicolas",
    dateCreated: randomCreatedDate(),
    dateDone: randomCreatedDate()
  },
  {
    id: 11,
    name: "Kate",
    dateCreated: randomCreatedDate(),
    dateDone: randomCreatedDate()
  }
];

export default function AchiveTable() {
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
      { field: "dateDone", type: "date", width: 130 },
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
            Отменить
          </Button>

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
      <DataGrid
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
