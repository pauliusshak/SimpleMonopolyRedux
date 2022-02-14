import {createSlice} from "@reduxjs/toolkit";


export const changes = createSlice({
        name: "info",
        initialState: {
            value: {
                table: [
                    {number: 1, costs: 100, colorBought: 0},
                    {number: 2, costs: 50, colorBought: 0},
                    {number: 3, costs: 10, colorBought: 0},
                    {number: 4, costs: 20, colorBought: 0},
                    {number: 5, costs: 300, colorBought: 0},
                    {number: 16, costs: 50, colorBought: 0},
                    0, 0, 0,
                    {number: 6, costs: 20, colorBought: 0},
                    {number: 15, costs: 30, colorBought: 0},
                    0, 0, 0,
                    {number: 7, costs: 150, colorBought: 0},
                    {number: 14, costs: 200, colorBought: 0},
                    0, 0, 0,
                    {number: 8, costs: 30, colorBought: 0},
                    {number: 13, costs: 250, colorBought: 0},
                    {number: 12, costs: 50, colorBought: 0},
                    {number: 11, costs: 140, colorBought: 0},
                    {number: 10, costs: 10, colorBought: 0},
                    {number: 9, costs: 20, colorBought: 0}],
                greenPlayerMoney: 0,
                bluePlayerMoney: 0,
                greenDiceRolled1: 0,
                greenDiceRolled2: 0,
                greenPosition: 1,
                bluePosition: 1,

            }
        },
        reducers: {
            minusBlueMoney: (state, action) => {
                state.value.bluePlayerMoney -= (action.payload)/2
                state.value.greenPlayerMoney += (action.payload)/2
            },
            minusGreenMoney: (state, action) => {
                state.value.greenPlayerMoney -= (action.payload)/2
                state.value.bluePlayerMoney += (action.payload)/2
            },
            greenCircleDone: (state, action) => {
                state.value.greenPlayerMoney += 200;
                state.value.greenPosition -= 16
            },
            blueCircleDone: (state, action) => {
                state.value.bluePlayerMoney += 200
                state.value.bluePosition -= 16
            },
            setGreenPosition: (state, {payload}) => {
                const random = Math.ceil(Math.random() * 6)
                state.value.greenDiceRolled1 = random
                state.value.greenPosition += random
            },
            setBluePosition: (state, action) => {
                const random = Math.ceil(Math.random() * 6)
                state.value.greenDiceRolled2 = random
                state.value.bluePosition += random
            },
            buyGreenProperty: (state, {payload}) => {
                if (state.value.table[payload.index].colorBought !== 2) {
                    if (state.value.table[payload.index].colorBought === 1) {
                        alert("YOU ALREADY OWN THIS PROPERTY!")
                        return
                    }
                    if (state.value.greenPosition === payload.x) {
                        if (state.value.greenPlayerMoney >= state.value.table[payload.index].costs) {
                            state.value.table[payload.index].colorBought = 1
                            state.value.greenPlayerMoney -= state.value.table[payload.index].costs;
                        }
                    }
                } else {
                    alert("THIS PROPERTY BELONGS TO BLUE PLAYER!")
                }
            },
            buyBlueProperty: (state, {payload}) => {
                if (state.value.table[payload.index].colorBought !== 1) {
                    if (state.value.table[payload.index].colorBought === 2) {
                        alert("YOU ALREADY OWN THIS PROPERTY!")
                        return
                    }
                    if (state.value.bluePosition === payload.x) {
                        if (state.value.bluePlayerMoney >= state.value.table[payload.index].costs) {
                            state.value.table[payload.index].colorBought = 2
                            state.value.bluePlayerMoney -= state.value.table[payload.index].costs;
                        }
                    }
                } else {
                    alert("THIS PROPERTY BELONGS TO GREEN PLAYER")
                }
            },


        }
        ,
    })
;

export const {
    greenCircleDone,
    blueCircleDone,
    setGreenPosition,
    setBluePosition,
    buyGreenProperty,
    buyBlueProperty,
    minusGreenMoney,
    minusBlueMoney
} = changes.actions;
export default changes.reducer