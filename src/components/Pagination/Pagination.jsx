/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Pagination.scss";
export default function Pagination(props) {
  const pageNumber = [];
  for (
    let i = 1;
    i <= Math.ceil(props.totalCourse / props.coursePerPage);
    i++
  ) {
    pageNumber.push(i);
  }
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {props.currentPage === 1 ? (
          <li className="page-item disabled pagination__item">
            <a className="page-link" tabindex="-1">
              &laquo;
            </a>
          </li>
        ) : (
          <li className="pagination__item">
            <a
              className="page-link"
              onClick={() => {
                props.changeCurrentPage(props.currentPage - 1);
              }}
              tabindex="-1"
            >
              &laquo;
            </a>
          </li>
        )}
        {pageNumber.map(item => {
          if (item === props.currentPage) {
            return (
              <li className="page-item active pagination__item">
                <a
                  onClick={() => {
                    props.changeCurrentPage(item);
                  }}
                  className="page-link pagination__link"
                >
                  {item}
                </a>
              </li>
            );
          } else {
            return (
              <li className=" pagination__item">
                <a
                  className="page-link pagination__link"
                  onClick={() => {
                    props.changeCurrentPage(item);
                  }}
                >
                  {item}
                </a>
              </li>
            );
          }
        })}
        {props.currentPage === pageNumber.length ? (
          <li className="pagination__item page-item disabled">
            <a className="page-link pagination__link" tabindex="-1">
              &raquo;
            </a>
          </li>
        ) : (
          <li className="pagination__item page-item">
            <a
              className="page-link pagination__link"
              onClick={() => {
                props.changeCurrentPage(props.currentPage + 1);
              }}
              tabindex="-1"
            >
              &raquo;
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}
