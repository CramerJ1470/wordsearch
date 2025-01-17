import { createContext } from "react";

const WordListContext = createContext({
    wordList:[],
    setWordList:() => {}
});

export default WordListContext;