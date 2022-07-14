import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { Stack } from "@mui/material";
import "./Tabs.css";
import rakhi from "./rakhi.jpg";
import gc1 from "./gc1.jpg";
import hc1 from "./hc1.jpg";
import hd1 from "./hd1.jfif";
import sl1 from "./sl1.jfif";
import pooja from "./pooja.jfif";
import lamp from "./lamp.jfif";
import urlis from "./urlis.jpg";
import Avatar from "@mui/material/Avatar";

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
						<Card sx={{ borderRadius: "50%" }}>
							{/* <CardActionArea> */}
							<Avatar
								alt="Remy Sharp"
								src={rakhi}
								sx={{ width: 150, height: 150 }}
							/>
							{/* </CardActionArea> */}
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
							<Avatar
								alt="Remy Sharp"
								src={gc1}
								sx={{ width: 150, height: 150 }}
							/>
						</Card>
						<h>ECO GANESHA</h>
					</Stack>
					<Stack
						direction="column"
						spacing={2}
						paddingLeft="50px"
						paddingRight="50px"
					>
						<Card sx={{ width: "150px", height: "150px", borderRadius: "50%" }}>
							<Avatar
								alt="Remy Sharp"
								src={hc1}
								sx={{ width: 150, height: 150 }}
							/>
						</Card>
						<h>CRYSTALS</h>
					</Stack>
					<Stack
						direction="column"
						spacing={2}
						paddingLeft="50px"
						paddingRight="50px"
					>
						<Card sx={{ width: "150px", height: "150px", borderRadius: "50%" }}>
							<Avatar
								alt="Remy Sharp"
								src={hd1}
								sx={{ width: 150, height: 150 }}
							/>
						</Card>
						<h>HOME DECOR</h>
					</Stack>
					<Stack
						direction="column"
						spacing={2}
						paddingLeft="50px"
						paddingRight="50px"
					>
						<Card sx={{ width: "150px", height: "150px", borderRadius: "50%" }}>
							<Avatar
								alt="Remy Sharp"
								src={sl1}
								sx={{ width: 150, height: 150 }}
							/>
						</Card>
						<h>SALT LAMPS</h>
					</Stack>
					<Stack
						direction="column"
						spacing={2}
						paddingLeft="50px"
						paddingRight="50px"
					>
						<Card sx={{ width: "150px", height: "150px", borderRadius: "50%" }}>
							<Avatar
								alt="Remy Sharp"
								src={lamp}
								sx={{ width: 150, height: 150 }}
							/>
						</Card>
						<h>LAMPS & LANTERNS</h>
					</Stack>
					<Stack
						direction="column"
						spacing={2}
						paddingLeft="50px"
						paddingRight="50px"
					>
						<Card sx={{ width: "150px", height: "150px", borderRadius: "50%" }}>
							<Avatar
								alt="Remy Sharp"
								src={pooja}
								sx={{ width: 150, height: 150 }}
							/>
						</Card>
						<h>POOJA DECOR</h>
					</Stack>
					<Stack
						direction="column"
						spacing={2}
						paddingLeft="50px"
						paddingRight="50px"
					>
						<Card sx={{ width: "150px", height: "150px", borderRadius: "50%" }}>
							<Avatar
								alt="Remy Sharp"
								src={urlis}
								sx={{ width: 150, height: 150 }}
							/>
						</Card>
						<h>URLIS</h>
					</Stack>
				</Stack>
			</Tabs>
		</Box>
	);
}
