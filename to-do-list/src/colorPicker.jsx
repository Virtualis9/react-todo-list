import react, {useState} from 'react'

function ColorPicker(){

    const [color, setColor] = useState("#ffffff")

    function handlecolorchange(event){
        setColor(event.target.value);

    }

    return( <div className="color-picker-container">
                <h1>Color Picker</h1>
                <div className="color-display" style={{backgroundColor: color}}>
                    <p>selected color: {color}</p>
                </div>
                <label>select a color:</label>
                <input type="color" vaule={color} onChange={handlecolorchange}/>
            </div>           
            
    );

}

export default ColorPicker