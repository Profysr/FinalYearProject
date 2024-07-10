import React from "react";
import "./table.css";
import { CustomButton } from "../input/input";

const tableData = [
  {
    id: 1,
    name: "Bilal Ahmad",
    email: "Sp21-bse-004",
    message: "subject of the message",
    status: "Pending",
  },
  {
    id: 2,
    name: "Bilal Ahmad",
    email: "Sp21-bse-004",
    message: "subject of the message",
    status: "Pending",
  },
  {
    id: 3,
    name: "Bilal Ahmad",
    email: "Sp21-bse-004",
    message: "subject of the message",
    status: "Pending",
  },
];
const Table = () => {
  return (
    <div class="table" id="customers_table">
      <div class="table__header">
        <div className="table_header__content">
          <h1>Heading</h1>
          <p className="supporting-text">Supporting Text if any</p>
        </div>
        <CustomButton text={"Filter"} />
      </div>
      <div class="input-group">
        <div class="group">
          <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
            <g>
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
          </svg>
          <input placeholder="Search" type="search" class="input" />
        </div>
      </div>
      <section class="table__body">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Message</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data) => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>
                  <div class="sidebar__account">
                    <img
                      src="assets/img/perfil.png"
                      alt="sidebar image"
                      class="sidebar__perfil"
                    />

                    <div class="sidebar__names">
                      <h3 class="sidebar__name">{data.name}</h3>
                      <span class="sidebar__email">{data.email}</span>
                    </div>
                  </div>
                </td>
                <td>{data.message}</td>
                <td>{data.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Table;
