// import { createStore } from "vuex";
// import axios from "axios";

// export default createStore({
//   state: {
//     countries: [],
//     fetchingData: false,
//     datas: [
//       { id: 1, name: "jeffer" },
//       { id: 2, name: "jeffe" },
//       { id: 3, name: "jeffy" },
//       { id: 4, name: "jeffi" },
//     ],
//   },
//   getters: {},
//   mutations: {
//     mutateCountryState: (state, payload) => (state.countries = payload),
//     mutateFetching: (state, payload) => (state.fetchingData = payload),
//   },
//   actions: {
//     getAllCountries: async ({ commit }) => {
//       try {
//         commit("mutateFetching", false);
//         const request = await axios.get("https://restcountries.com/v3.1/all");
//         const data = await request.data;
//         console.log(data);
//         commit("mutateCountryState", data);
//         commit("mutateFetching", false);
//       } catch (error) {
//         console.log(error);
//         commit("mutateFetching", false);
//       }
//     },
//   },
//   modules: {},
// });
