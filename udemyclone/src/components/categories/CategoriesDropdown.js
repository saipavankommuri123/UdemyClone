import "./CategoriesDropdown.css";

const CategoriesDropdown = ({ categories }) => {
  return (
    <>
      <ul className="categories-dropdown">
        {categories["ud-main"].items.map((i) => (
          <li className="categories-dropdown-item">
            <span className="list1-span">{i.sd_tag.title} <span className="list-arrow">&gt;</span></span>
            {i.sublist && (
              <ul className="categories-dropdown2">
                {i.sublist.items.map((k) => (
                  <li li className="categories-dropdown-item2">
                    {k.sd_tag.title}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default CategoriesDropdown;
