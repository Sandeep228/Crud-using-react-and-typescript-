import { RootState } from "../../core/store";
import Details from "../../interfaces/PlayerInterface";
import { useDispatch } from "react-redux";
import CardDisplay from "../../components/CardDisplay/CardDisplay";
import { deleteItem, EditPlayerDataRequest } from "../../features/playerInfo";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Grid, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const DataCard = () => {
  const projects = useSelector((state: RootState) => state.data.val);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/form");
  };

  const handleEdit = (value: Details) => {
    dispatch(EditPlayerDataRequest(value));
    navigate("/form");
  };

  const handleDelete = (id: number) => {
    dispatch(deleteItem(id));
  };

  return (
    <Grid container spacing={5}>
      <Grid item xs={12} display="flex" gap={5}>
        <Typography variant="h5">All Projects</Typography>
        <Button
          variant="contained"
          size="medium"
          color="success"
          startIcon={<AddIcon />}
          onClick={handleClick}
        >
          New Project
        </Button>
      </Grid>
      <Grid
        item
        xs={12}
        display="flex"
        gap={3}
        flexWrap="wrap"
        columnGap="10px"
      >
        {projects.map((value: Details) => {
          return (
            <CardDisplay
              key={value.id}
              value={value}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          );
        })}
      </Grid>
    </Grid>
  );
};

export default DataCard;
