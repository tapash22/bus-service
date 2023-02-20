<template>
<div class="navigation">
    <v-app-bar color="white">
        <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-sm-and-up"></v-app-bar-nav-icon>
        <v-app-bar-title class="w-25 ">
            <router-link to="/" class="text-decoration-none black--text text-h5 font-weight-bold">
                Transport
            </router-link>
        </v-app-bar-title>
        <v-spacer></v-spacer>
        <v-list class="d-flex hidden-sm-and-down">
            <v-list-item v-for="navigation in navigations" :key="navigation.id" active-class="green">
                <router-link :to="navigation.link" class="text-decoration-none">
                    <v-list-item-title class="black--text text-body-1 text-uppercase">
                        {{ navigation.name }}
                    </v-list-item-title>
                </router-link>
            </v-list-item>
        </v-list>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" temporary>
        <v-app-bar-title class="w-25 text-h5 font-weight-bold">Transport</v-app-bar-title>
        <v-divider></v-divider>
        <v-list class="d-block">
            <v-list-item v-for="navigation in navigations" :key="navigation.id" active-class="green">
                <router-link :to="navigation.link" class="text-decoration-none">
                    <v-list-item-title class="black--text text-body-1 text-uppercase">
                        {{ navigation.name }}
                    </v-list-item-title>
                </router-link>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</div>
</template>

<script>
export default {
    data() {
        return {
            drawer: false,
            navigations: [{
                    id: 1,
                    name: 'about',
                    link: '/about',
                },
                {
                    id: 2,
                    name: 'Gallery',
                    link: '/gallery',
                },
                {
                    id: 3,
                    name: 'Contact us',
                    link: '/contactus',
                },
            ]
        }
    }
}
</script>
