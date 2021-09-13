import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { members } from "../../Members";

const Customer = () => {
  let { id } = useParams();

  const member = members.find((member) => member.id === id);

  return (
    <div>
      <h1>Detalhes do cliente</h1>

      <p>Nome: {member && member.name}</p>

      <Link className="link" to="/">
        Voltar
      </Link>
    </div>
  );
};

export default Customer;
