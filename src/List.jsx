import propTypes from 'prop-types';

function List(props) {
  // // fruits.sort((a, b) => a.name.localeCompare(b.name)); // Alphabetical
  // // fruits.sort((a, b) => b.name.localeCompare(a.name)); // Reverse Alphabetical
  // // fruits.sort((a, b) => a.calories - b.calories); // Calories Numeric
  // fruits.sort((a, b) => b.calories - a.calories); // Calories Numeric

  // const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);
  // const highCalFruits = fruits.filter((fruit) => fruit.calories >= 100);
  const category = props.category;
  const itemList = props.items;

  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp;
      <b>{item.calories}</b>
    </li>
  ));

  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{listItems}</ol>
    </>
  );
}

List.propTypes = {
  category: propTypes.string,
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      name: propTypes.string,
      calories: propTypes.number,
    })
  ),
};

List.defaultProps = {
  category: 'category',
  items: [],
};

export default List;
