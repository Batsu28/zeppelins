export default function News(props) {
  return (
    <div className="news">
      <div className="news_img">
        <img src={props.image} alt="" />
      </div>
      <div className="news_text">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
