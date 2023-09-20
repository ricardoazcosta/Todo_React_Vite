
const Filter = () => {
  return (
    <div className="filter">
        <h2>Filtrar:</h2>
        <div className="filter-options">
            <div>
                <p>Status:</p>
                <select>
                    <option value="All">Todas</option>
                    <option value="Completed">Completas</option>
                    <option value="Incomplete">Inconpletas</option>

                </select>
            </div>
            <div>
                <p>Ordem Alfabética</p>
                <button className="btn-filter-asc"></button>
                <button className="btn-filter-desc"></button>
            </div>
        </div>
    </div>
  )
}

export default Filter