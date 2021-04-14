import React from "react";
import NotCorect from "./NotCorect";
import format from "date-fns/format";

const Table = ({ isIncorect, data, duplicateEmail }) => {
  let dataArr;

  if (!isIncorect) {
    dataArr = data.map((item, index) => {
      let idx;
      data.forEach((res, i) => {
        if (res.email === item.email || res.phone === item.phone) {
          if (i !== index) {
            idx = i + 1;
          }
        }
      });

      const phone = "+1" + item.phone;
      const age = parseInt(item.age);
      const experience = parseInt(item.experience);
      const yearlyincome = parseInt(item.yearlyincome) / 100;
      const licensestates = item.licensestates
        .split(" ")
        .map((item) => item.slice(0, 2))
        .join(" | ");

      const expirationdate = item.expirationdate;
      const haschildren = String(item.haschildren);
      const licensenumber = item.licensenumber;

      const ageStyle = ["info"];
      const expStyle = ["info"];
      const incStyle = ["info"];
      const dateStyle = ["info"];
      const phoneStyle = ["info"];
      const childrenStyle = ["info"];
      const licenseStyle = ["info"];

      item.age < 21 && ageStyle.push("infoAge");
      item.experience > 21 && expStyle.push("infoAge");
      item.yearlyincome > 1000000 && incStyle.push("infoAge");
      item.phone.length > 10 && phoneStyle.push("infoAge");

      typeof item.haschildren === "boolean"
        ? childrenStyle.push("")
        : childrenStyle.push("infoAge");

      if (
        item.expirationdate ===
          format(new Date(item.expirationdate), "yyyy-MM-dd") ||
        item.expirationdate ===
          format(new Date(item.expirationdate), "MM/dd/yyyy")
      ) {
        dateStyle.push("");
      } else {
        dateStyle.push("infoAge");
      }

      return (
        <tr key={index}>
          <td className="info">{index + 1}</td>
          <td className="info">{item.fullname}</td>
          <td className={phoneStyle.join(" ")}>{phone}</td>
          <td className="info">{item.email.toLowerCase()}</td>
          <td className={ageStyle.join(" ")}>{age}</td>
          <td className={expStyle.join(" ")}>{experience}</td>
          <td className={incStyle.join(" ")}>{yearlyincome}</td>
          <td className={childrenStyle.join(" ")}>{haschildren}</td>
          <td className="info">{licensestates}</td>
          <td className={dateStyle.join(" ")}>{expirationdate}</td>
          <td className={licenseStyle.join(" ")}>{licensenumber}</td>
          <td className="info">{idx && idx}</td>
        </tr>
      );
    });
  }

  return (
    <>
      {isIncorect ? (
        <NotCorect />
      ) : (
        <table className="table">
          <thead className="tableData">
            <tr className="tableData">
              <th className="head">ID</th>
              <th className="head">Full Name</th>
              <th className="head">Phone</th>
              <th className="head">Email</th>
              <th className="head">Age</th>
              <th className="head">Experience</th>
              <th className="head">Yearly Income</th>
              <th className="head">Has children</th>
              <th className="head">License states</th>
              <th className="head">Expiration date</th>
              <th className="head">License number</th>
              <th className="head">Duplicate with</th>
            </tr>
          </thead>
          <tbody className="tableData">{dataArr}</tbody>
        </table>
      )}
    </>
  );
};

export default Table;
