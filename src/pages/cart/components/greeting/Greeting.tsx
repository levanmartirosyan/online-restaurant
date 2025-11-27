import "./Greeting.scss";

type Props = {
  text: string;
};

const Greeting = ({ text }: Props) => {
  return (
    <section className="greetingCart">
      <h1>{text}</h1>
    </section>
  );
};

export default Greeting;
