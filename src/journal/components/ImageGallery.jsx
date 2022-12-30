import { Box, Grid, ImageList, ImageListItem } from "@mui/material";

export const ImageGallery = ({ images }) => {
  return (
    <Box
      sx={{
        width: "70%",
        height: "100%",
        marginLeft: "15%",
      }}
    >
      <ImageList variant="masonry" cols={3} gap={8}>
        {images.map((image) => (
          <ImageListItem key={image}>
            <img
              src={`${image}?w=248&fit=crop&auto=format`}
              srcSet={`${image}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt="image note"
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};
