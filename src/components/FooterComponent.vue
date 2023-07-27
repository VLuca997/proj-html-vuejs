<script>
// my-component.js
export default {
    data() {
        return {
            infoclub:[
                {
                    state: 'New Jersey, USA',
                    phone:  '+1(234) 567 89 10',
                    mails: 'example@example.com'
                },
                //USA PROPS PER I LINK DI EDUCATION E QUICK LIKS!!! EASY BRO
            ]
        }
    },
}
</script>

<template ><div class="background">


    <div class="d-flex justify-content-around text-light">
        <div class="info-sites">
            <div class="logo">
                <img src="../assets/img/logo-footer-football.png" alt="">
            </div>
            <div class="icons d-flex">
                <p>icons</p>
                <p>info</p>
            </div>
            <div class="social-icon d-flex">
                <p>faceb</p>
                <p>inst</p>
                <p>twit</p>
            </div>
        </div>
        <div class="join-our ">
            <h2 class="pt-5 pb-2">join brod</h2>
            <p class="pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur non aut dolorem vitae.</p>
            <div class="subscribes col-4 w-75 ">
                <div class="form-floating d-flex mb-3 ">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                    <label class="py-0" for="floatingInput"><p class="mx-4 my-3">Your Email Address</p></label>
                </div>
                <div class="d-grid gap-2 col-12 mx-auto ">
                    <button class="btn btn-primary" type="button">Subscribe</button>
                    
                </div>
            </div>
        </div>
        <div class="info-links d-flex">
            <div class="education-info">
                <ul>
                    <li>
                        <h5>EDUCATION</h5>
                    </li>
                    <li>
                        ciao
                    </li>
                    <li>
                        ciao
                    </li>
                    <li>
                        ciao
                    </li>
                    <li>
                        ciao
                    </li>
                </ul>
            </div>
            <div class="quick-links">
                <ul>
                    <li>
                        <h5>QUICK LINKS</h5>
                    </li>
                    <li>
                        ciao
                    </li>
                    <li>
                        ciao
                    </li>
                    <li>
                        ciao
                    </li>
                    <li>
                        ciao
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
                color: red;
                padding-top: 50px;
            }
            li{
                padding: 5px;
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
        

</style>