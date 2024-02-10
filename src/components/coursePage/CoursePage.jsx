import React, { useContext } from "react";
import coursepagestyle from "./CoursePage.module.css";
import { AllData } from "../context/Context";
import DetailsButton from "../button/DetailsButton.jsx";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

function CoursePage() {
  const { itemdata, selectedlist, setselectedlist, searchlist, setsearchlist } =
    useContext(AllData);

  const handleClick = (item) => {
    setselectedlist(item);
  };

  const getsearchdata = (e) => {
    setsearchlist(e.target.value);
  };

  return (
    <>
      <div>
        {selectedlist.length !== 0 ? (
          <progress
            className={coursepagestyle.progress}
            id="file"
            max="100"
            value="25"
          >
            25%
          </progress>
        ) : (
          <progress
            className={coursepagestyle.progress}
            id="file"
            max="100"
            value="0"
          >
            0%
          </progress>
        )}
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "0rem 2rem 1rem 2rem",
            fontFamily: "Courier New, monospace",
          }}
        >
          Select your Desired Product
        </h1>
        <div className={coursepagestyle.input}>
          <input
            type="text"
            value={searchlist}
            onChange={getsearchdata}
            placeholder="Enter your desired course"
            style={{
              padding: "1.5rem 1rem",
              borderRadius: "25px",
              backgroundColor: "transparent",
              border: "none",
              fontFamily: "Courier New, monospace",
              width: "20%",
            }}
          />
        </div>
        <div className={coursepagestyle.main}>
          <ul className={coursepagestyle.ulist}>
            {searchlist
              ? itemdata
                  .filter((list) =>
                    list.title.toLowerCase().includes(searchlist)
                  )
                  .map((item) => (
                    <li
                      key={item.id}
                      className={coursepagestyle.list}
                      onClick={() => handleClick(item)}
                    >
                      <div>{item.title}</div>
                      <div>{item.category}</div>
                      <div>{item.rating}</div>
                    </li>
                  ))
              : itemdata.map((item) => (
                  <li
                    key={item.id}
                    className={coursepagestyle.list}
                    onClick={() => handleClick(item)}
                  >
                    <div>{item.title}</div>
                    <div>{item.category}</div>
                    <div>{item.rating}</div>
                  </li>
                ))}
          </ul>
        </div>
        <div>
          {selectedlist.length !== 0 ? (
            <Stack
              spacing={2}
              direction="row"
              className={coursepagestyle.stack}
            >
              <div className={coursepagestyle.name}>{selectedlist.title}</div>
              <Link to="/details" className={coursepagestyle.detailbutton}>
                {<DetailsButton />}
              </Link>
            </Stack>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default CoursePage;
