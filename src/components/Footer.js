import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { Stack } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import gp from "./gp.png";
import ap from "./ap.png";
import "./Footer.css";

export default function Footer() {
	const [country, setCountry] = React.useState("");

	const handleChange = (event) => {
		setCountry(event.target.value);
	};
	return (
		<footer>
			<Box
				px={{ xs: 3, sm: 10 }}
				py={{ xs: 5, sm: 10 }}
				bgcolor="#1976D2"
				color="white"
			>
				<Container maxWidth="lg">
					<Grid container spacing={5}>
						<Grid item xs={12} sm={4}>
							<Stack direction="column" spacing={2}>
								<Box>INFORMATION</Box>
								<Box>
									<Link
										sx={{ textDecoration: "none" }}
										href="/"
										color="inherit"
									>
										Track Your Order
									</Link>
								</Box>
								<Box>
									<Link
										sx={{ textDecoration: "none" }}
										href="/"
										color="inherit"
									>
										Returns and Refunds
									</Link>
								</Box>
								<Box>
									<Link
										sx={{ textDecoration: "none" }}
										href="/"
										color="inherit"
									>
										Daily Horoscope
									</Link>
								</Box>
								<Box>
									<Link
										sx={{ textDecoration: "none" }}
										href="/"
										color="inherit"
									>
										Holiday List
									</Link>
								</Box>
								<Box>
									<Link
										sx={{ textDecoration: "none" }}
										href="/"
										color="inherit"
									>
										Terms and Conditions
									</Link>
								</Box>
								<Box>
									<Link
										sx={{ textDecoration: "none" }}
										href="/"
										color="inherit"
									>
										Aartis
									</Link>
								</Box>
								<Box>
									<Link
										sx={{ textDecoration: "none" }}
										href="/"
										color="inherit"
									>
										Privacy Policy
									</Link>
								</Box>
								<Box>
									<Link
										sx={{ textDecoration: "none" }}
										href="/"
										color="inherit"
									>
										Blog
									</Link>
								</Box>
								<Box>
									<Link
										sx={{ textDecoration: "none" }}
										href="/"
										color="inherit"
									>
										FAQ
									</Link>
								</Box>
							</Stack>
						</Grid>
						<Grid item xs={12} sm={4}>
							<Stack direction="column" spacing={2}>
								<Box>ABOUT MY POOJA BOX</Box>
								<Box>
									<Link
										sx={{ textDecoration: "none" }}
										href="/"
										color="inherit"
									>
										Contact Us
									</Link>
								</Box>
								<Box>
									<Link
										sx={{ textDecoration: "none" }}
										href="/"
										color="inherit"
									>
										About Us
									</Link>
								</Box>
								<Box>
									<Link
										sx={{ textDecoration: "none" }}
										href="/"
										color="inherit"
									>
										Corporate Enquiry
									</Link>
								</Box>
								<Box>
									<Link
										sx={{ textDecoration: "none" }}
										href="/"
										color="inherit"
									>
										Exchange/Cancel My Order
									</Link>
								</Box>
							</Stack>
						</Grid>
						<Grid item xs={12} sm={4}>
							<Stack direction="column" spacing={2}>
								<Box>CUSTOMER CARE</Box>
								<Box>
									<Link
										sx={{ textDecoration: "none" }}
										href="/"
										color="inherit"
									>
										Phone: +91 8010288882|+91 8010188881
									</Link>
								</Box>
								<Box>
									<Link
										sx={{ textDecoration: "none" }}
										href="/"
										color="inherit"
									>
										Email: orders@mypoojabox.com
									</Link>
								</Box>
							</Stack>
						</Grid>
					</Grid>
				</Container>
				<Stack direction="row" spacing={2}>
					<img src={gp} alt="google play"></img>
					<img src={ap} alt="app store"></img>
					<Box>MOBIKASA VENTURES LLP</Box>
					<Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
						© 2022, All Rights Reserved.
					</Box>
					<FormControl sx={{ m: 1, minWidth: 120 }}>
						<Select
							value={country}
							onChange={handleChange}
							inputProps={{ "aria-label": "Without label" }}
						>
							<MenuItem value="">
								<em>India</em>
							</MenuItem>
							<MenuItem value={10}>America</MenuItem>
							<MenuItem value={20}>London</MenuItem>
							<MenuItem value={30}>Vietnam</MenuItem>
						</Select>
					</FormControl>
				</Stack>
			</Box>
		</footer>
	);
}
