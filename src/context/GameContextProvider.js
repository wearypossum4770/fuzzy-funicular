import { useReducer } from "react";
const initialState = {
  isStarted: false,
  isConnected: false,
  isJudge: false,
  judge: "",
  question: "",
  deck: [],
  showEndScreen: false,
  scoreboard: [],
};
function gameReducer(state, action) {
  switch (action.type) {
    default:
      return { ...state };
  }
}
export default function GameContextProvider({ children }) {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const onMessage = (e) => {
    const { question, judge, isJudge, question } = JSON.parse(e.data);
    if (data.question) {
      // a round is started
      setJudge(data.judge);
      setIsJudge(data.isJudge);
      setQuestion(data.question);
    }
  };
}
