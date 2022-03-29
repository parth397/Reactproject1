import React from "react";

function dataFetch() {
  const data = [
    {
      name: "Dev Patel",
      email: "dev212001@gmail.com",
      password: "Dev@123",
      mobile: 9428592869,
      college: "Alpha Engg",
    },
    {
      name: "Rutvik Patel",
      email: "rutvik7070@gmail.com",
      password: "Rutvik@123",
      mobile: 9428592870,
      college: "Alpha Engg",
    },
    {
      name: "Anuj Patel",
      " email": "anuj3030@gmail.com",
      password: "Anuj@123",
      mobile: 9428592871,
      college: "Alpha Engg",
    },
    {
      name: "Rutvik Patel",
      email: "rutvik123@gmail.com",
      password: "Rutvikpatel@123",
      mobile: 942859272,
      college: "SSIT",
    },
    {
      name: "Parth Parikh",
      email: "parth123@gmail.com",
      password: "Parth@123",
      mobile: 942859273,
      college: "SSIT",
    },
    {
      name: "Akshay vagela",
      email: "akshayvagela@gmail.com",
      password: "Akshay@123",
      mobile: 9428592874,
      college: "SSIT",
    },
    {
      name: "Nihar Patel",
      email: "nihar@gmail.com",
      password: "Nihar@123",
      mobile: 9428592875,
      college: "AIT",
    },
    {
      name: "Viashal vyas",
      email: "vaishal@gmail.com",
      password: "vaishal@123",
      mobile: 9428592876,
      college: "SSIT",
    },
    {
      name: "Yashwini thakur",
      email: "yashwini@gmail.com",
      " password": "Yashwini@123",
      mobile: 9428592877,
      college: "LJ",
    },
    {
      name: "Rajvi",
      email: "rajvi@gmail.com",
      password: "rajvi@123",
      mobile: 9428592878,
      college: "LJ",
    },
  ];
  return (
    <div>
      {data.map(function (b, idv) {
        return <li key={idv}>{b.name}</li>;
      })}
    </div>
  );
}
export default dataFetch;
