<template>
<v-footer>
    <v-row >
        <v-col cols="12" sm="12" md="6" lg="6" xl="6" class="pa-0">
            <v-sheet max-width="100%" height="100%" class="d-flex justify-center align-center">
                <h1 class="text-h2 font-weight-bold black--text">
                    Transport
                </h1>
            </v-sheet>
        </v-col>
        <v-col cols="4" sm="4" md="2" lg="2" xl="2" v-for="list in lists" :key="list.id" class="pa-0">
            <v-card elevation="0" class="" outlined>
                <v-card-title class="text-body-1 font-weight-bold">
                    {{ list.title }}
                </v-card-title>
                <v-card-text>
                    <p class="text-body-2 pa-2 text-justify ">
                        {{ list.text }}
                    </p>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
    <v-row class="d-flex justify-center pt-5">
        <p> &copy; 2023 Transport</p>
    </v-row>
</v-footer>
</template>

<script>
export default {
    data() {
        return {
            // date: new Date.getFullYear(),
            lists: [{
                    id: 1,
                    title: 'About',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum accusantium, enim quaerat laborum sint '
                },
                {
                    id: 2,
                    title: 'Office',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum accusantium, enim quaerat laborum sint '
                },
                {
                    id: 3,
                    title: 'Social Media',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum accusantium, enim quaerat laborum sint '
                }
            ]
        }
    }
}
</script>
