import React from "react";
import { Card, CardMedia, Box, Typography } from "@mui/material";
import asos from '../assets/images/asos.jpg';
import gap from '../assets/images/gap.jpg';
import buda from '../assets/images/buda.jpg';
import zara from '../assets/images/zara.jpg';
import '../assets/css/FeaturedBrands.css'; // optional if you want to keep animations or headings

const brands = [
  {
    name: "ASOS",
    image: asos,
    discount: "UP TO 30% OFF"
  },
  {
    name: "GAP",
    image: gap,
    discount: "UP TO 50% OFF"
  },
  {
    name: "BUDA JEANS CO",
    image: buda,
    discount: "MIN. 60% OFF"
  },
  {
    name: "ZARA",
    image: zara,
    discount: "UP TO 50% OFF"
  }
];

const FeaturedBrands = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom className="twinkle-heading">
        Featured Brands
      </Typography>

      {/* Horizontal scrollable container */}
      <Box
  sx={{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 2,
  }}
>

        {brands.map((brand, index) => (
          <Card
            key={index}
            sx={{
              width: "calc(25% - 16px)", // adjust if you tweak gap
              flexShrink: 0,
              borderRadius: 3,
              overflow: "hidden",
              position: "relative",
              boxShadow: 3,
              "&:hover": {
                boxShadow: 6,
                transform: "scale(1.02)",
                transition: "0.3s"
              }
            }}
          >
            <CardMedia
              component="img"
              height="300"
              image={brand.image}
              alt={brand.name}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                background: "rgba(0,0,0,0.6)",
                color: "#fff",
                textAlign: "center",
                py: 1
              }}
            >
              <Typography variant="subtitle1" fontWeight="bold">
                {brand.name}
              </Typography>
              <Typography variant="body2">{brand.discount}</Typography>
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default FeaturedBrands;
