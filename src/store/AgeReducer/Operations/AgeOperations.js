import Age from "../Models/Age";

const DecreaseAge = (state=Age) =>{
    state.count--;
    return state;
}

const IncreaseAge = (state= Age) =>{
    state.count++;
    return state;
}

export {DecreaseAge, IncreaseAge};