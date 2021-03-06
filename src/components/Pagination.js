import React from 'react'

const Pagination = ({page, onPageChange}) => {
    return (
        <div>
            <div className="row d-flex justify-content-center m-3">
                <nav>
                    <ul className="pagination">
                        <li className={`page-item ${page.first ? 'disabled' : ''} `}>
                            <button className="page-link" onClick={() => onPageChange(page.number -1) }>Anterior</button>
                        </li>
                        <li className="page-item disabled">
                            <span className="page-link">{page.number + 1}</span>
                        </li>
                        <li className={`page-item ${page.last ? 'disabled' : ''}`}>
                            <button className="page-link" onClick={() => onPageChange(page.number +1) }>Próxima</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Pagination
