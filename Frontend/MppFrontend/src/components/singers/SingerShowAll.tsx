import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  CircularProgress,
  Container,
  IconButton,
  Tooltip,
} from "@mui/material";

import { useEffect, useState } from "react";
import { Singer } from "../../models/Singer";

import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { GlobalURL } from "../../main";

export const SingerShowAll = () => {
  const [loading, setLoading] = useState(false);
  const [singers, setSingers] = useState<Singer[]>([]);

  useEffect(() => {
    fetch(GlobalURL + "/singers")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSingers(data);
        setLoading(false);
      });
  }, []);

  
  return (
    <Container>
      <h1>All singers</h1>

      {loading && <CircularProgress />}
      {!loading && singers.length === 0 && <p>No singers found</p>}
      {!loading && (
        <div style={{display:'flex', alignItems:'center'}}>
          <IconButton component={Link} sx={{marginRight: 0 }} to={`/singers/add`}>
            <Tooltip title="Add a new singer" arrow>
              <AddIcon color="primary" />
            </Tooltip>
          </IconButton>
        </div>
      )}

      {!loading && singers.length > 0 && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell align="right">First name</TableCell>
                <TableCell align="right">Last name</TableCell>
                <TableCell align="right">Age</TableCell>
                <TableCell align="center">City</TableCell>
                <TableCell align="right">Type of music</TableCell>
                <TableCell align="right">Record Lable ID</TableCell>
                <TableCell align="center">Operations</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {singers.map((singer, index) => (
                <TableRow key={singer.id}>
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Link
                      to={`/singers/${singer.id}`}
                      title="View singer details"
                    >
                      {singer.firstName}
                    </Link>
                  </TableCell>

                  <TableCell align="right">{singer.lastName}</TableCell>
                  <TableCell align="right">{singer.age}</TableCell>
                  <TableCell align="right">{singer.city}</TableCell>
                  <TableCell align="right">{singer.typeOfMusic}</TableCell>
                  
                  <TableCell align="right">
                    <IconButton
                      component={Link}
                      sx={{ mr: 3 }}
                      to={`/singers/${singer.id}/details`}
                    >
                      <Tooltip title="View singer details" arrow>
                        <ReadMoreIcon color="primary" />
                      </Tooltip>
                    </IconButton>

                    <IconButton
                      component={Link}
                      sx={{ mr: 3 }}
                      to={`/singers/${singer.id}/edit`}
                      title="Edit singer details"
                    >
                      <EditIcon />
                    </IconButton>

                    <IconButton
                      component={Link}
                      sx={{ mr: 3 }}
                      to={`/singers/${singer.id}/delete`}
                      title="Delete singer"
                    >
                      <DeleteForeverIcon sx={{ color: "red" }} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
};
