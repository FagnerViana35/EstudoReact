import React from 'react';

const MAX_ITEMS = 6;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

const Paginacao = ({
  per_page,
  total,
  page,
  onPageChange
}) => {
  const current = page ? page / per_page + 1 : 1;
  const pages = Math.ceil(total / per_page);
  const maxFirst = Math.max(pages - (MAX_ITEMS - 1), 1);
  const first = Math.min(
    Math.max(current - MAX_LEFT, 1),
    maxFirst
  );

  function _onPageChange(page) {
    onPageChange(page);
  }

  return (
    <ul className="pagination">
      <li>
        <button
          onClick={() => _onPageChange(page - 1)}
          disabled={current === 1}
        >
          Anterior
        </button>
      </li>
      {Array.from({ length: Math.min(MAX_ITEMS, pages) })
        .map((_, index) => index + first)
        .map((page) => (
          <li key={page}>
            <button
              onClick={() => _onPageChange(page)}
              className={
                page === current
                  ? 'pagination__item--active'
                  : null
              }
            >
              {page}
            </button>
          </li>
        ))}
      <li>
        <button
          onClick={() => _onPageChange(page + 1)}
          disabled={current === pages}
        >
          Próxima
        </button>
      </li>
    </ul>
  );
};

export default Paginacao;
