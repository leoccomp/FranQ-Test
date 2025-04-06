import { Line } from "react-chartjs-2";
import { IChartProps } from "../types";

function Chart({ data, name = "" }: IChartProps) {
  return (
    <div className="bg-white p-4 rounded shadow w-full">
      <h2 className="text-lg font-semibold mb-4">Histórico de {name}</h2>
      <Line data={data} />
    </div>
  );
}

export default Chart;