import "./styles.css";

const Records = () => {
  return (
    <div className="page-container">
      <table className="records-table" cellPadding="0" cellSpacing="0">
        <thead>
          <tr>
            <th>INSTANTE</th>
            <th>NOME</th>
            <th>IDADE</th>
            <th>PLATAFORMA</th>
            <th>GÊNERO</th>
            <th>TÍTULO DO GAME</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>20/08/2020 13:45</td>
            <td>João da Silva</td>
            <td>23</td>
            <td>Playstation</td>
            <td>Ação - Aventura</td>
            <td>The Last of Us 2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Records;
