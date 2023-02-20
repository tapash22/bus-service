import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state(){
    return {

      buses:[
        {
          id:1,
          name:'Green Line',
          condition:'AC',
          time:'10.00',
          price:2000,
          from:'Dhaka',
          destination:'Cox-bazzar'
        },
        {
          id:2,
          name:'Green Line',
          condition:'double deccer',
          time:'10.00',
          price:2000,
          from:'Dhaka',
          destination:'Cox-bazzar'
        },
        {
          id:3,
          name:'Star line',
          condition:'AC',
          time:'10.00',
          price:1800,
          from:'Dhaka',
          destination:'Cox-bazzar'
        },
        {
          id:4,
          name:'Star line',
          condition:'Non-AC',
          time:'10.00',
          price:1200,
          from:'Dhaka',
          destination:'Cox-bazzar'
        },
        {
          id:5,
          name:'Sentmartin',
          condition:'AC',
          time:'10.00',
          price:1800,
          from:'Dhaka',
          destination:'Cox-bazzar'
        },
        {
          id:6,
          name:'Unique',
          condition:'AC',
          time:'10.00',
          price:1800,
          from:'Dhaka',
          destination:'Cox-bazzar'
        },
        {
          id:7,
          name:'Hanif',
          condition:'AC',
          time:'10.00',
          price:1600,
          from:'Dhaka',
          destination:'Cox-bazzar'
        },
        {
          id:8,
          name:'Hanif',
          condition:'Non-AC',
          time:'10.00',
          price:1100,
          from:'Dhaka',
          destination:'Cox-bazzar'
        },
      ],
      sitLeft: [
        {
          id: 1,
          name1: "A1",
          name2: "A2",
        },
        {
          id: 2,
          name1: "B1",
          name2: "B2",
        },
        {
          id: 3,
          name1: "C1",
          name2: "C2",
        },
        {
          id: 4,
          name1: "D1",
          name2: "D2",
        },
        {
          id: 5,
          name1: "E1",
          name2: "E2",
        },
        {
          id: 6,
          name1: "F1",
          name2: "F2",
        },
        {
          id: 7,
          name1: "F1",
          name2: "F2",
        },
      ],
      sitRight: [
        {
          id: 1,
          name1: "A3",
          name2: "A4",
        },
        {
          id: 2,
          name1: "B3",
          name2: "B4",
        },
        {
          id: 3,
          name1: "C3",
          name2: "C4",
        },
        {
          id: 4,
          name1: "D3",
          name2: "D4",
        },
        {
          id: 5,
          name1: "E3",
          name2: "E4",
        },
        {
          id: 6,
          name1: "F3",
          name2: "F4",
        },
        {
          id: 7,
          name1: "F3",
          name2: "F4",
        },
      ],
      tickets: [
        {
          id: 1,
          sit_name: "A1",
          price: 1500,
          date: new Date(),
          time: "10.00",
        },
        {
          id: 2,
          sit_name: "A2",
          price: 1500,
          date: new Date(),
          time: "10.00",
        },
      ],
      sitlist:[],

      transpost_info: {
        date: new Date(),
        times: ["9:00 pm", "10:00 pm", "11:00 pm"],
        place: [
          "Dhaka",
          "Chittogong",
          "Sylhet",
          "Rajsahi",
          "Borishal",
          "Khulna",
          "Rongpur",
        ],

        transport: ["Green Line", "Shohagh", "Unique", "Sentmartin"],
      },

      transports: [
        {
          id: 1,
          name: "Green Line",
          place: ["dhake", "rajsahi", "sylhet", "borisal", "khulna"],
          date: "",
          time: "",
          image: "",
          buses: [
            {
              id: 1,
              features: "Scania",
              price: 1500,
            },
            {
              id: 2,
              features: "Volvo",
              price: 1000,
            },
          ],
        },
        {
          id: 2,
          name: "Shohagh",
          place: ["dhake", "rajsahi", "sylhet", "borisal", "khulna"],
          date: "",
          time: "",
          image: "",
          buses: [
            {
              id: 1,
              features: "Scania",
              price: 1500,
            },
            {
              id: 2,
              features: "Volvo",
              price: 1000,
            },
          ],
        },
        {
          id: 3,
          name: "Unique",
          place: ["dhake", "rajsahi", "sylhet", "borisal", "khulna"],
          date: "",
          time: "",
          image: "",
          buses: [
            {
              id: 1,
              features: "Scania",
              price: 1500,
            },
            {
              id: 2,
              features: "Volvo",
              price: 1000,
            },
          ],
        },
        {
          id: 4,
          name: "Sentmartin",
          place: ["dhake", "rajsahi", "sylhet", "borisal", "khulna"],
          date: "",
          time: "",
          image: "",
          buses: [
            {
              id: 1,
              features: "Scania",
              price: 1500,
            },
            {
              id: 2,
              features: "Volvo",
              price: 1000,
            },
          ],
        },
      ],
    };
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
