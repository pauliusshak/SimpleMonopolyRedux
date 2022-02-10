import {useState} from 'react';
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {circleDone} from "../features/redux1";

const Table = () => {
    const dispatch = useDispatch()
    const info = useSelector((state) => state.info.value);
    const [getNum, setNum] = useState(1)
    const [getDice, setDice] = useState(0)

    function rolled() {

        const random = Math.ceil(Math.random() * 6)
        setDice(random)
        setNum(getNum + random)

    }

    if (getNum > 16) {
        dispatch(circleDone())
        setNum(getNum-16)
    }
    return (
        <div>
            <div className="gameBoard">
                {info.table.map((x, i) =>
                    <div style={{backgroundColor: x !== 0 ? "green" : "red"}}
                         key={i} className="box">
                        <h1>{x}</h1>
                        <div>
                            {x === getNum && <img
                                src="https://freepikpsd.com/file/2019/10/board-game-pieces-png-5-Transparent-Images.png"
                                alt=""/>}
                        </div>
                    </div>)}
                <h1>Your money: {info.money}</h1>
            </div>
            <div className="flex centera centerj">
                <button onClick={rolled}>ROLL</button>
                <h2>You rolled:{getDice}</h2>
            </div>

        </div>

    );
};

export default Table;