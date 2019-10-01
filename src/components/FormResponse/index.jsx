import React from "react";

import { DataTable, DataTableTh, DataTableTd } from "./style";

const FormResponse = () => {
  const inputVals = JSON.parse(localStorage.getItem("inputVals"));

  return (
    <React.Fragment>
      {inputVals === null ? (
        <h3>There`&apos;`s no data to display</h3>
      ) : (
        <DataTable>
          <thead>
            <tr>
              <DataTableTh>Input Name</DataTableTh>
              <DataTableTh>User Data</DataTableTh>
            </tr>
          </thead>
          <tbody>
            {Object.keys(inputVals).map((inputName, index) => {
              const inputVal = inputVals[inputName];

              return (
                <tr key={index}>
                  <DataTableTd>{inputVal.label}</DataTableTd>
                  <DataTableTd>
                    {Array.isArray(inputVal.value)
                      ? inputVal.value.join(" / ")
                      : inputVal.value}
                  </DataTableTd>
                </tr>
              );
            })}
          </tbody>
        </DataTable>
      )}
    </React.Fragment>
  );
};

export default FormResponse;
