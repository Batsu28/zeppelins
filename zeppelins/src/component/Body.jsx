import "../style/body.css";
import Top from "./body/Top";
import News from "./body/News";

export default function Body() {
  return (
    <div className="container">
      <div className="body">
        <Top />
        <News />
      </div>
    </div>
  );
}
