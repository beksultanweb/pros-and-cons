import React, {useState} from "react";
import "./style.css";
import { animeList } from "../../data/anime";
import { filmsList } from "../../data/films";
import { gamesList } from "../../data/games";
import { serialList } from "../../data/serials";
import { tasksList } from "../../data/task";
import { habitsList } from "../../data/habits";

const ArrayList = () => {

    const [countTime, setCountTime] = useState(0);
    const [selector, setSelector] = useState(1);
    const [activeItems, setActiveItems] = useState(animeList);
    // const [lookResult, setLookResult] = useState(false);

    const handleItemActivated = ({key}) => {
        const activeItem = activeItems.map((item)=>{
            if (item.key === key){
                if (item.isActive === false){
                    setCountTime((count) => count + item.time)
                }
                else if (item.isActive === true){
                    setCountTime((count) => count - item.time)
                }
                return {...item, isActive: !item.isActive};
            }
            else {
                // setbuttonActive(false)
                // setCountTime((count) => count - item.time)    
                return item;
            }
          })
          
          setActiveItems(activeItem)
          
    }
    // const handleItemDecrement = ({key}) => {
    //     const activeItem = activeItems.map((item)=>{
    //         if (item.key === key){
    //             setCountTime((count) => count - item.time)
    //             setbuttonActive(false);
    //             return {...item, isActive: !item.isActive};
    //         }
    //         else {
    //             // setbuttonActive(false)
    //             // setCountTime((count) => count - item.time)    
    //             return item;
    //         }
    //       })
          
    //       setActiveItems(activeItem)
    // }
    console.log(countTime)
    
//formula: sum of active media.time / habit.mintime * habit.min --rounded
    
    

    const btnClicked = () => {
        let newTarget = parseInt(selector);
        if(newTarget <= 4){
            newTarget++;
            setSelector(newTarget);
            changeUseState(newTarget)
        }
        else{
            // setLookResult(true)
        }
    }

    console.log("selector is: ", selector);

    const changeUseState = (prevSelectorValue) => {
        console.log(prevSelectorValue);
        setActiveItems(prevSelectorValue===1?animeList:prevSelectorValue===2?filmsList:prevSelectorValue===3?gamesList:prevSelectorValue===4?serialList:animeList);
    }
    
    return (
        <div className="array">
            {selector === 1 && tasksList.filter((item) => item.id === 1).map((task) => (
            <div className="array-task" key={task.id}>
                {task.task}
            </div>
            ))}
            {selector === 2 && tasksList.filter((item) => item.id === 2).map((task) => (
            <div className="array-task" key={task.id}>
                {task.task}
            </div>
            ))}
            {selector === 3 && tasksList.filter((item) => item.id === 3).map((task) => (
            <div className="array-task" key={task.id}>
                {task.task}
            </div>
            ))}
            {selector === 4 && tasksList.filter((item) => item.id === 4).map((task) => (
            <div className="array-task" key={task.id}>
                {task.task}
            </div>
            ))}
            <div className="array-list">
            {selector === 1 && activeItems.map((item) => (
            <div className={`array-item${item.isActive ? " active" : ""}`} key={item.name} onClick={() => handleItemActivated(item)}>
                <img src={item.src} alt={item.name} />
            </div>))}
            {selector === 2 && activeItems.map((item) => (
            <div className={`array-item${item.isActive ? " active" : ""}`} key={item.name} onClick={() => handleItemActivated(item)}>
                <img src={item.src} alt={item.name} />
            </div>))}
            {selector === 3 && activeItems.map((item) => (
            <div className={`array-item${item.isActive ? " active" : ""}`} key={item.name} onClick={() => handleItemActivated(item)}>
                <img src={item.src} alt={item.name} />
            </div>))}
            {selector === 4 && activeItems.map((item) => (
            <div className={`array-item${item.isActive ? " active" : ""}`} key={item.name} onClick={() => handleItemActivated(item)}>
                <img src={item.src} alt={item.name} />
            </div>))}
            </div>
            <button onClick={btnClicked}>Далее</button>
            {selector === 5 &&
            <div className="result">
                {countTime}
                {habitsList.map((habit) => (
                <div className="result-item" key={habit.name}>
                    {habit.name}
                </div>))}
            </div>}
            
        </div>
    )
}
export default ArrayList;