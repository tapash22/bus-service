<template>
<div class="home">
    <v-container>
        <!-- <h2 class="text-h6 font-weight-bold text-uppercase my-2 text-center">Transport</h2> -->
        <v-row>
            <v-col cols="12" sm="12" lg="12" md="12" xl="12" class="d-flex justify-center">
                <v-sheet rounded="xl" elevation="5" color="" class="my-5 w-100">
                    <h2 class="d-flex justify-center my-5 pa-3 text-uppercase text-h6 font-weight-bold red white--text ">Select your Destination</h2>
                    <div class="date">
                        <date-picker v-model="date" clearable ></date-picker>
                    </div>
                    <div class="form my-2 pa-2">
                        <v-select label="From" outlined dense :items="transpost_info.place" />
                        <v-select label="To" outlined dense :items="transpost_info.place" />
                        <v-select label="Transport" outlined dense :items="transpost_info.transport" />
                        <v-select label="Time" outlined dense :items="transpost_info.times" />
                    </div>
                    <div class="d-flex justify-center my-3">
                        <v-btn color="red" class="w-25 font-weight-bold white--text" @click="dialog = !dialog">filter</v-btn>
                    </div>

                </v-sheet>
            </v-col>
        </v-row>
        <v-row class="my-5">
            <v-col cols="12" sm="12" lg="12" md="12" xl="12" class="d-flex justify-center pa-2" v-if="dialog">
                <v-card class="my-2 w-100">
                    <v-card-title class="text-h6 font-weight-bold d-flex justify-center text-uppercase bg-red-lighten-1">finding result</v-card-title>
                    <v-card-text class="d-flex justify-center pa-2 w-100" v-if="value">
                        <SingleBus />
                    </v-card-text>
                    <v-cad-text class="d-flex justify-center align-center" v-else>
                        <p class="d-flex justify-center text-body-1  my-5 mx-5 red--text">
                            Sorry, NO transport all available for selected sheddule.you can try again or choose another sheddule.
                        </p>
                    </v-cad-text>
                </v-card>
            </v-col>

            <v-col cols="12" sm="12" lg="12" md="12" xl="12" class="d-flex justify-center pa-2" v-else>
                <v-sheet elevation="6" rounded="xl">
                    <h2 class="d-flex justify-center my-5 pa-3 text-uppercase text-h6 font-weight-bold red white--text ">What to do</h2>
                    <div class="my-1 mx-2" v-for="info in infos" :key="info.id">
                        <h3 class="text-body-1 text-justify text-uppercase mx-4">
                            {{info.title}} :
                        </h3>
                        <p class=" pa-2 text-body-2 text-justify mx-5">
                            {{ info.text }}
                        </p>
                    </div>
                </v-sheet>

            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import SingleBus from '@/components/SingleBus.vue';
import { mapState } from 'vuex';

export default {
    name: 'Home',

    data() {
        return {
            date: '',
            dialog:false,
            value:true,
            infos: [{
                    id: 1,
                    title: 'date select',
                    text: 'Fixed the date, where are you want to travel with our service. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur rem suscipit animi nam laudantium possimus!'
                },
                {
                    id: 2,
                    title: 'start  from',
                    text: 'where are you from, start your journey with us Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur rem suscipit animi nam laudantium possimus!'
                },
                {
                    id: 3,
                    title: 'destination select',
                    text: 'where are you want to go with our service Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur rem suscipit animi nam laudantium possimus!'
                },
                {
                    id: 4,
                    title: 'destination select',
                    text: 'choose the spacific one whatever you want to enjoy your happy journey Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur rem suscipit animi nam laudantium possimus!'
                },
            ]
        }
    },

    components: {
        DatePicker,
        SingleBus
    },

    computed:{
        ...mapState(['transpost_info'],)
    },

    mounted() {
        window.scrollTo(0, 0);
    },
}
</script>

<style scoped>
.form {
    width: 100%;
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 5px;
}

.date {
    width: 100%;
    display: flex;
    justify-content: center;
}

.list {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 2fr;
    grid-gap: 5px;
}

@media only screen and (max-width:600px) {
    .form {
        width: 100%;
        display: grid;
        padding: 10px;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(4, 50px);
        grid-gap: 10px;
    }
}
</style>
