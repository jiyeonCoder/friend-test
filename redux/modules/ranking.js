const ADD_RANK = "ranking/ADD_RANK";

//Action Creator Function
export const addRank = (user_ranking) => {
  return { type: ADD_RANK, user_ranking };
};

const initialState = {
  ranking: [
    { score: 40, user_name: "Jiyeon1", message: "Hi Jiyeon!!!" },
    { score: 80, user_name: "Peter2", message: "Hi Peter!!!" },
    { score: 50, user_name: "Love3", message: "Hi Love!!!" },
  ],
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "ranking/ADD_RANK": {
      const new_ranking_list = [...state.ranking, action.user_ranking];
      return { ...state, ranking: new_ranking_list };
    }

    default:
      return state;
  }
}
