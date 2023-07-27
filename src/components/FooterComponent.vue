<script>
// my-component.js

export default {
    data() {
        return {
            infoclub:[
                {
                
                    state:'New Jersey, USA',
                
                    phone:'+1(234) 567 89 10',
                
                    mails:'example@example.com',
                
                },
                //USA PROPS PER I LINK DI EDUCATION E QUICK LIKS!!! EASY BRO
            ]
        }
    },
    props:{
        navBarItems: {
            type: Array,
            default: [],
        },
    },
    computed: {
    filteredEducationItems() {
      // Filtra gli elementi con id "Education" o "Education Quick-Links"
        return this.navBarItems.filter((item) => item.id === 'Education' || item.id === 'Education Quick-Links');
        },
        filteredQuickLinksItems() {
        // Filtra gli elementi con id "Quick-Links" o "Education Quick-Links"
            return this.navBarItems.filter(
            (item) => item.id === 'Quick-Links' || item.id === 'Education Quick-Links');
        },
        
    },
    
}
</script>

<template ><div class="background">


    <div class="d-flex justify-content-around text-light">
        <div class="info-sites">
            <div class="logo">
                <img src="../assets/img/logo-footer-football.png" alt="">
            </div>
            <div v-for="(info, i) in infoclub" :key="i" class="icons ">
                <p class="d-flex"><i class="fa-solid fa-location-dot"></i> <p class="my-0 mx-2">{{'' + info.state}}</p></p>
                <p class="d-flex"><i class="fa-solid fa-phone-volume"></i> <p class="my-0 mx-2">{{'' + info.phone}}</p></p>
                <p class="d-flex"><i class="fa-regular fa-envelope"></i> <p class="my-0 mx-2">{{'' + info.mails}}</p></p>
                
                
                
            </div>
            <div class="social-icon d-flex">
                <p>faceb</p>
                <p>inst</p>
                <p>twit</p>
            </div>
        </div>
        <div class="join-our ">
            <h2 class="pt-5 pb-2 w-50">Join Our Newsletter</h2>
            <p class="pb-4 w-50">Subscribe to be informed about important developments in our club and football world</p>
            <div class="subscribes col-4 w-75 ">
                <div class="form-floating d-flex mb-3 ">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                    <label class="py-0" for="floatingInput"><p class="mx-4 my-3">Your Email Address</p></label>
                </div>
                <div class="d-grid gap-2 col-12 mx-auto ">
                    <button class="btn" type="button">Subscribe</button>
                    
                </div>
            </div>
        </div>
        <div class="info-links d-flex">
            <div class="education-info">
                <ul>
                    <li>
                        <h5>EDUCATION</h5>
                    </li>
                        <li v-for="item in filteredEducationItems" :key="item.text">
                            
                            <a href="#"><p><i class="fa-solid fa-minus px-2 fs-4"></i>{{'' + item.text }}</p></a>
                        </li>
                </ul>
            </div>
            <div class="quick-links">
                <ul>
                    <li>
                        <h5>QUICK LINKS</h5>
                    </li>
                    <li v-for="item in filteredQuickLinksItems" :key="item.text">
                        <a href="#"><p><i class="fa-solid fa-minus px-2 fs-4"></i>{{'' + item.text }}</p></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="copyright text-center p-5 text-light">
        @ 2022 Football club - All Rights reserved.
    </div>
</div>
</template>

<style lang="scss" scoped>
        ul,li,h5{
            list-style: none;
            font-weight: bold;
            h5{
                color: white;
                padding-top: 50px;
            }
            li{
                padding: 5px;
                a{
                    color: white;
                    text-decoration: none;
                    p{
                        margin: 0;
                    }
                    
                }
            }
        }
        .background{
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            background-image: url(../assets/img/footer-bg-football.jpg);
            width: 100%;
        }
        .logo{
            img{
                padding: 50px 0 20px;
                width: 60px;
            }
        }
        .form-control,button{
            border-radius: 40px;
            padding: 20px 0 20px 0 !important;
            &.form-control{
                padding: 30px 0 30px 0 !important;
            }
            
        }
        label{
            color: gray;
            background-color: transparent !important;
        }
        .icons{
            i{
                color: rgba(255,255,255,0.4);
                font-size: 25px;
            }
        }
        button{
            background-color: white;
            color: black;
            &:hover{
                background-color: white;
                color: black;
            }
        }

</style>