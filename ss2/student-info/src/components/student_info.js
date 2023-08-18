import React, { Component } from "react";

class StudentInfoComponent extends Component {
  render() {
    const { students } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.index}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default StudentInfoComponent;
