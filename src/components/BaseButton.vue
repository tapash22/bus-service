<template>
<div class="base-button">
    <v-btn class="" :class="[ isActive ? 'red' : 'white']" @click="addToCart()">
        {{ sit.name}}
    </v-btn>
</div>
</template>

<script>
import {
    mapState
} from 'vuex';
export default {
    name: 'base-button',
    props: ['sit'],
    data() {
        return {
            id: 0,
            isActive: false,
            isActive1: false,
            count: 0,
        }
    },
    computed: {
        ...mapState(['sitlist'])
    },

    methods: {
        // onClick() {
        //     this.$store.dispatch("addTicketInList", {

        //         ticket: this.sit,
        //         quantity: value
        //     });
        //     // this.id = id;
        //     // this.sitlist.push(this.id);
        //     // console.log(this.sitlist)
        //     this.isActive = !this.isActive;
        // },
        onClick1() {
            this.id = id;
            this.sitlist.push(this.id);
            console.log(this.sitlist)
            this.isActive1 = !this.isActive1;
        },

        addToCart() {
            let value = this.count;
            this.$store.dispatch("addTicketInList", {

                ticket: this.sit,
                quantity: value
            });
        },
    }
}
</script>
