import React from "react";
import PropTypes from "prop-types";

function Pagination({ page, setPage, pages: total_pages }) {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <a
            className="page-link"
            href="#"
            aria-label="Previous"
            onClick={() => {
              if (page <= 0) {
                return;
              }
              setPage(page - 1);
            }}
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            {page} of {total_pages}
          </a>
        </li>

        <li className="page-item">
          <a
            className="page-link"
            href="#"
            aria-label="Next"
            onClick={() => {
              if (page >= 36553) {
                return;
              }
              setPage(page + 1);
            }}
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

Pagination.propTypes = {};

export default Pagination;
