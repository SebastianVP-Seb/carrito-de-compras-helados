import {useState, useEffect} from 'react';

function useFetch(url, options) {

    const [loading, setLoading]=useState(true); //indicará si la petición está o no lista
    const [result, setResult]=useState(null) //para el resultado de la petición
    const [error, setError]=useState(null); //estado de error

    useEffect(()=>{
        (async () => {
            try {
                const respuesta=await fetch(url, options);
                const resultado=await respuesta.json();
                setResult(resultado);
                setLoading(false);
                
            } catch (err) {
                setError(err);
                setLoading(true);
            }
        })();
    }, [url, options]);

    return {loading, result, error};
    
};

export default useFetch;
