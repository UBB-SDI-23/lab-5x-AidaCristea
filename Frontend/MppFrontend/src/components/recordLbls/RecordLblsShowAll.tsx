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
import { RecordLable } from "../../models/RecordLable";
import { GlobalURL } from "../../main";
  
  export const RecordLblsShowAll = () => {
    const [loading, setLoading] = useState(false);
    const [recordLbls, setRecordLbl] = useState<RecordLable[]>([]);
  
    useEffect(() => {
      fetch(GlobalURL + "/recordLbls")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setRecordLbl(data);
          setLoading(false);
        });
    }, []);
  
    
    return (
      <Container>
        <h1>All Record Lables</h1>
  
        {loading && <CircularProgress />}
        {!loading && recordLbls.length === 0 && <p>No record lables found</p>}
        {!loading && (
          <div style={{display:'flex', alignItems:'center'}}>
            <IconButton component={Link} sx={{marginRight: 0 }} to={`/recordLbls/add`}>
              <Tooltip title="Add a new record lable" arrow>
                <AddIcon color="primary" />
              </Tooltip>
            </IconButton>
          </div>
        )}
  
        {!loading && recordLbls.length > 0 && (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="right">Address</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="center">Review</TableCell>
                  <TableCell align="center">Nr collaborations</TableCell>
                  <TableCell align="center">Operations</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {recordLbls.map((recLbl, index) => (
                  <TableRow key={recLbl.id}>
                    <TableCell component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <Link
                        to={`/recordLbls/${recLbl.id}`}
                        title="View record lables details"
                      >
                        {recLbl.nameRl}
                      </Link>
                    </TableCell>
  
                    <TableCell align="right">{recLbl.address}</TableCell>
                    <TableCell align="right">{recLbl.price}</TableCell>
                    <TableCell align="right">{recLbl.review}</TableCell>
                    <TableCell align="center">{recLbl.nrCollaborations}</TableCell>
                    
                    <TableCell align="right">
                      <IconButton
                        component={Link}
                        sx={{ mr: 3 }}
                        to={`/recordLbls/${recLbl.id}/details`}
                      >
                        <Tooltip title="View record lable details" arrow>
                          <ReadMoreIcon color="primary" />
                        </Tooltip>
                      </IconButton>
  
                      <IconButton
                        component={Link}
                        sx={{ mr: 3 }}
                        to={`/recordLbls/${recLbl.id}/edit`}
                        title="Edit record lable details"
                      >
                        <EditIcon />
                      </IconButton>
  
                      <IconButton
                        component={Link}
                        sx={{ mr: 3 }}
                        to={`/recordLbls/${recLbl.id}/delete`}
                        title="Delete record lable"
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
  