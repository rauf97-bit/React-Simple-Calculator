import React, {useState} from "react";

const App = () => {
  const [result, setResult] = useState('')
  const handleClick = (e) => {
    e.preventDefault()
    // console.log(e.target.name)
    const figure = e.target.name
    setResult(result.concat(figure))
    // console.log(result)

  }
  const clear = () =>{
    setResult('')
  }
  const backspace = () =>{
    setResult(result.slice(0, -1))
  }
  const evalute = () => {
    try {
      setResult(eval(result).toString())
    } catch (error) {
      setResult("Error")
    }
  }
  return (
    <div className=" main">
      <div className="container">
        <div className="grid ">
          <input
            type="text"
            value={result}
            onChange={handleClick}
            className="col-span-4"
          />
          <button onClick={clear} name='clear' className="clear ref glow">Clear</button>
          <button onClick={backspace} name='backspace' className="ref glow">C</button>
          <button onClick={handleClick} name='/' className="ref glow">&divide;</button>
          <button onClick={handleClick} name='7' className="ref ">7</button>
          <button onClick={handleClick} name='8' className="ref ">8</button>
          <button onClick={handleClick} name='9' className="ref ">9</button>
          <button onClick={handleClick} name='*' className="ref glow">&times;</button>
          <button onClick={handleClick} name='4' className="ref ">4</button>
          <button onClick={handleClick} name='5' className="ref ">5</button>
          <button onClick={handleClick} name='6' className="ref ">6</button>
          <button onClick={handleClick} name='/' className="ref glow">/</button>
          <button onClick={handleClick} name='1' className="ref ">1</button>
          <button onClick={handleClick} name='2' className="ref ">2</button>
          <button onClick={handleClick} name='3' className="ref ">3</button>
          <button onClick={handleClick} name='+' className="ref glow">+</button>
          <button onClick={handleClick} name='.' className="ref ">.</button>
          <button onClick={handleClick} name='0' className="ref ">0</button>
          <button onClick={evalute} name='=' className="ref col-span-2 glow">=</button>
        </div>
      </div>
    </div>
  );
};

export default App;
