import "../style/body.css";
import Top from "./body/Top";
import News from "./body/News";
import { Data } from "../util/Data";

export default function Body() {
  return (
    <div className="container">
      <div className="body">
        <Top />
        <div className="section">
          {Data.map((unit) => (
            <News
              title={unit.title}
              image={unit.image}
              description={unit.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
