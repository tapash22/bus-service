<template>
    <div class="base-button">
    <v-btn class="mx-2 " :class="[ isActive ? 'bg-red' : 'bg-white']" @click="onClick(sit.name1)">
        {{ sit.name1}}
    </v-btn>
    <v-btn class="mx-2 " :class="[ isActive1 ? 'bg-red' : 'bg-white']" @click="onClick1(sit.name2)">
        {{ sit.name2}}
    </v-btn>
</div>
</template>

<script>
export default {
    name:'base-button',
    props:['sit'],
    data() {
        return {
            id: 0,
            isActive: false,
            isActive1: false,
        }
    },
    // computed: {
    //     ...mapState('buss', {
    //         sitlist: 'sitlist'
    //     })
    // },

    methods: {
        onClick(id) {
            this.id = id;
            this.sitlist.push(this.id);
            this.isActive = !this.isActive;
        },
        onClick1(id) {
            this.id = id;
            this.sitlist.push(this.id);
            this.isActive1 = !this.isActive1;
        }

    }
}
</script>