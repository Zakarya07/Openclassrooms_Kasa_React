import { useParams } from "react-router-dom";

const Housing = () => {
  let { id } = useParams();

  return (
    <div>
      <h1>Logement {id} </h1>
    </div>
  );
};

export default Housing;
