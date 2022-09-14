import Typography from "@mui/material/Typography";

const Title = ({ name, tag, classes }) => {
  return (
    <Typography variant={tag} classes={classes}>
      {name}
    </Typography>
  );
};

export default Title;
