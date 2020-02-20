import React, { useState } from "react";

export default () => {
  const [cart, updateCart] = useState([]);
  const [item, updateItem] = useState({ name: "apple", count: 2 });
  const [count, updateCount] = useState(0);

  //   try without function also...
  const handleUpdateCart = ({ name, count }) => {
    updateCart([...cart, { name, count }]);
  };

  const cartHTML = cart.map((item, idx) => (
    <tr key={idx}>
      <td>{item.name}</td>
      <td>{item.count}</td>
    </tr>
  ));

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <p>{count}</p>
        <button onClick={() => updateCount(prevCount => prevCount + 1)}>
          Add one
        </button>
        <button onClick={() => updateCount(prevCount => prevCount - 1)}>
          Subtract one
        </button>
      </div>

      <h1>Update your shopping cart</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          handleUpdateCart(item);
        }}
      >
        <label htmlFor="itemName">Name</label>
        <input
          type="text"
          id="itemName"
          name="itemName"
          onChange={e => updateItem({ ...item, name: e.target.value })}
          value={item.name}
        />
        <label htmlFor="itemCount">Amount</label>
        <input
          type="number"
          id="itemCount"
          name="itemCount"
          onChange={e => updateItem({ ...item, count: e.target.value })}
          value={item.count}
        />
        <button type="submit">Add</button>
      </form>
      <table style={{ margin: "auto" }}>
        <thead>
          <tr>
            <th>Item name</th>
            <th>Item count</th>
          </tr>
        </thead>
        <tbody>{cartHTML}</tbody>
      </table>
    </>
  );
};
