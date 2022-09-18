import Typography from "@mui/material/Typography";

const Title = ({ tag, classes, name, ...rest }) => {
  return (
    <Typography
      align="center"
      variant={tag}
      sx={{ padding: "30px 30px 30px 16px", width: "459px", margin: "0 auto" }}
      {...rest}
    >
      {name}
    </Typography>
  );
};

export default Title;
