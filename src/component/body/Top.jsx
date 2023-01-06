import Twitter from "../icons/Twitter";
import LinkedIn from "../icons/LinkedIn";
import Medium from "../icons/Medium";
import "../../style/top.css";

export default function Top() {
  return (
    <div className="top">
      <div className="left">
        <h2>Blog Posts</h2>
        <h2>I think so, this is it. </h2>
        <p>
          Design begins after I begin to think about how to present an
          experience most successfully, whether a button I put in can solve a
          problem. The only point in design is not ui design, if the user does
          not have a good experience at the end of the product, the design will
          be considered unsuccessful in my opinion.
        </p>
        <div>
          <div className="links">
            <a href="#">
              <Twitter />
            </a>
            <a href="#">
              <LinkedIn />
            </a>
            <a href="#">
              <Medium />
            </a>
          </div>
        </div>
      </div>
      <div className="right">
        <img src="./reading.png" alt="reading book" />
      </div>
    </div>
  );
}
