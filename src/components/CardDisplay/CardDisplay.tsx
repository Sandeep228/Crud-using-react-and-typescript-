import Details from "../../interfaces/PlayerInterface";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  CardActions,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Button,
} from "@mui/material";
import styles from "./CardDisplay.module.css";

interface props {
  value: any;
  handleDelete: (id: number) => void;
  handleEdit: (data: Details) => void;
}

const CardDisplay: React.FC<props> = ({ value, handleDelete, handleEdit }) => {
  return (
    <Grid item xs={3} className={styles["gridItem"]}>
      <Card className={styles["cardItem"]}>
        <CardMedia
          className={styles["image"]}
          component="img"
          src={value.imgURL}
        />
        <CardContent>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Name:</TableCell>
                <TableCell>{value?.name || " "}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Country:</TableCell>
                <TableCell>{value?.country || ""}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Gender:</TableCell>
                <TableCell>{value?.gender || " "}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Role:</TableCell>
                <TableCell>
                  {value.roles.map((role: string, index: number) => {
                    if (index === value.roles.length - 1) {
                      return <span key={index}>{role}</span>;
                    }
                    return <span key={index}>{role + ","}</span>;
                  })}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell> Matches:</TableCell>
                <TableCell>{value?.matches || " "}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell> runs:</TableCell>
                <TableCell>{value?.runs || " "}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell> Centuries:</TableCell>
                <TableCell>{value?.centuries || " "}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell> Fifties:</TableCell>
                <TableCell>{value?.fifties || " "}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell> Sixes:</TableCell>
                <TableCell>{value?.sixes || " "}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell> Fours:</TableCell>
                <TableCell>{value?.fours || " "}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            variant="contained"
            onClick={() => {
              handleEdit(value);
            }}
          >
            Edit
          </Button>
          <Button
            size="small"
            variant="contained"
            color="error"
            onClick={() => {
              handleDelete(value.id);
            }}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CardDisplay;
