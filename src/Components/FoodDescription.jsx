import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const FoodDescription = ({ desc, open, handleClose }) => {
  console.log(desc);
  return (
    <div>
      {" "}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ color: "#ff914b" }}>Details</DialogTitle>
        <DialogContent>
          {desc.map((data) => (
            <Card sx={{ maxWidth: 345, margin: "5px" }}>
              <CardMedia
                component="img"
                height="300"
                image={data.strMealThumb}
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  sx={{ color: "#ff914b" }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  {data.strMeal}
                </Typography>
                <Typography
                  sx={{
                    backgroundColor: "#ff914b",
                    borderRadius: "4px",
                    color: "#c3cfe2",
                  }}
                  gutterBottom
                  variant="body3"
                  color="text.secondary"
                >
                  Category : {data.strCategory}&nbsp;&nbsp;&nbsp; Area :{" "}
                  {data.strArea}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ marginTop: "5px" }}
                  color="text.secondary"
                >
                  <Typography
                    sx={{ marginTop: "5px", color: "#ff914b" }}
                    variant="h6"
                  >
                    Instructions :{" "}
                  </Typography>
                  {data.strInstructions}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ marginTop: "5px" }}
                  color="text.secondary"
                >
                  <Typography sx={{ color: "#ff914b" }} variant="h6">
                    Ingredients :{" "}
                  </Typography>
                  {data.strIngredient1}
                  <br />
                  {data.strIngredient2}
                  <br />
                  {data.strIngredient3}
                  <br />
                  {data.strIngredient4}
                  <br />
                  {data.strIngredient5}
                  <br />
                  {data.strIngredient6}
                  <br />
                  {data.strIngredient7}.
                  <br />
                  {data.strIngredient8}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </DialogContent>
        <DialogActions>
          <Button sx={{ color: "#ff914b" }} onClick={handleClose}>
            Back
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FoodDescription;
