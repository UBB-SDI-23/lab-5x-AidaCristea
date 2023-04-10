import { useEffect, useState } from "react";

import { Singer } from "../../models/Singer";
import { Link, useParams } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Card, CardActions, CardContent, Container, IconButton } from "@mui/material";
import { RecordLable } from "../../models/RecordLable";

import { BACKEND_API_URL } from "../../constants";

export const RecordLblsDetails = () => {
    //const { singerId } = useParams();
    const {reclblId} =useParams();
    //const { reclblId } = useParams<{ reclblId: string }>();
    //const singerIdd = parseInt(singerId ?? '0', 10);
	const [recordLbl, setRecordLbl] = useState<RecordLable>();

	useEffect(() => {
		const fetchRecordLable = async () => {
			// TODO: use axios instead of fetch
			// TODO: handle errors
			// TODO: handle loading state
			const response = await fetch(`${BACKEND_API_URL}/recordLbls/${reclblId}`);
            
			const recordLbl = await response.json();
			setRecordLbl(recordLbl);
            console.log(recordLbl);
		};
		fetchRecordLable();
	}, [reclblId]);
    console.log(reclblId)
   


    return (
		<Container>
			<Card>
				<CardContent>
					<IconButton component={Link} sx={{ mr: 3 }} to={`/recordLbls`}>
						<ArrowBackIcon />
					</IconButton>{" "}
					<h1>Record lable Details</h1>
					<p>Record lable Name: {recordLbl?.nameRl}</p>
					<p>Record lable Address: {recordLbl?.address}</p>
					<p>Record lable Price: {recordLbl?.price}</p>
                    <p>Record lable Review: {recordLbl?.review}</p>
                    <p>Record lable nr collaborations: {recordLbl?.nrCollaborations}</p>
            
                    
					
				</CardContent>
				<CardActions>
					<IconButton component={Link} sx={{ mr: 3 }} to={`/recordLbls/${reclblId}/edit`}>
						<EditIcon />
					</IconButton>

					<IconButton component={Link} sx={{ mr: 3 }} to={`/recordLbls/${reclblId}/delete`}>
						<DeleteForeverIcon sx={{ color: "red" }} />
					</IconButton>
				</CardActions>
			</Card>
		</Container>
	);

}