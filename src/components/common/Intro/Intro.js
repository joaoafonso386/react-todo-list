import Title from "../Title/Title";

const Intro = ({ title, children }) => {
  return (
    <div>
      <Title variant="h5" name={title} />
      {children}
    </div>
  );
};

export default Intro;
