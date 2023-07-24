<script>
// my-component.js
export default {
    data() {
        return 
    },
}
</script>

<template>

    <div class="header-container bg-warning">

        <div class="my-container">

            <div class="logo">
                <img src="../assets/img/loader-football.png" alt="">
            </div>
            <div class="header-logo text-danger">

                <div class="sponsor">
                    <img src="../assets/img/sponsor1.png" alt="">
                    <img src="../assets/img/sponsor2.png" alt="">
                </div>


                <div class="icons">
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-twitter"></i>
                </div>

            </div>
            <div class="nav-bottom d-flex justify-content-center ">
                <div class="content-navbar">
                    <ul class="nav nav-underline text-light">

                        <li class="nav-item">
                            <a class="nav-link" href="#">HOME</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">FIXTURES & RESULT</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">LEAGUE TABLE</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">PLAYERS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">GALLERY</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">BLOG</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">CONTACT</a>
                        </li>
                        
                    </ul>
                </div>
            </div>
            <div class="jumbotron pt-5 text-light ">
                <h1>Football Club Sport Club</h1>
                
            </div>
            <div class="h-bottom-content text-light text-center" >
                <h4>Private football manager</h4>
                <button type="button" class="btn text-center p-4 rounded-5 text-light"><p>Learn More   <i class="fa-solid fa-arrow-right"></i></p></button>
    
            </div>
        </div>
    </div>

</template>

<style lang="scss" >
        // HEADER-TOP CONTENT
        .logo{
            display: flex;
            justify-content: center;
            position: relative;
            *:not(.my-container){
                z-index: 1;
                position: absolute;
            }
        }
        .sponsor{
            z-index: 1;
            position: relative;
            right: 30px;
        }
        .icons{
                position: relative;
                left: 60px;
                display: flex;
                padding: 0;
                font-size: 40px;
                gap: 30px;
                color: white;
        }
        .header-container{
            width: 100%;
            height: 100vh;
            background-image: url(../assets/img/slider2-1.jpg);
            background-position: center;
            background-size: cover;

        }
        .my-container{
            background-color: rgba(0, 0, 0, 0.7);
            height: 300px;
            padding: 20px;
            width: 100%;
            
        }
        .header-logo{
            display: flex;
            justify-content: center;
            padding: 40px;
        }
        li{
            padding: 0 50px;
            list-style: none;
            text-decoration: none;
            .nav-link{
                color: white;
                padding-top: 80px;
                font-weight: bolder;
                font-size: larger;
                &.nav-link:hover{
                    color: white;
                }
            }
        }
        // HEADER-BOTTOM CONTENT
        .jumbotron{
            display: flex;
            justify-content: center;
            h1{
                font-weight: bold;
                text-align: center;
                max-width: 50%;
                font-size: 100px;
            }
        }
        button{
            cursor: pointer;
            font-weight: bolder !important;
            border-color: white !important;
            background-color: transparent !important;
            p{
                margin: 0;
            }
            &:hover{
                transform: scale(1.2);
                color: cyan !important;
                border-color: cyan !important;

            }
        }
</style>