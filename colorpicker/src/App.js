import logo from './logo.svg';
import React,{useState} from 'react'
import './App.css';
import { ColorRange } from './components/ColorRange'
function App(){
  const [r,setR]=useState('');
  const [g,setG]=useState('');
  const [b,setB] = useState('');
  const [selectedColor,setSelectedColor]=useState('#ff00ff');

  const handleRgbChange=(e)=>{//需react声明
     rgbChange(e);
     rgbUpdate();
  }
  const rgbChange=(e)=>{
    switch (e.target.id){
      case "r":
        setR(e.target.value);
        break;
      case "g":
        setG(e.target.value);
        break;
      case "b":
        setB(e.target.value);
        break;
      default:
        break;  
    }
  }
  const rgbUpdate=()=>{
    setSelectedColor(rgbToHex(+r,+g,+b));
  }
  const rgbToHex=(r,g,b)=>{
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
  return (
    //change1:div背景 change2:16进制
    <div className="container">
      <input type="text" className="input" value={selectedColor}></input>
       
      <div className="color-picker"style={{backgroundColor:selectedColor}}></div>
     <ColorRange
        id="r"
        name="R"
        value={r}
        onChange={handleRgbChange} 
        >
      </ColorRange> 
      <ColorRange
        id="g"
        name="G"
        value={g}
        onChange={handleRgbChange}>
        </ColorRange>
      <ColorRange
        id="b"
        name="B"
        value={b}
        onChange={handleRgbChange}>
        </ColorRange>

    </div>
    
    
  )
}




export default App;
