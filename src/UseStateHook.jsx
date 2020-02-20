import React, { useState } from "react";

export default () => {
  const [cart, updateCart] = useState([]);
  const [item, updateItem] = useState({});

  //   try without function also...
  const handleUpdateCart = ({ name, count }) =>
    updateCart(() => [...cart, { [name]: count }]);

  const cartHTML = cart =>
    cart.map((item, idx) => (
      <tr key={idx}>
        <td>{item.name}</td>
        <td>{item.count}</td>
      </tr>
    ));

  return (
    <>
      <h1>Update your shopping cart</h1>
      <form onSubmit={() => handleUpdateCart(item)}>
        <input
          type="text"
          id="itemName"
          name="itemName"
          onChange={e => updateItem({ name: e.target.value })}
          value={item.name}
        />
        <input
          type="number"
          id="itemCount"
          name="itemCount"
          onChange={e => updateItem({ count: e.target.value })}
          value={item.count}
        />
        <button type="submit">Add</button>
      </form>
      <table>
          <thead>
              <tr>
                  <th>Item name</th>
                  <th>Item count</th>
              </tr>
          </thead>
          <tbody>
              {cartHTML}
          </tbody>
      </table>
    </>
  );
};
