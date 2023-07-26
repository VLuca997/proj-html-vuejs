import { reactive } from 'vue';

export const store = reactive({
        //valori condivisi globalmente
        TeamMatches:[
            {
                id:1,
                timing:{
                    timestamp: 'October 20,2022 17:00 pm'
                },
                stadium: 'Expert Stadium',
                homeTeam:{
                    img: "./src/assets/img/club-3.png",
                    name: 'Shalke Club'
                },
                awayteam:{
                    img: "./src/assets/img/club-4.png",
                    name: 'Inter Club'
                }
            },
            {
                id:2,
                timing:{
                    timestamp: 'September 18,2022 21:00 pm'
                },
                stadium: 'Expert Stadium',
                homeTeam:{
                    img: "./src/assets/img/club-9.png",
                    name: 'Atletico Club'
                },
                awayteam:{
                    img: "./src/assets/img/club-6.png",
                    name: 'Shalked Club'
                }
            },
            {
                id:3,
                timing:{
                    timestamp: 'August 3,2022 19:00 pm'
                },
                stadium: 'Expert Stadium',
                homeTeam:{
                    img: "./src/assets/img/club-2.png",
                    name: 'United Fs Club '
                },
                awayteam:{
                    img: "./src/assets/img/club-8.png",
                    name: 'Bayern Club'
                }
            },
            {
                id:4,
                timing:{
                    timestamp: 'July 8,2022 12:00 pm'
                },
                stadium: 'Expert Stadium',
                homeTeam:{
                    img: "./src/assets/img/club-7.png",
                    name: 'Arsenal Club'
                },
                awayteam:{
                    img: "./src/assets/img/club-9.png",
                    name: 'Atletico Club'
                }
            },
            {
                id:5,
                timing:{
                    timestamp: 'June 12,2022 09:00 am'
                },
                stadium: 'Expert Stadium',
                homeTeam:{
                    img: "./src/assets/img/club-1.png",
                    name: 'Instanbul Club'
                },
                awayteam:{
                    img: "./src/assets/img/club-2.png",
                    name: 'United Fs Club Club'
                }
            },
            
        ],

});