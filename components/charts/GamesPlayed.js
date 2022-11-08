import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut, Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function GamesPlayed(){

    const data = {
        labels: ['Retro Snake Game', 'Super Mario', 'Tetris', 'Flappy bird', 'Tekken', 'GTA'],
        datasets : [
            {
                label: 'Total number hours played',
                data : [10, 43, 56, 20, 10, 5],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.4)',
                    'rgba(54, 162, 235, 0.4)',
                    'rgba(255, 206, 86, 0.4)',
                    'rgba(75, 192, 192, 0.4)',
                    'rgba(153, 102, 255, 0.4)',
                    'rgba(255, 159, 64, 0.4)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
            
        ],
    }

    return(
        <div className="lg:w-4/12 dashboard-box rounded-lg my-5 lg:my-0 lg:ml-16 text-center font-Inter">
            <h1 className="mt-4">Games Played {`(in hours)`}</h1>
            <div className="lg:w-11/12 lg:py-5 w-48 mx-auto" >
                <Pie data={data}/>
            </div>
        </div>
    )
}