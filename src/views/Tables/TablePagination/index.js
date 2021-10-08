import Pagination from '@mui/material/Pagination';
import { useGridSlotComponentProps } from "@mui/x-data-grid";
import { makeStyles } from '@mui/styles';


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

  export default CustomPagination