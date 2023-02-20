import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state() {
    return {
      buses: [
        {
          id: 1,
          name: "Green Line",
          condition: "AC",
          time: "10.00",
          price: 2000,
          from: "Dhaka",
          destination: "Cox-bazzar",
        },
        {
          id: 2,
          name: "Green Line",
          condition: "double deccer",
          time: "10.00",
          price: 2000,
          from: "Dhaka",
          destination: "Cox-bazzar",
        },
        {
          id: 3,
          name: "Star line",
          condition: "AC",
          time: "10.00",
          price: 1800,
          from: "Dhaka",
          destination: "Cox-bazzar",
        },
        {
          id: 4,
          name: "Star line",
          condition: "Non-AC",
          time: "10.00",
          price: 1200,
          from: "Dhaka",
          destination: "Cox-bazzar",
        },
        {
          id: 5,
          name: "Sentmartin",
          condition: "AC",
          time: "10.00",
          price: 1800,
          from: "Dhaka",
          destination: "Cox-bazzar",
        },
        {
          id: 6,
          name: "Unique",
          condition: "AC",
          time: "10.00",
          price: 1800,
          from: "Dhaka",
          destination: "Cox-bazzar",
        },
        {
          id: 7,
          name: "Hanif",
          condition: "AC",
          time: "10.00",
          price: 1600,
          from: "Dhaka",
          destination: "Cox-bazzar",
        },
        {
          id: 8,
          name: "Hanif",
          condition: "Non-AC",
          time: "10.00",
          price: 1100,
          from: "Dhaka",
          destination: "Cox-bazzar",
        },
      ],
      sitLeft: [
        {
          id: 1,
          name: "A1",
          price: 200,
        },
        {
          id: 2,
          name: "A2",
          price: 200,
        },
        {
          id: 3,
          name: "B1",
          price: 200,
        },
        {
          id: 4,
          name: "B2",
          price: 200,
        },
        {
          id: 5,
          name: "C1",
          price: 200,
        },
        {
          id: 6,
          name: "C2",
          price: 200,
        },
        {
          id: 7,
          name: "D1",
          price: 200,
        },
            
        {
          id: 8,
          name: "D2",
          price: 200,
        },
        {
          id: 9,
          name: "E1",
          price: 200,
        },
        {
          id: 10,
          name: "E2",
          price: 200,
        },
        {
          id: 11,
          name: "F1",
          price: 200,
        },
        {
          id: 12,
          name: "F2",
          price: 200,
        },
        {
          id: 13,
          name: "G2",
          price: 200,
        },
        {
          id: 14,
          name: "G2",
          price: 200,
        },
      ],
      sitRight: [
        {
          id: 1,
          name: "A3",
          price: 200,
        },
        {
          id: 2,
          name: "A4",
          price: 200,
        },
        {
          id: 3,
          name: "B3",
          price: 200,
        },
        {
          id: 4,
          name: "B4",
          price: 200,
        },
        {
          id: 5,
          name: "C3",
          price: 200,
        },
        {
          id: 6,
          name: "C4",
          price: 200,
        },
        {
          id: 7,
          name: "D3",
          price: 200,
        },
        {
          id: 8,
          name: "D4",
          price: 200,
        },
        {
          id: 9,
          name: "E3",
          price: 200,
        },
        {
          id: 10,
          name: "E4",
          price: 200,
        },
        {
          id: 11,
          name: "F3",
          price: 200,
        },
        {
          id: 12,
          name: "F4",
          price: 200,
        },
        {
          id: 13,
          name: "G3",
          price: 200,
        },
        {
          id: 14,
          name: "G4",
          price: 200,
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
      sitlist: [],
      ticket: null,

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
  getters: {},
  mutations: {

    ADD_TICKET_IN_LIST: (state, { ticket, quantity }) => {
      state.sitlist.push({
        ticket,
        quantity,
      });
    },

    REMOVE_TICKET_FROM_LIST: (state, { ticket }) => {
      state.sitlist = state.sitlist.filter((item) => {
        return item.ticket.id !== ticket.id;
      });
    },

    CLEAR_TICKET_LIST: () => {
      state.sitlist = [];
    },

  },

  actions: {

    addTicketInList: ({ commit }, { ticket, quantity }) => {
      commit("ADD_TICKET_IN_LIST", { ticket, quantity });
    },

    removeTicketFromList: ({ commit }, ticket) => {
      commit("REMOVE_TICKET_FROM_LIST", ticket);
    },

    clearTicketList: ({ commit }) => {
      commit("CLEAR_TICKET_LIST");
    },

  },
  modules: {},

});
