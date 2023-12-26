import React from "react";
// import DataTable from "react-data-table-component";
import { column, data } from "../../data/column";
import { TableWrapper } from "./table.style";

const Table = () => {
  return (
    <div>
      {/* <DataTable columns={column} data={data} selectableRows /> */}
      <TableWrapper>
        <thead>
          <tr>
            <th style={{ paddingLeft: "20px" }}>
              <input type="checkbox" />
              &nbsp;
            </th>
            {column.map((column, i) => (
              <th key={column.name}>{column.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr>
              <td style={{ paddingLeft: "20px", alignItems: "center" }}>
                <input type="checkbox" />
                &nbsp;
              </td>
              <td>{row.id}</td>
              <td>{row.received}</td>
              <td>{row.department}</td>
              <td>{row.title}</td>
              <td>{row.summary}</td>
              <td>
                <div
                  style={{
                    backgroundColor: "#FDC03A",
                    width: "135px",
                    borderRadius: "10px",
                    height: "42px",
                    display: "flex",
                    gap: "6px",
                    alignItems: "center",
                    color: "#FFFFFF",
                    fontSize: "13px",
                    fontFamily: "Work Sans",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1_1550)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6 8C6 6.4087 6.63214 4.88258 7.75736 3.75736C8.88258 2.63214 10.4087 2 12 2C13.5913 2 15.1174 2.63214 16.2426 3.75736C17.3679 4.88258 18 6.4087 18 8H19C19.5304 8 20.0391 8.21071 20.4142 8.58579C20.7893 8.96086 21 9.46957 21 10V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V10C3 9.46957 3.21071 8.96086 3.58579 8.58579C3.96086 8.21071 4.46957 8 5 8H6ZM12 4C13.0609 4 14.0783 4.42143 14.8284 5.17157C15.5786 5.92172 16 6.93913 16 8H8C8 6.93913 8.42143 5.92172 9.17157 5.17157C9.92172 4.42143 10.9391 4 12 4ZM14 14C14 14.3511 13.9076 14.6959 13.732 15C13.5565 15.304 13.304 15.5565 13 15.732V17C13 17.2652 12.8946 17.5196 12.7071 17.7071C12.5196 17.8946 12.2652 18 12 18C11.7348 18 11.4804 17.8946 11.2929 17.7071C11.1054 17.5196 11 17.2652 11 17V15.732C10.6187 15.5119 10.3208 15.1721 10.1523 14.7653C9.98384 14.3586 9.95429 13.9076 10.0682 13.4824C10.1822 13.0571 10.4333 12.6813 10.7825 12.4133C11.1318 12.1453 11.5597 12 12 12C12.5304 12 13.0391 12.2107 13.4142 12.5858C13.7893 12.9609 14 13.4696 14 14Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_1550">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  {row.quotes}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </TableWrapper>
    </div>
  );
};

export default Table;
