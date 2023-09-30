import "./styles.css";
import Filters from "../../components/Filters";
import Chart from "react-apexcharts";
import { barOptions, pieOptions } from "./chart-options";

const chartData = [
  {
    x: "Leandro",
    y: 10,
  },
  {
    x: "Juliana",
    y: 15,
  },
  {
    x: "Nélio",
    y: 20,
  },
];

const Charts = () => {
  return (
    <div className="page-container">
      <Filters link="/records" linkText="VER TABELA" />
      <div className="chart-container">
        <div className="top-related">
          <h1 className="top-related-title"> Jogos mais votados</h1>
          <div className="games-container">
            <Chart
              options={barOptions}
              type="bar"
              width="900"
              height="250"
              series={[{ data: chartData }]}
            />
          </div>
        </div>
        <div className="charts">
          <div className="platform-chart">
            <h2 className="chart-title">Plataformas</h2>
            <Chart
              options={{ ...pieOptions, labels: ["Leandro", "Juliana"] }}
              type="donut"
              series={[30, 70]}
              width="350"
            />
          </div>
          <div className="gender-chart">
            <h2 className="chart-title">Gêneros</h2>
            <Chart
              options={{ ...pieOptions, labels: ["Leandro", "Juliana"] }}
              type="donut"
              series={[30, 70]}
              width="350"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
