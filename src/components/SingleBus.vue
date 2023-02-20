<template>
<div class="single-bus">
    <v-row class="d-flex">
        <v-col cols="12" sm="12" lg="8" md="8" xl="8" class="d-flex justify-center">
            <v-card class="d-block" width="100%" elevation="10" rounded="lg">
                <v-card-title class="my-5 text-center red white--text d-flex justify-center">Dhake to cox-bazer(AC)</v-card-title>
                <div class="cardq">
                    <v-card-text class="d-flex justify-center">
                        <div class=" button">
                            <BaseButton v-for="sit in sitLeft" :key="sit.id" :sit="sit" />
                        </div>
                    </v-card-text>
                    <v-card-text class="d-flex justify-center">
                        <div class=" button">
                            <BaseButton v-for="sit in sitRight" :key="sit.id" :sit="sit" />
                        </div>
                    </v-card-text>
                </div>

            </v-card>
        </v-col>

        <v-col cols="12" sm="12" md="4" lg="4" xl="4" class="my-5 d-flex align-center">
            <v-card elevation="10" class="mt-2" rounded="xl">
                <v-card-title class=" my-5 d-flex justify-center"> Ticket</v-card-title>
                <v-card-subtitle class="text-center text-body-1 d-flex justify-center">Total Amount: 1500</v-card-subtitle>
                <v-card-text>
                    <div v-if="sitlist">
                        <v-list class="d-flex" v-for="sit in sitlist" :key="sit.id" outlined>
                            <!-- <v-list-item  class="red rounded-lg"> -->
                                <v-list-item-title class="d-flex pt-1  w-25" >{{ sit.ticket.name}}</v-list-item-title>
                               
                                <v-list-item-subtitle class="d-flex  pt-1  w-50">{{ sit.ticket.price }}</v-list-item-subtitle>
                             
                                    <v-icon color="red" @click="onClick">
                                        mdi-close
                                    </v-icon>
                                
                            <!-- </v-list-item> -->
                        </v-list>
                    </div>
                    <div v-else>
                        <p class="black--text">
                            please select sit
                        </p>
                    </div>
                </v-card-text>

                <v-card-actions class="my-2 d-flex justify-center">

                    <v-btn class="w-50 pa-2 " color="red" elevation="10">
                        confirm
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>

</div>
</template>

<script>
import {
    mapState
} from 'vuex'
import BaseButton from './BaseButton.vue';

export default {
    name: 'singlebus',
    data() {
        return {
            price: 1500,
        }
    },

    computed: {
        ...mapState(['sitLeft', 'sitRight', 'tickets', 'sitlist'])
    },
    components: {
        BaseButton,
    },

    methods:{
        onClick(){
            this.$store.dispatch('removeTicketFromList');
        }
    }
}
</script>

<style scoped>
/* .single-bus{
    width: 800px;
} */
.cardq {
    display: flex;
    justify-content: center;
}
.button {
    display: grid;
    grid-template-columns: 50px 50px;
    grid-template-rows: repeat(30px, 7);
    grid-gap: 10px;
}

.v-list-item {
    line-height: 30px !important;
}
</style>
