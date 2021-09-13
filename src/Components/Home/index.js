import { Link } from "react-router-dom";

const Home = ({ members }) => {
  return (
    <nav>
      {members.map((member) => {
        return (
          <ul>
            {member.type === "pj" ? (
              <Link className="link" to={`/company/${member.id}`}>
                <li key={member.id}>{member.name}</li>
              </Link>
            ) : (
              <Link className="link" to={`/customer/${member.id}`}>
                <li key={member.id}>{member.name}</li>
              </Link>
            )}
          </ul>
        );
      })}
    </nav>
  );
};

export default Home;
