import { Box, Button } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import FoodDescription from "../Components/FoodDescription";
import "./Main.css";

const Main = () => {
  const [food, setFood] = useState([]);
  const [search, setSearch] = useState("");
  const [desc, setDesc] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [openBack, setOpenBack] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getFood = useCallback(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => res.json())
      .then((result) => setFood(result.meals))
      .catch((err) => console.log(err));
  }, []);

  const getSearchResult = (search) => {
    if (search === "") {
      alert("Enter ingredient to be searched");
    } else {
      setOpenBack(true);
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then((res) => res.json())
        .then((result) => setFood(result.meals))
        .catch((err) => console.log(err));
    }
  };

  console.log(food);

  useEffect(() => {
    getFood();
  }, [getFood]);

  console.log(search);

  const handleRedirect = (data) => {
    setDesc([data]);
    console.log(desc);
    handleClickOpen();
  };

  const handleVideo = (strLink) => {
    console.log(strLink);
    const videoLink = document.createElement("a");
    videoLink.href = strLink;
    videoLink.target = "_blank";
    document.body.append(videoLink);
    videoLink.click();
    videoLink.remove();
  };

  const handleBack = () => {
    setOpenBack(false);
    document.getElementById("search").value = "";
    getFood();
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(to right,#e6e9f0,#eef1f5)",
      }}
    >
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        <Typography variant="h3" sx={{ color: "#ff914b" }}>
          Recepies
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "15px",
        }}
      >
        <input
          name="search"
          id="search"
          placeholder="Search recepies..."
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "300px",
            borderRadius: "8px",
            border: "1px solid grey",
          }}
        />
        &nbsp;&nbsp;&nbsp;
        <Button
          variant="contained"
          sx={{ backgroundColor: "#ff914b" }}
          onClick={() => getSearchResult(search)}
        >
          Search
        </Button>
      </Box>
      <Box>
        {" "}
        <Typography gutterBottom variant="h6">
          Search Results : {food.length}
        </Typography>
        {openBack && (
          <Button
            variant="contained"
            size="small"
            sx={{ backgroundColor: "#ff914b" }}
            onClick={handleBack}
          >
            back
          </Button>
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {food?.map((data) => (
          <Card
            sx={{
              maxWidth: 345,
              margin: "5px",
              background: "linear-gradient(to right,#f5f7fa,#c3cfe2)",
            }}
          >
            <CardActionArea onClick={() => handleRedirect(data)}>
              <CardMedia
                component="img"
                height="140"
                image={data.strMealThumb}
                alt="green iguana"
              />
              <CardContent sx={{ minHeight: "200px" }}>
                <Typography
                  sx={{ color: "#ff914b" }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  {data.strMeal}
                </Typography>
                <Typography variant="body3" color="text.secondary">
                  Category : {data.strCategory}&nbsp;&nbsp;&nbsp; Area :{" "}
                  {data.strArea}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ marginTop: "5px" }}
                  color="text.secondary"
                >
                  {data.strInstructions.slice(0, 100)}...
                </Typography>
              </CardContent>
            </CardActionArea>
            <Button
              variant="contained"
              onClick={() => handleVideo(data.strYoutube)}
              sx={{ margin: "15px", backgroundColor: "#ff914b" }}
            >
              Watch video
            </Button>
          </Card>
        ))}
      </Box>
      {open && (
        <FoodDescription desc={desc} open={open} handleClose={handleClose} />
      )}
    </Box>
  );
};

export default Main;
