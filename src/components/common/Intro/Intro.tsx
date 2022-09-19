import React from "react";
import Title from "../Title/Title";

interface IIntro {
  title: string;
}

const Intro: React.FC<React.PropsWithChildren<IIntro>> = ({
  title,
  children,
}) => {
  return (
    <div>
      <Title variant="h5" name={title} />
      {children}
    </div>
  );
};

export default Intro;
