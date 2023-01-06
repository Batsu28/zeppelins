import News from "../body/News";
import { Data } from "../../util/Data";

const selects = [
  "all",
  "ui design",
  "ux design",
  "product design",
  "articles",
  "totulials",
  "newss",
];

function SelectAll() {
  return Data.map((unit) => (
    <News
      title={unit.title}
      image={unit.image}
      description={unit.description}
    />
  ));
}

export default function Filter() {
  return (
    <div className="filter">
      <div>
        <ul>
          {selects.map((select) => (
            <li>
              <a href="#">{select.toUpperCase()}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="section">{SelectAll()}</div>
    </div>
  );
}
