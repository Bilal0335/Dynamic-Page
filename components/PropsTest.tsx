interface Props {
  name: string;
  cast: string;
}

const PropsTest = ({ name, cast }: Props) => {
  return (
    <div>
      <h1>{`Hello My ${name} and belong cast ${cast}`}</h1>
    </div>
  );
};

export default PropsTest;
