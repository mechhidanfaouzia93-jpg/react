export const Demo4 = () =>{

    let count = 0;

    const increment = () =>{
        count ++;
        console.log(count)
    }
    const decrement = () =>{
        count --;
        console.log(count)
    }
    return (
        <div>
            <h2>Les events : </h2>
            <div className="flex flex-row justify-center items-center gap-3">

                <button onClick={decrement}> ➖ </button>
                <p> {count}</p>
                <button onClick={increment}> ➕ </button>
            </div>


        </div>
    )
}