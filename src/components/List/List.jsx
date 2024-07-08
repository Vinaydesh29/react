function List(props) {
  return (
    <table width="300" border={"2"} cellPadding="5" cellSpacing="2">
      <thead>
        <tr>
          <th>st_id</th>
          <th>st_name</th>
          <th>st_age</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default List;
