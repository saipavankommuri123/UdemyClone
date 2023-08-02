import "./MostPopularList.css";

const MostPopularList = ({ categories }) => {
  return (
    <>
      <div className="most-popular-list">
        <ul >{categories["ud-main"].items.slice(0, 10).map((item) => {
            return <li>{item.sd_tag.title} <span className="popular-list-arrow">&gt;</span></li>
        })}</ul>
      </div>
    </>
  );
};

export default MostPopularList;
