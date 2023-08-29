import axios from "axios";
export default function List({ data }) {
  return (
    <>
      <h1>USA COVID INFORMATION</h1>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>States</th>
            <th>Positive</th>
            <th>Negative</th>
            <th>Death</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data) => {
            return (
              <>
                <tr key={data.id}>
                  <td>{data.date}</td>
                  <td>{data.states}</td>
                  <td>{data.positive}</td>
                  <td>{data.negative}</td>
                  <td>{data.death}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
export async function getStaticProps() {
  const response = await axios.get(
    `https://api.covidtracking.com/v1/us/daily.json`
  );
  const data = response.data;
  return {
    props: {
      data,
    },
  };
}
