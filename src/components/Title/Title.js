import Typography from "@mui/material/Typography";

const Title = ({ name, size, classes }) => {
  return (
    <Typography variante={size} classes={classes}>
      {name}
    </Typography>
  );
};

export default Title;
