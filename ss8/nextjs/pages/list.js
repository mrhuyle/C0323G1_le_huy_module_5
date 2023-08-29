import getAll from "./data";

const data = getAll();

const List = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Confirm</th>
          <th>Active</th>
          <th>Recovered</th>
          <th>Death</th>
        </tr>
      </thead>
      <tbody>
        {data.map((data) => {
          return (
            <>
              <tr key={data.id}>
                <td>{data.date}</td>
                <td>{data.confirmed}</td>
                <td>{data.active}</td>
                <td>{data.recovered}</td>
                <td>{data.deaths}</td>
              </tr>
            </>
          );
        })}
      </tbody>
    </table>
  );
};
export default List;
