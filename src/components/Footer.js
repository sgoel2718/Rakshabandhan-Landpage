import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { Stack, Typography } from "@mui/material";
import gp from "./gp.png";
import ap from "./ap.png";
import "./Footer.css";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
	return (
		<footer>
			<Box
				px={{ xs: 3, sm: 10 }}
				py={{ xs: 5, sm: 10 }}
				bgcolor="#1976D2"
				color="white"
			>
				<Container maxWidth="lg" sx={{ mb: "2em" }}>
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
				<Stack direction="row" spacing={2} sx={{ mt: "4em", bottom: 0 }}>
					{/* <img  src={gp} alt="google play"></img>
					<img src={ap} alt="app store"></img> */}
					<Box
						component="img"
						src={gp}
						alt="google play"
						sx={{ width: "10%", height: "10%" }}
					/>
					<Box
						component="img"
						src={ap}
						alt="app store"
						sx={{ width: "10%", height: "10%" }}
					/>
					<Typography sx={{ alignSelf: "center" }}>
						MOBIKASA VENTURES LLP
					</Typography>
					<Box
						sx={{
							display: "flex",
							flexDirection: "row-reverse",
							flexGrow: 1,
						}}
					>
						<Dropdown>
							<Dropdown.Toggle id="dropdown-basic">India</Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.Item href="#/action-1">America</Dropdown.Item>
								<Dropdown.Item href="#/action-2">Switzerland</Dropdown.Item>
								<Dropdown.Item href="#/action-3">Auckland</Dropdown.Item>
								<Dropdown.Item href="#/action-4">Canada</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
						<Typography sx={{ alignSelf: "center", marginRight: "11em" }}>
							© 2022, All Rights Reserved.
						</Typography>
					</Box>
				</Stack>
			</Box>
		</footer>
	);
}
