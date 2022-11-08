import React from "react";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Chart } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Earned",
      data: [Math.floor(Math.random() * 330) + 1, Math.floor(Math.random() * 530) + 1, Math.floor(Math.random() * 850) + 1, Math.floor(Math.random() * 410) + 1, Math.floor(Math.random() * 440) + 1, Math.floor(Math.random() * 650) + 1],
      fill: true,
      borderColor: "rgba(75,192,192,1)",
      backgroundColor: "rgba(75,192,192,0.2)"
    },
    {
      label: "Spent",
      data: [Math.floor(Math.random() * 330) + 1, Math.floor(Math.random() * 530) + 1, Math.floor(Math.random() * 850) + 1, Math.floor(Math.random() * 410) + 1, Math.floor(Math.random() * 440) + 1, Math.floor(Math.random() * 650) + 1],
      fill: true,
      borderColor: "#742774",
      backgroundColor: "rgb(116, 39, 116, 0.2)"
    }
  ]
};

export default function CoinsGraph() {
  return (
    <div className="lg:w-4/12 lg:mx-10">
      <div className="dashboard-box rounded-lg lg:h-fit lg:mx-5 lg:py-5">
            <div className="lg:w-11/12 lg:h-11/12" >
                <Line data={data}/>
            </div>   
      </div>
      <div className="dashboard-box lg:mx-5 lg:mt-5 my-5 lg:my-0 rounded-lg">
          <p className="text-center font-Bebas text-4xl py-2">Updates!</p>
          <div className="overflow-y-scroll lg:h-[220px] purchases">
            <p className="border-y-[1px] border-gray-600 text-center py-2">Games are temporarily under maintainance</p>
            <p className="border-b-[1px] border-gray-600 text-center py-2">The first ReTrend pass is releasing on 15 Nov 2022</p>
            <p className="border-b-[1px] border-gray-600 text-center py-2">Redeem shop refreshes every month</p>
            <p className="border-b-[1px] border-gray-600 text-center py-2">Will our webapp win EXUN 2022?</p>
            <p className="border-b-[1px] border-gray-600 text-center py-2">Are you really reading this?</p>
            <p className="border-b-[1px] border-gray-600 text-center py-2">Team INT_Elligence is the best.</p>
          </div>
      </div>  
    </div>
  );
}