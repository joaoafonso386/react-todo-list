import Typography from "@mui/material/Typography";

const Title = ({ tag, classes, name, ...rest }) => {
  return (
    <Typography align="center" variant={tag} sx={{ padding: "30px" }} {...rest}>
      {name}
    </Typography>
  );
};

export default Title;
