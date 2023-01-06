import "../../style/news.css";

export default function News(props) {
  return (
    <div className="news">
      <div className="news_img">
        <img src={props.image} alt="" />
      </div>
      <div className="news_text">
        <h3>{props.title}</h3>
        <p className="description">{props.description}</p>
        <button>Read More</button>
      </div>
    </div>
  );
}
