<script>
import { store } from '../store';//IMPORTO STORE.JS CON "DESTRUCTURING"

// my-component.js
export default {
    data() {
        return {
            store,
            backgroundColors: [
                
                    'rgb(243, 243, 243)', 'rgb(235, 235, 235)'
                
                
            ],
            singleTeam:[
            {
                img: 'src/assets/img/club-1.png',
                name: 'Instanbul Sports',
                w: '18',
                d: '2',
                l:'0',
                pts: '42',
            },
            {
                img: 'src/assets/img/club-2.png',
                name: 'United Fs Club',
                w: '14',
                d: '2',
                l:'1',
                pts: '35',
            },
            {
                img: 'src/assets/img/club-3.png',
                name: 'Shalke Club',
                w: '13',
                d: '3',
                l:'0',
                pts: '32',
            },
            {
                img: 'src/assets/img/club-4.png',
                name: 'Inter Club',
                w: '13',
                d: '2',
                l:'1',
                pts: '31',
            },
            {
                img: 'src/assets/img/league-club-5.png',
                name: 'Madrid Club',
                w: '12',
                d: '1',
                l:'2',
                pts: '30',
            },
            {
                img: 'src/assets/img/club-6.png',
                name: 'Shalked Club',
                w: '11',
                d: '0',
                l:'3',
                pts: '28',
            },
            {
                img: 'src/assets/img/club-7.png',
                name: 'Arsenal Club',
                w: '10',
                d: '5',
                l:'0',
                pts: '26',
            },
            {
                img: 'src/assets/img/club-8.png',
                name: 'Bayern Club',
                w: '10',
                d: '2',
                l:'2',
                pts: '24',
            },
            {
                img: 'src/assets/img/club-9.png',
                name: 'Atletico Club',
                w: '09',
                d: '0',
                l:'4',
                pts: '20',
            },
        ]
        }
    },
}
</script>

<template >
    <div class="table-container d-flex justify-content-evenly py-3">
        
        <!-- LEFT TABLE LEAGUE -->
        <div class="table-left">
            <h2 class="text-center py-5">TEXT</h2>
            <table class="table table-borderless">
                <thead class="left">
                    <tr>
                        <th scope="col" colspan="12">Team</th>
                        <th scope="col">W</th>
                        <th scope="col">D</th>
                        <th scope="col">L</th>
                        <th scope="col">PTS</th>

                    </tr>
                </thead>
                <tbody class="body-left">
                    <tr v-for="(team, index) in singleTeam" :key="index">
                        <th scope="row">{{ index + 1 }}</th>
                        <td class="p-0">
                        <img :src="team.img" :alt="team.name" />
                            {{ team.name }}
                        </td>
                        <td class="px-5" colspan="10"></td>
                        <td class="">{{ team.w }}</td>
                        <td>{{ team.d }}</td>
                        <td>{{ team.l }}</td>
                        <td>{{ team.pts }}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="100" class="text-light bg-black text-center"><strong>View Full League Table</strong></td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>
        </div>


        <!-- RIGHT TEAMS VERSUS -->
        <div class="table-right">
            <h2 class="text-center py-5">TEXT</h2>
            <div class="print-clear" v-for="(match, index) in store.versus" :key="index">
                <div class="card-matches d-flex justify-content-center p-0"
                v-if="index < 9"
                :style="{ backgroundColor: backgroundColors[index % backgroundColors.length] }">
                    <div class="home d-flex">
                        <span><img :src="match.homeTeam.img" :alt="match.homeTeam.name" /></span>
                        <p>{{ match.homeTeam.name }}</p>
                    </div>
                    <div class="versus d-flex text-center">
                        <p>VS</p>
                    </div>
                    <div class="transfert d-flex">
                        <p class="">{{ match.awayteam.name }}</p>
                        <img :src="match.awayteam.img" alt="" />
                    </div>
                </div>
            </div>
            
            <div class="full-view d-flex text-light bg-black">
                <p>View Full Fixtures</p>
            </div>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>

    img{
        width: 30px;
    }
    .left th {
            background-color: black;
            color: white;
    }
    .card-matches{
            background-color: rgba(0, 0, 0, 0.2);
            box-shadow: 5px 5px 10px #0c0c0c62;
            border: 1px solid rgba(0, 0, 0, 0.5);

            padding: 5px;
                .home,.transfert,.versus{
                    align-items: center;
                            &.versus{
                                font-size: 1.8rem;
                                padding: 0 80px;
                            }
                            p{
                                margin: 0;
                            }
                            
                }
        }
        .full-view{
            text-align: center;
            padding: 7px 0;
            justify-content: center;
            p{
                font-weight: bold;
                margin: 0;
            }
        }
    .table-right,.table-left{
        padding: 0 40px;
        width: 100vw;
    }
   
</style>