import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import tourism from './tourism.png';

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 150 ,maxHeight: 150, borderRadius: '50%'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={tourism}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Rakshabandhan
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button style={{ justifyContent: "center" }} size="small" color="primary">
          Add To Cart
        </Button>
      </CardActions>
    <span class="bi bi-arrow-bar-right"></span>
    </Card>
  );
}
