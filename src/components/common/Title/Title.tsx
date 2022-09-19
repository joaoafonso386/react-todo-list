import React from "react";
import Typography, { TypographyProps } from "@mui/material/Typography";

interface ITitle extends TypographyProps {
  name: string;
}

const Title: React.FC<ITitle> = ({ name, ...rest }) => {
  return (
    <Typography
      align="center"
      sx={{ padding: "30px 30px 30px 16px", width: "459px", margin: "0 auto" }}
      {...rest}
    >
      {name}
    </Typography>
  );
};

export default Title;
