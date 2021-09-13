import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { members } from "../../Members";

const Company = () => {
  let { id } = useParams();

  const member = members.find((member) => member.id === id);

  return (
    <div>
      <h1>Detalhes da empresa</h1>

      <p>Nome da empresa: {member && member.name}</p>

      <Link className="link" to="/">
        Voltar
      </Link>
    </div>
  );
};

export default Company;
