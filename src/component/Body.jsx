import "../style/body.css";
import Top from "./body/Top";
import Filter from "./body/Filter";

export default function Body() {
  return (
    <div className="container">
      <div className="body">
        <Top />
        <Filter />
      </div>
    </div>
  );
}
