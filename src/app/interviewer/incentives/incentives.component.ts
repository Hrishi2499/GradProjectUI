

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incentives',
 templateUrl: './incentives.component.html',
   styleUrls: ['./incentives.component.scss']
})
export class IncentivesComponent implements OnInit {
 // title = 'buttons';

  headers = ["  ","Interview Rounds", "Base","Reward",  "Amount"]

  rows = [

    {
      "  " : "Week 1",
      "Date" : "02.01.2022",
      "Interview Rounds" : 6,
      "Base" : 2000,
      "Reward" : 600,
      "Amount" : 2600

    },

    {
      "  " : "Week 1",
      "Date" : "03.01.2022",
      "Interview Rounds" : 5,
      "Base" : 2000,
      "Reward" : 500,
      "Amount" : 2500
    },

    {
      "  " : "Week 1",
    "Date" : "05.01.2022",
    "Interview Rounds" : 3,
    "Base" : 2000,
    "Reward" : 300,
    "Amount" : 2300
      },

      {
        "  " : "Week 2",
      "Date" : "09.01.2022",
      "Interview Rounds" : 5,
      "Base" : 2000,
      "Reward" : 500,
      "Amount" : 2500
        },
    
        {
          "  " : "Week 2",
      "Date" : "10.01.2022",
      "Interview Rounds" : 1,
      "Base" : 2000,
      "Reward" : 100,
      "Amount" : 2100
          },

          {
            "  " : "Week 2",
      "Date" : "11.01.2022",
      "Interview Rounds" : 6,
      "Base" : 2000,
      "Reward" : 600,
      "Amount" : 2600
            },

            {
              "  " : "Week 3",
      "Date" : "15.01.2022",
      "Interview Rounds" : 3,
      "Base" : 2000,
      "Reward" : 300,
      "Amount" : 2300
              },

              {
                "  " : "Week 3",
                "Date" : "17.01.2022",
                "Interview Rounds" : 2,
                "Base" : 2000,
                "Reward" : 200,
                "Amount" : 2200
              },

              {
                "  " : "Week 4",
                "Date" : "18.01.2022",
                "Interview Rounds" : 1,
                "Base" : 2000,
                "Reward" : 100,
                "Amount" : 2100
              },

  ]
  constructor() { }

    ngOnInit(): void {
     }
  
}