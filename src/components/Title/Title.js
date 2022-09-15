import Typography from "@mui/material/Typography";

const Title = ({ tag, classes, name, ...rest }) => {
  return (
    <Typography variant={tag} classes={classes} {...rest}>
      {name}
    </Typography>
  );
};

export default Title;
