import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from "react-redux";

ChartJS.register(ArcElement, Tooltip, Legend);



export function App3() {
    const OinfoFromRedux = useSelector((state) => state.OverStore.Oinfo);
    const data = {
        labels: OinfoFromRedux,
        datasets: [
          {
            label: '# of Votes',
            data: OinfoFromRedux,
            backgroundColor: ["#C4D878","#FDCE40","#B3DBCD"],
            borderColor: [
              '#FFF',
              '#FFF',
              '#FFF',
            
            ],
            borderWidth: 1,
          },
        ],
      };
    
    console.log("chart", OinfoFromRedux)
    return <Doughnut data={data} />;
  }
  