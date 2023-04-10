import { Button, Card, CardActions, CardContent, IconButton, TextField } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import axios from "axios";
import { Singer } from "../../models/Singer";

import { BACKEND_API_URL } from "../../constants";

export const SingerAdd = () => {
	const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

	const [singer, setSinger] = useState<Singer>({
        id:0,
        firstName: "",
        lastName: "",
        age:1,
        city:"",
        typeOfMusic:"",
	});

	const addSinger = async (event: { preventDefault: () => void }) => {
		event.preventDefault();
		try {
			await axios.post(`${BACKEND_API_URL}/recordLbls/${id}/singer`, singer);
			navigate("/singers");
		} catch (error) {
			console.log(error);
		}
	};

    

    function RecordLable(value: string): import("../../models/RecordLable").RecordLable {
        throw new Error("Function not implemented.");
    }

	return (
		<Container>
			<Card>
				<CardContent>
					<IconButton component={Link} sx={{ mr: 3 }} to={`/singers`}>
						<ArrowBackIcon />
					</IconButton>{" "}
					<form onSubmit={addSinger}>
                        <TextField
							id="id"
							label="ID"
							variant="outlined"
							fullWidth
							sx={{ mb: 2 }}
							onChange={(event) => setSinger({ ...singer, id: Number(event.target.value) })}
						/>

						<TextField
							id="firstName"
							label="First Name"
							variant="outlined"
							fullWidth
							sx={{ mb: 2 }}
							onChange={(event) => setSinger({ ...singer, firstName: event.target.value })}
						/>
						<TextField
							id="lastName"
							label="Last Name"
							variant="outlined"
							fullWidth
							sx={{ mb: 2 }}
							onChange={(event) => setSinger({ ...singer, lastName: event.target.value })}
						/>
                        <TextField
							id="age"
							label="Age"
							variant="outlined"
							fullWidth
							sx={{ mb: 2 }}
							onChange={(event) => setSinger({ ...singer, age: Number(event.target.value) })}
						/>
                        <TextField
							id="city"
							label="City"
							variant="outlined"
							fullWidth
							sx={{ mb: 2 }}
							onChange={(event) => setSinger({ ...singer, city: event.target.value })}
						/>
                        <TextField
							id="typeOfMusic"
							label="Type of music"
							variant="outlined"
							fullWidth
							sx={{ mb: 2 }}
							onChange={(event) => setSinger({ ...singer, typeOfMusic: event.target.value })}
						/>
                       


						<Button type="submit">Add Singer</Button>
					</form>
				</CardContent>
				<CardActions></CardActions>
			</Card>
		</Container>
	);
};