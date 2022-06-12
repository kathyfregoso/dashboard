const Table = ({
  columns = [{ name: "header", property: "value" }],
  rows = [{ id: 1, value: "cell" }],
  className = "table",
}) => {
  // format the header cells
  // map through columns array of objects
  const headerCells = columns.map((col) => {
    return <th key={col.name}>{col.name}</th>;
  });

  // format body rows
  // map the rows array of objects
  // for each row
  // get the value
  // return td (data/value)
  // once mapped, return tr with rows
  const bodyRows = rows.map((row) => {
    const rows = columns.map((col) => {
      const value = row[col.property];
      return <td key={col.property + value}>{value}</td>;
    });
    return <tr key={Object.values(row).join(":")}>{rows}</tr>;
  });
  return (
    <div>
      <h2>All Customers</h2>
      <table>
        <thead>
          <tr>{headerCells}</tr>
        </thead>
        <tbody>{bodyRows}</tbody>
      </table>
    </div>
  );
};

export default Table;
