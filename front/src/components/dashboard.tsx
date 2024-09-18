import axios from "axios"; 
import { useEffect, useState } from "react"; 

function Dashboard() {
    // Declara uma variável de estado "temperature" com valor inicial 0
    const [temperature, setTemperature] = useState(0);

    useEffect(() => {
        // Faz uma requisição GET para a URL da API 
        axios.get('http://localhost:8080/temperature')
            .then(response => {
                // Se a requisição for bem-sucedida, o valor da temperatura retornado pela API é salvo no estado "temperature"
                setTemperature(response.data.temperature);
            })
            .catch(error => {
                // Se ocorrer um erro na requisição exibe no console o erro
                console.log("Error fetching temperature:", error);
            });
    }, []); 
    // O array vazio [] significa que o useEffect só vai rodar uma vez, quando o componente é montado

    return (
        <div>
            <h1>Atual Temperature:</h1>
            {temperature ? (
                <p>{temperature} C°</p> 
            ) : (
                <p>Loading... </p>
            )}
        </div>
    );
}

export default Dashboard;
