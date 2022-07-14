import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Stack } from "@mui/material";
import "./Tabs.css";
import rakhi from "./rakhi.jpg";
import gc1 from "./gc1.jpg";
import hc1 from "./hc1.jpg";
import hd1 from "./hd1.jfif";
import sl1 from "./sl1.jfif";
import pooja from "./pooja.jfif";
import lamp from "./lamp.jfif";
import urlis from "./urlis.jpg";

export default function ScrollableTabsButtonAuto() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box
			sx={{
				maxWidth: { xs: 320, sm: 480, lg: 2000 },
				bgcolor: "background.paper",
			}}
		>
			<Tabs
				value={value}
				onChange={handleChange}
				variant="scrollable"
				scrollButtons="auto"
				aria-label="scrollable auto tabs example"
			>
				<Stack
					direction="row"
					// spacing={1}
					paddingLeft="50px"
					paddingRight="50px"
				>
					<Stack
						direction="column"
						spacing={2}
						paddingLeft="50px"
						paddingRight="50px"
					>
						<Card sx={{ width: "150px", height: "150px", borderRadius: "50%" }}>
							<CardActionArea>
								<CardMedia
									component="img"
									height="140"
									image={rakhi}
									alt="green iguana"
								/>
							</CardActionArea>
						</Card>
						<h>RAKHI</h>
					</Stack>
					<Stack
						direction="column"
						spacing={2}
						paddingLeft="50px"
						paddingRight="50px"
					>
						<Card sx={{ width: "150px", height: "150px", borderRadius: "50%" }}>
							<CardMedia
								component="img"
								height="140"
								image={gc1}
								alt="green iguana"
							/>
						</Card>
						<p>ECO GANESHA</p>
					</Stack>
					<Stack
						direction="column"
						spacing={2}
						paddingLeft="50px"
						paddingRight="50px"
					>
						<Card sx={{ width: "150px", height: "150px", borderRadius: "50%" }}>
							<CardActionArea>
								<CardMedia
									component="img"
									height="140"
									image={hc1}
									alt="green iguana"
								/>
							</CardActionArea>
						</Card>
						<p>CRYSTALS</p>
					</Stack>
					<Stack
						direction="column"
						spacing={2}
						paddingLeft="50px"
						paddingRight="50px"
					>
						<Card sx={{ width: "150px", height: "150px", borderRadius: "50%" }}>
							<CardActionArea>
								<CardMedia
									component="img"
									height="140"
									image={hd1}
									alt="green iguana"
								/>
							</CardActionArea>
						</Card>
						<p>HOME DECOR</p>
					</Stack>
					<Stack
						direction="column"
						spacing={2}
						paddingLeft="50px"
						paddingRight="50px"
					>
						<Card sx={{ width: "150px", height: "150px", borderRadius: "50%" }}>
							<CardActionArea>
								<CardMedia
									component="img"
									height="140"
									image={sl1}
									alt="green iguana"
								/>
							</CardActionArea>
						</Card>
						<p>SALT LAMPS</p>
					</Stack>
					<Stack
						direction="column"
						spacing={2}
						paddingLeft="50px"
						paddingRight="50px"
					>
						<Card sx={{ width: "150px", height: "150px", borderRadius: "50%" }}>
							<CardActionArea>
								<CardMedia
									component="img"
									height="140"
									image={lamp}
									alt="green iguana"
								/>
							</CardActionArea>
						</Card>
						<p>LAMPS & LANTERNS</p>
					</Stack>
					<Stack
						direction="column"
						spacing={2}
						paddingLeft="50px"
						paddingRight="50px"
					>
						<Card sx={{ width: "150px", height: "150px", borderRadius: "50%" }}>
							<CardActionArea>
								<CardMedia
									component="img"
									height="140"
									image={pooja}
									alt="green iguana"
								/>
							</CardActionArea>
						</Card>
						<p>POOJA DECOR</p>
					</Stack>
					<Stack
						direction="column"
						spacing={2}
						paddingLeft="50px"
						paddingRight="50px"
					>
						<Card sx={{ width: "150px", height: "150px", borderRadius: "50%" }}>
							<CardActionArea>
								<CardMedia
									component="img"
									height="140"
									image={urlis}
									alt="green iguana"
								/>
							</CardActionArea>
						</Card>
						<p>URLIS</p>
					</Stack>
				</Stack>
			</Tabs>
		</Box>
	);
}
