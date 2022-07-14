import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Stack } from "@mui/material";
import Tabs from "./Tabs";
import rakhi from "./rakhi.jpg";
import rakhi2 from "./rakhi1.jpg";
import rakhi3 from "./rakhi3.jpg";
import rakhi4 from "./rakhi4.jpg";
import rakhi5 from "./rakhi5.jpg";
import rakhi6 from "./rakhi6.jpg";
import gc1 from "./gc1.jpg";
import gc2 from "./gc2.jpg";
import gc3 from "./gc3.jpg";
import gc4 from "./gc4.jpg";
import gc5 from "./gc5.jpg";
import gc6 from "./gc6.jpg";
import hc1 from "./hc1.jpg";
import hc2 from "./hc2.jfif";
import hc3 from "./hc3.jfif";
import hc4 from "./hc4.jpg";
import hc5 from "./hc5.jfif";
import hc6 from "./hc6.jfif";
import hd1 from "./hd1.jfif";
import hd2 from "./hd2.jfif";
import hd3 from "./hd3.jpg";
import hd4 from "./hd4.jpg";
import hd5 from "./hd5.jfif";
import hd6 from "./hd6.jpg";
import sl1 from "./sl1.jfif";
import sl2 from "./sl2.jfif";
import sl3 from "./sl3.jfif";
import sl4 from "./sl4.jpg";
import sl5 from "./sl5.jpg";
import sl6 from "./sl6.jfif";
import "./Cards.css";
import Footer from "./Footer";

export default function MultiActionAreaCard() {
	return (
		<>
			<Stack direction="column" spacing={2}>
				<Tabs />
				<Stack direction="row" spacing={2} paddingLeft="50px">
					<h4>Rakhi and Rakhi Gifts</h4>
					<Button
						size="small"
						color="primary"
						sx={{
							position: "absolute",
							right: 0,
							paddingTop: "25px",
							paddingRight: "55px",
						}}
					>
						View More
					</Button>
				</Stack>

				<Stack
					direction="row"
					spacing={2}
					paddingLeft="50px"
					paddingRight="50px"
				>
					<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="140"
								image={rakhi}
								alt="green iguana"
							/>
							<CardContent>
								<Typography variant="body2" color="text.secondary">
									Hamsa Evil Eye Bhaiya Bhabhi Rakhi
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions style={{ justifyContent: "center" }}>
							<Button size="small" color="primary">
								Add To Cart
							</Button>
						</CardActions>
					</Card>
					<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="140"
								image={rakhi2}
								alt="green iguana"
							/>
							<CardContent>
								<Typography variant="body2" color="text.secondary">
									Hamsa Evil Eye Bhaiya Bhabhi Rakhi
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions style={{ justifyContent: "center" }}>
							<Button size="small" color="primary">
								Add To Cart
							</Button>
						</CardActions>
					</Card>
					<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="140"
								image={rakhi3}
								alt="green iguana"
							/>
							<CardContent>
								<Typography variant="body2" color="text.secondary">
									Hamsa Evil Eye Bhaiya Bhabhi Rakhi
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions style={{ justifyContent: "center" }}>
							<Button size="small" color="primary">
								Add To Cart
							</Button>
						</CardActions>
					</Card>
					<Card sx={{ maxWidth: 250 }}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="140"
								image={rakhi4}
								alt="green iguana"
							/>
							<CardContent>
								<Typography variant="body2" color="text.secondary">
									Hamsa Evil Eye Bhaiya Bhabhi Rakhi
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions style={{ justifyContent: "center" }}>
							<Button size="small" color="primary">
								Add To Cart
							</Button>
						</CardActions>
					</Card>
					<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="140"
								image={rakhi5}
								alt="green iguana"
							/>
							<CardContent>
								<Typography variant="body2" color="text.secondary">
									Hamsa Evil Eye Bhaiya Bhabhi Rakhi
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions style={{ justifyContent: "center" }}>
							<Button size="small" color="primary">
								Add To Cart
							</Button>
						</CardActions>
					</Card>
					<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="140"
								image={rakhi6}
								alt="green iguana"
							/>
							<CardContent>
								<Typography variant="body2" color="text.secondary">
									Hamsa Evil Eye Bhaiya Bhabhi Rakhi
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions style={{ justifyContent: "center" }}>
							<Button size="small" color="primary">
								Add To Cart
							</Button>
						</CardActions>
					</Card>
				</Stack>
				<Stack
					direction="row"
					spacing={2}
					paddingLeft="50px"
					paddingRight="50px"
				>
					<h4>Ganesh Chaturthi</h4>
					<Button
						size="small"
						color="primary"
						sx={{
							position: "absolute",
							right: 0,
							paddingTop: "25px",
							paddingRight: "55px",
						}}
					>
						View More
					</Button>
				</Stack>

				<Stack
					direction="row"
					spacing={2}
					paddingLeft="50px"
					paddingRight="50px"
				>
					<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="140"
								image={gc1}
								alt="green iguana"
							/>
							<CardContent>
								<Typography variant="body2" color="text.secondary">
									Hamsa Evil Eye Bhaiya Bhabhi Rakhi
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions style={{ justifyContent: "center" }}>
							<Button size="small" color="primary">
								Add To Cart
							</Button>
						</CardActions>
					</Card>
					<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="140"
								image={gc2}
								alt="green iguana"
							/>
							<CardContent>
								<Typography variant="body2" color="text.secondary">
									Hamsa Evil Eye Bhaiya Bhabhi Rakhi
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions style={{ justifyContent: "center" }}>
							<Button size="small" color="primary">
								Add To Cart
							</Button>
						</CardActions>
					</Card>
					<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="140"
								image={gc3}
								alt="green iguana"
							/>
							<CardContent>
								<Typography variant="body2" color="text.secondary">
									Hamsa Evil Eye Bhaiya Bhabhi Rakhi
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions style={{ justifyContent: "center" }}>
							<Button size="small" color="primary">
								Add To Cart
							</Button>
						</CardActions>
					</Card>
					<Card sx={{ maxWidth: 250 }}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="140"
								image={gc4}
								alt="green iguana"
							/>
							<CardContent>
								<Typography variant="body2" color="text.secondary">
									Hamsa Evil Eye Bhaiya Bhabhi Rakhi
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions style={{ justifyContent: "center" }}>
							<Button size="small" color="primary">
								Add To Cart
							</Button>
						</CardActions>
					</Card>
					<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="140"
								image={gc5}
								alt="green iguana"
							/>
							<CardContent>
								<Typography variant="body2" color="text.secondary">
									Hamsa Evil Eye Bhaiya Bhabhi Rakhi
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions style={{ justifyContent: "center" }}>
							<Button size="small" color="primary">
								Add To Cart
							</Button>
						</CardActions>
					</Card>
					<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="140"
								image={gc6}
								alt="green iguana"
							/>
							<CardContent>
								<Typography variant="body2" color="text.secondary">
									Hamsa Evil Eye Bhaiya Bhabhi Rakhi
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions style={{ justifyContent: "center" }}>
							<Button size="small" color="primary">
								Add To Cart
							</Button>
						</CardActions>
					</Card>
				</Stack>
				<Stack
					direction="row"
					spacing={2}
					paddingLeft="50px"
					paddingRight="50px"
				>
					<h4>Healing Crystals</h4>
					<Button
						size="small"
						color="primary"
						sx={{
							position: "absolute",
							right: 0,
							paddingTop: "25px",
							paddingRight: "55px",
						}}
					>
						View More
					</Button>
				</Stack>

				<Stack
					direction="row"
					spacing={2}
					paddingLeft="50px"
					paddingRight="50px"
				>
					<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="140"
								image={hc1}
								alt="green iguana"
							/>
							<CardContent>
								<Typography variant="body2" color="text.secondary">
									Hamsa Evil Eye Bhaiya Bhabhi Rakhi
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions style={{ justifyContent: "center" }}>
							<Button size="small" color="primary">
								Add To Cart
							</Button>
						</CardActions>
					</Card>
					<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="140"
								image={hc2}
								alt="green iguana"
							/>
							<CardContent>
								<Typography variant="body2" color="text.secondary">
									Hamsa Evil Eye Bhaiya Bhabhi Rakhi
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions style={{ justifyContent: "center" }}>
							<Button size="small" color="primary">
								Add To Cart
							</Button>
						</CardActions>
					</Card>
					<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="140"
								image={hc3}
								alt="green iguana"
							/>
							<CardContent>
								<Typography variant="body2" color="text.secondary">
									Hamsa Evil Eye Bhaiya Bhabhi Rakhi
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions style={{ justifyContent: "center" }}>
							<Button size="small" color="primary">
								Add To Cart
							</Button>
						</CardActions>
					</Card>
					<Card sx={{ maxWidth: 250 }}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="140"
								image={hc4}
								alt="green iguana"
							/>
							<CardContent>
								<Typography variant="body2" color="text.secondary">
									Hamsa Evil Eye Bhaiya Bhabhi Rakhi
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions style={{ justifyContent: "center" }}>
							<Button size="small" color="primary">
								Add To Cart
							</Button>
						</CardActions>
					</Card>
					<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="140"
								image={hc5}
								alt="green iguana"
							/>
							<CardContent>
								<Typography variant="body2" color="text.secondary">
									Hamsa Evil Eye Bhaiya Bhabhi Rakhi
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions style={{ justifyContent: "center" }}>
							<Button size="small" color="primary">
								Add To Cart
							</Button>
						</CardActions>
					</Card>
					<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="140"
								image={hc6}
								alt="green iguana"
							/>
							<CardContent>
								<Typography variant="body2" color="text.secondary">
									Hamsa Evil Eye Bhaiya Bhabhi Rakhi
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions style={{ justifyContent: "center" }}>
							<Button size="small" color="primary">
								Add To Cart
							</Button>
						</CardActions>
					</Card>
				</Stack>
				<Stack
					direction="row"
					spacing={2}
					paddingLeft="50px"
					paddingRight="50px"
				>
					<h4>Rakhi and Rakhi Gifts</h4>
					<Button
						size="small"
						color="primary"
						sx={{
							position: "absolute",
							right: 0,
							paddingTop: "25px",
							paddingRight: "55px",
						}}
					>
						View More
					</Button>
				</Stack>

				<Stack
					direction="row"
					spacing={2}
					paddingLeft="50px"
					paddingRight="50px"
				>
					<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="140"
								image={hd1}
								alt="green iguana"
							/>
							<CardContent>
								<Typography variant="body2" color="text.secondary">
									Hamsa Evil Eye Bhaiya Bhabhi Rakhi
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions style={{ justifyContent: "center" }}>
							<Button size="small" color="primary">
								Add To Cart
							</Button>
						</CardActions>
					</Card>
					<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="140"
								image={hd2}
								alt="green iguana"
							/>
							<CardContent>
								<Typography variant="body2" color="text.secondary">
									Hamsa Evil Eye Bhaiya Bhabhi Rakhi
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions style={{ justifyContent: "center" }}>
							<Button size="small" color="primary">
								Add To Cart
							</Button>
						</CardActions>
					</Card>
					<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="140"
								image={hd3}
								alt="green iguana"
							/>
							<CardContent>
								<Typography variant="body2" color="text.secondary">
									Hamsa Evil Eye Bhaiya Bhabhi Rakhi
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions style={{ justifyContent: "center" }}>
							<Button size="small" color="primary">
								Add To Cart
							</Button>
						</CardActions>
					</Card>
					<Card sx={{ maxWidth: 250 }}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="140"
								image={hd4}
								alt="green iguana"
							/>
							<CardContent>
								<Typography variant="body2" color="text.secondary">
									Hamsa Evil Eye Bhaiya Bhabhi Rakhi
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions style={{ justifyContent: "center" }}>
							<Button size="small" color="primary">
								Add To Cart
							</Button>
						</CardActions>
					</Card>
					<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="140"
								image={hd5}
								alt="green iguana"
							/>
							<CardContent>
								<Typography variant="body2" color="text.secondary">
									Hamsa Evil Eye Bhaiya Bhabhi Rakhi
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions style={{ justifyContent: "center" }}>
							<Button size="small" color="primary">
								Add To Cart
							</Button>
						</CardActions>
					</Card>
					<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="140"
								image={hd6}
								alt="green iguana"
							/>
							<CardContent>
								<Typography variant="body2" color="text.secondary">
									Hamsa Evil Eye Bhaiya Bhabhi Rakhi
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions style={{ justifyContent: "center" }}>
							<Button size="small" color="primary">
								Add To Cart
							</Button>
						</CardActions>
					</Card>
				</Stack>

				<img sx={{ maxWidth: 100 }} src={rakhi} alt="rakhi" />
				<Stack
					direction="row"
					spacing={2}
					paddingLeft="50px"
					paddingRight="50px"
				>
					<h4>Rakhi and Rakhi Gifts</h4>
					<Button
						size="small"
						color="primary"
						sx={{
							position: "absolute",
							right: 0,
							paddingTop: "25px",
							paddingRight: "55px",
						}}
					>
						View More
					</Button>
				</Stack>
				<Stack
					direction="row"
					spacing={2}
					paddingLeft="50px"
					paddingRight="50px"
				>
					<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="140"
								image={sl1}
								alt="green iguana"
							/>
							<CardContent>
								<Typography variant="body2" color="text.secondary">
									Hamsa Evil Eye Bhaiya Bhabhi Rakhi
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions style={{ justifyContent: "center" }}>
							<Button size="small" color="primary">
								Add To Cart
							</Button>
						</CardActions>
					</Card>
					<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="140"
								image={sl2}
								alt="green iguana"
							/>
							<CardContent>
								<Typography variant="body2" color="text.secondary">
									Hamsa Evil Eye Bhaiya Bhabhi Rakhi
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions style={{ justifyContent: "center" }}>
							<Button size="small" color="primary">
								Add To Cart
							</Button>
						</CardActions>
					</Card>
					<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="140"
								image={sl3}
								alt="green iguana"
							/>
							<CardContent>
								<Typography variant="body2" color="text.secondary">
									Hamsa Evil Eye Bhaiya Bhabhi Rakhi
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions style={{ justifyContent: "center" }}>
							<Button size="small" color="primary">
								Add To Cart
							</Button>
						</CardActions>
					</Card>
					<Card sx={{ maxWidth: 250 }}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="140"
								image={sl4}
								alt="green iguana"
							/>
							<CardContent>
								<Typography variant="body2" color="text.secondary">
									Hamsa Evil Eye Bhaiya Bhabhi Rakhi
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions style={{ justifyContent: "center" }}>
							<Button size="small" color="primary">
								Add To Cart
							</Button>
						</CardActions>
					</Card>
					<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="140"
								image={sl5}
								alt="green iguana"
							/>
							<CardContent>
								<Typography variant="body2" color="text.secondary">
									Hamsa Evil Eye Bhaiya Bhabhi Rakhi
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions style={{ justifyContent: "center" }}>
							<Button size="small" color="primary">
								Add To Cart
							</Button>
						</CardActions>
					</Card>
					<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="140"
								image={sl6}
								alt="green iguana"
							/>
							<CardContent>
								<Typography variant="body2" color="text.secondary">
									Hamsa Evil Eye Bhaiya Bhabhi Rakhi
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions style={{ justifyContent: "center" }}>
							<Button size="small" color="primary">
								Add To Cart
							</Button>
						</CardActions>
					</Card>
				</Stack>
				<Footer />
			</Stack>
		</>
	);
}
