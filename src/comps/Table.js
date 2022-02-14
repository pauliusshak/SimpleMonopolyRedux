import {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {greenCircleDone} from "../features/redux1";
import {blueCircleDone} from "../features/redux1";
import {setGreenPosition} from "../features/redux1"
import {setBluePosition} from "../features/redux1";
import {buyGreenProperty} from "../features/redux1";
import {buyBlueProperty} from "../features/redux1";
import {minusGreenMoney} from "../features/redux1";
import {minusBlueMoney} from "../features/redux1";

const Table = () => {
    const dispatch = useDispatch()
    const info = useSelector((state) => state.info.value);
    const [showBtn, setBtn] = useState(false)
    const findGreenCell = info.table.find(x => x.number === info.greenPosition)
    const findBlueCell = info.table.find(x => x.number === info.bluePosition)


    function goGreen() {
        dispatch(setGreenPosition(info.table))
        setBtn(!showBtn)
    }

    if (info.greenPosition > 16) {
        dispatch(greenCircleDone())
    }

    function goBlue() {
        dispatch(setBluePosition())
        setBtn(!showBtn)
    }

    if (info.bluePosition > 16) {
        dispatch(blueCircleDone())
    }

    function buyGreen(index, x) {
        dispatch(buyGreenProperty({index, x}))
    }

    function buyBlue(index, x) {
        dispatch(buyBlueProperty({index, x}))
    }

    function getColor(x) {
        if (x.colorBought === 0) return "gold"
        if (x.colorBought === 1) return "greenyellow"
        if (x.colorBought === 2) return "#6fb1e0"
    }


    useEffect(() => {
        if (findGreenCell) {
            if (findGreenCell.colorBought === 2) {
                alert("oops its BLUE player property,You have to pay FINE!")
                dispatch(minusGreenMoney(findGreenCell.costs))
            }
        }
    }, [info.greenPosition])


    useEffect(() => {
        if (findBlueCell) {
            if (findBlueCell.colorBought === 1) {
                alert("oops its GREEN player property,You have to pay FINE!")
                dispatch(minusBlueMoney(findGreenCell.costs))
            }
        }
    }, [info.bluePosition])


    return (
        <div>
            <div className="gameBoard">
                {info.table.map((x, i) =>
                    <div onDoubleClick={showBtn ? () => buyBlue(i, x.number) : () => buyGreen(i, x.number)}
                         style={{backgroundColor: getColor(x)}}
                         key={i} className={`box ${x === 0 ? "rebeccapurple" : ''}`}>
                        <h3>{x.number}</h3>
                        <h3>Price:{x.costs}</h3>
                        <div className="flex spc-a">
                            <div>
                                {x.number === info.greenPosition && <img
                                    src="https://cdn1.iconfinder.com/data/icons/sports-2-6/48/52-512.png"
                                    alt=""/>}
                            </div>
                            <div>
                                {x.number === info.bluePosition && <img
                                    src="https://cdn1.iconfinder.com/data/icons/sports-3-6/48/106-512.png"
                                    alt=""/>}
                            </div>
                        </div>
                    </div>)}


            </div>
            <div className="flex spc-a">

                <div className="flex column">
                    <h1>Green money: {info.greenPlayerMoney}</h1>
                    <h1>Blue money: {info.bluePlayerMoney}</h1>
                </div>
                <div className="flex column">
                    {showBtn && <button onClick={goGreen}>ROLL GREEN</button>}
                    {!showBtn && <button className="blue" onClick={goBlue}>ROLL BLUE</button>}
                    <h2>Green last rolled:{info.greenDiceRolled1}</h2>
                    <h2>Blue last rolled:{info.greenDiceRolled2}</h2>
                </div>

            </div>


        </div>

    );
};

export default Table;