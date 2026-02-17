"use client";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: [
    "Community & Airdrops",
    "Ecosystem Growth",
    "Liquidity Provision",
    "Team (Vested)",
    "Marketing & Partnerships",
    "Development & Treasury",
  ],
  datasets: [
    {
      data: [20, 25, 20, 15, 10, 10],
      backgroundColor: [
        "#7B6CFF",
        "#4DA3FF",
        "#2E6FFF",
        "#9AA0B5",
        "#6C63FF",
        "#3A3F66",
      ],
      borderWidth: 0,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      position: "bottom" as const,
      labels: {
        color: "#9AA0B5",
        padding: 20,
      },
    },
    tooltip: {
      callbacks: {
        label: (context: { label: string; parsed: number }) =>
          `${context.label}: ${context.parsed}%`,
      },
    },
  },
};

export default function TokenomicsChart() {
  return (
    <div className="mx-auto max-w-md">
      <Doughnut data={data} options={options} />
    </div>
  );
}
