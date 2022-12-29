import React, { useEffect } from "react";
import { RootState } from "../../core/store";
import Details from "../../interfaces/PlayerInterface";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { ThemeUIStyleObject } from "theme-ui";
import { add, EditPlayerRequest, EditCancel } from "../../features/playerInfo";
import { playerroles } from "../../const/Players";

import {
  Grid,
  Paper,
  TextField,
  Button,
  Radio,
  Checkbox,
  ListItemText,
  RadioGroup,
  FormHelperText,
  FormControlLabel,
  FormControl,
  FormLabel,
  MenuItem,
  SelectChangeEvent,
  Select,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

declare module "react" {
  interface Attributes {
    sx?: ThemeUIStyleObject;
  }
}

const NewForm = () => {
  const editPlayer = useSelector((state: RootState) => state.data.editplayer);
  const history = useNavigate();
  const paperStyle = { padding: "30px 20px", width: 350, margin: "22px auto" };
  const headerStyle = { margin: 0 };
  const [roles, setRoles] = React.useState<string[]>(editPlayer.roles || []);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    formState,
    setValue,
  } = useForm<Details>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: editPlayer,
  });

  useEffect(() => {
    setValue("roles", roles);
  }, [roles, setValue]);

  const onsubmit = (data: any) => {
    let id = editPlayer.id === null ? Date.now() : editPlayer.id;
    const newForm = {
      ...data,
      id: id,
      roles: roles,
    };

    editPlayer.id === null
      ? dispatch(add(newForm))
      : dispatch(EditPlayerRequest(newForm));

    navigate("/", { replace: true });
  };

  const handleSelect = (event: SelectChangeEvent<typeof roles>) => {
    const {
      target: { value },
    } = event;

    setRoles(typeof value === "string" ? value.split(",") : value);
  };

  const handleCancel = () => {
    dispatch(EditCancel());
    history("/");
  };

  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid>
          <h2 style={headerStyle}>Form</h2>
        </Grid>
        <form onSubmit={handleSubmit(onsubmit)}>
          <TextField
            {...register("name", {
              required: "Name is required",
              maxLength: {
                value: 30,
                message: "Name is too long ",
              },
            })}
            fullWidth
            margin={"normal"}
            type="text"
            label="Name"
            placeholder="Enter your name"
            error={Boolean(errors?.name)}
            helperText={errors?.name?.message}
          />
          <TextField
            {...register("country", { required: "Country is required" })}
            fullWidth
            type="text"
            margin={"normal"}
            label="Country"
            placeholder="Enter your Country"
            error={Boolean(errors?.country)}
            helperText={errors?.country?.message}
          />

          <FormControl
            component="fieldset"
            error={errors.gender?.message ? true : false}
          >
            <FormLabel component="legend">Gender</FormLabel>
            <Controller
              rules={{ required: "Gender is required" }}
              control={control}
              name="gender"
              render={({ field }) => (
                <RadioGroup row {...field}>
                  <FormControlLabel
                    value="Female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="Male"
                    control={<Radio />}
                    label="Male"
                  />
                </RadioGroup>
              )}
            />
            <FormHelperText>
              {formState?.errors?.gender?.message || ""}
            </FormHelperText>
          </FormControl>

          <FormControl
            sx={{ m: 1, width: 300 }}
            error={errors.roles?.message ? true : false}
          >
            <InputLabel>Role</InputLabel>
            <Controller
              name="roles"
              control={control}
              rules={{ required: "Required" }}
              render={({ field }) => {
                return (
                  <Select
                    {...field}
                    name={field.name}
                    multiple
                    value={roles}
                    onChange={handleSelect}
                    input={<OutlinedInput label="Role" />}
                    renderValue={(selected: any) => selected.join(", ")}
                  >
                    {Object.entries(playerroles).map(([key, value]) => (
                      <MenuItem key={key} value={value}>
                        <Checkbox checked={roles.indexOf(value) > -1} />
                        <ListItemText primary={key} />
                      </MenuItem>
                    ))}
                  </Select>
                );
              }}
            />
            <FormHelperText>{errors.roles?.message}</FormHelperText>
          </FormControl>

          <TextField
            label="Image URL"
            placeholder="Paste image URL"
            variant="outlined"
            type="text"
            margin="normal"
            {...register("imgURL", {
              required: "URL is required",
              pattern: {
                value:
                  // eslint-disable-next-line
                  /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
                message: "Enter valid url",
              },
            })}
            error={Boolean(formState.errors?.imgURL)}
            helperText={formState?.errors?.imgURL?.message}
          />

          <TextField
            fullWidth
            label="Runs"
            type="number"
            margin={"normal"}
            placeholder="Enter Runs"
            {...register("runs", {
              required: "runs scored is required",
              min: {
                value: 0,
                message: "Don't enter  negative number ",
              },
            })}
            error={Boolean(errors?.runs)}
            helperText={errors?.runs?.message}
          />
          <TextField
            fullWidth
            label="Matches"
            type="number"
            margin={"normal"}
            placeholder="Enter Matches"
            {...register("matches", {
              required: "Matches is required",
              min: {
                value: 0,
                message: "Don't enter  negative number ",
              },
            })}
            error={Boolean(errors?.matches)}
            helperText={errors?.matches?.message}
          />
          <TextField
            fullWidth
            label="wickets"
            type="number"
            margin={"normal"}
            placeholder="Enter wickets"
            {...register("wickets", {
              required: "Wickets is required",
              min: {
                value: 0,
                message: "Don't enter  negative number ",
              },
            })}
            error={Boolean(errors?.wickets)}
            helperText={errors?.wickets?.message}
          />
          <TextField
            fullWidth
            label="centuries"
            margin={"normal"}
            type="number"
            placeholder="Enter centuries"
            {...register("centuries", {
              required: "Centuries is required",
              min: {
                value: 0,
                message: "Don't enter  negative number ",
              },
            })}
            error={Boolean(errors?.centuries)}
            helperText={errors?.centuries?.message}
          />
          <TextField
            fullWidth
            label="fifties"
            margin={"normal"}
            type="number"
            placeholder="Enter fifties"
            {...register("fifties", {
              required: "Fifties is required",
              min: {
                value: 0,
                message: "Don't enter  negative number ",
              },
            })}
            error={Boolean(errors?.fifties)}
            helperText={errors?.fifties?.message}
          />
          <TextField
            fullWidth
            label="fours"
            margin={"normal"}
            type="number"
            placeholder="Enter fours"
            {...register("fours", {
              required: "Fours is required",
              min: {
                value: 0,
                message: "Don't enter  negative number ",
              },
            })}
            error={Boolean(errors?.fours)}
            helperText={errors?.fours?.message}
          />
          <TextField
            fullWidth
            label="sixes"
            margin={"normal"}
            type="number"
            placeholder="Enter sixes"
            {...register("sixes", {
              required: "Sixes is required",
              min: {
                value: 0,
                message: "Don't enter  negative number ",
              },
            })}
            error={Boolean(errors?.sixes)}
            helperText={errors?.sixes?.message}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleSubmit(onsubmit)}
          >
            Submit
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={(e: any) => {
              e.preventDefault();
              handleCancel();
            }}
          >
            Cancel
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default NewForm;
