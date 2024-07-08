function Table(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>S_no</th>
          <th>Product</th>
          <th>Quantity</th>
          <th>Unit_price</th>
          <th>Total_price</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((num, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{num.product}</td>
              <td>{num.quantity}</td>
              <td>{num.unit_price}</td>
              <td>{num.quantity * num.unit_price}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default Table;
