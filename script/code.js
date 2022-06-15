function Create(){
    let container = document.getElementById("container");
    
    container.innerHTML=`<form action="">
    <h1>Minutes To Seconds</h1>
    <label>Minutes:
    <input id="Minutes" type="text" placeholder="Minutes">
     
    </input>
    <br>
    <br>
    </label>
    <label>Seconds:
         <input id="Seconds" type="text" placeholder="Seconds">
         
        </input>
        </label>
        <br>
        <button id="Button" type="button" onclick="Converter() ">Converter</button>
    </form>`
    
    }
    
    Create()
    
    
    function Converter(){
        let minutes = document.getElementById('Minutes').value;
        let seconds = document.getElementById('Seconds');
        let converter = eval((minutes * 60));
        // console.log(converter)
        seconds.value= converter + "s";
    }
    