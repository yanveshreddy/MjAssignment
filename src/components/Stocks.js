import React, { useState, useEffect } from "react";
import "../index.css";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import "./stocks.css";
// import SearchBar from './SearchBar';
const Stocks = () => {
  const [rowData, setRowData] = useState([]);
  // const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [searchIndustryInput, setSearchIndustryInput] = useState("");
  const [filteredRowData, setFilteredRowData] = useState([]);

  useEffect(() => {
    fetch("http://131.181.190.87:3001/all")
      .then((res) => res.json())
      .then((data) =>
        data.map((stock) => {
          return {
            symbol: stock.symbol,
            name: stock.name,
            industry: stock.industry,
          };
        })
      )
      .then((stocks) => setRowData(stocks));
  }, []);

  const handleSearch = (e) => {
    const searchInput = e.target.value;
    setSearchInput(searchInput);
    const filteredData = rowData.filter((item) => {
      return item.symbol.toLowerCase().search(searchInput.toLowerCase()) !== -1;
    });

    setFilteredRowData(filteredData);
  };

  const handleIndustrySearch = (e) => {
    const searchIndustryInput = e.target.value;
    setSearchIndustryInput(searchIndustryInput);
    const filteredData1 = filteredRowData.filter((item) => {
      return (
        item.industry
          .toLowerCase()
          .search(searchIndustryInput.toLowerCase()) !== -1
      );
    });

    setFilteredRowData(filteredData1);
  };

  const columns = [
    { headerName: "Symbol", field: "symbol" },
    { headerName: "Name", field: "name" },
    { headerName: "Industry", field: "industry" },
  ];

  return (
    <div className="container">
      <div>
        <div className="filters">
          <span>Select Stock</span>
          <span>Industry</span>
        </div>
        <div className="filters">
          <input
            aria-labelledby="search-button"
            name="search"
            id="search"
            type="search"
            value={searchInput}
            autoComplete="off"
            onChange={handleSearch}
          />
          <input
            aria-labelledby="search-button"
            name="isearch"
            id="isearch"
            type="search"
            value={searchIndustryInput}
            autoComplete="off"
            onChange={handleIndustrySearch}
          />
        </div>
      </div>
      <h1>Stock Data</h1>
      <div
        className="ag-theme-balham"
        style={{
          height: "300px",
          width: "601px",
        }}
      >
        <AgGridReact
          columnDefs={columns}
          rowData={filteredRowData.length > 0 ? filteredRowData : rowData}

          //  pagination={true}
          //  paginationPageSize={7}
        />
      </div>
    </div>
  );
};

export default Stocks;
