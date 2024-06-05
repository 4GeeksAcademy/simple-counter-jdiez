import React, { useState, useEffect, useRef } from "react";

export const Cronometro = () => {
    const [segundero, setSegundero] = useState(0);
    const [play, setPlay] = useState(false);

    useEffect(() => {
        let intervalo;
        if(play){
           intervalo = setInterval(() => {
                setSegundero((segundo) => segundo + 1);
            }, 1000);
        }
        return () => {
            clearInterval(intervalo);
          };
    }, [play]);

    const handleClicPlay = () => {
        setPlay(true);
    };

    const handleClicRestartAndPlay = () => {
        setSegundero(0);
    };

    const handleClicRestart = () => {
        setSegundero(0);
        setPlay(false);
    };

    const handleClicPause = () => {
        setPlay(false);
      };

    if(segundero == 10){
        alert('Llegaste a 10 segundos!');
        setSegundero(0);
        setPlay(false);
    }

    return (
        <>
            <div className="cronometro bg-dark d-flex justify-content-center align-items-center">
                <div className="text-center d-flex justify-content-center bg-dark display-1 p-5 align-items-center ">
                    <div className="text-light pe-5 pt-4"><p><i className="fa-regular fa-clock"></i></p></div>
                    <div className="text-light border p-3 fw-bold"><p>0</p></div>
                    <div className="text-light border p-3 fw-bold"><p>0</p></div>
                    <div className="text-light border p-3 fw-bold"><p>0</p></div>
                    <div className="text-light border p-3 fw-bold"><p>0</p></div>
                    <div className="text-light border p-3 fw-bold"><p>0</p></div>
                    <div className="text-light border p-3 fw-bold"><p>{segundero}</p></div>
                </div>
                <div className="d-flex flex-column gap-4">
                    <button className="justify-content-center btn btn-primary" onClick={handleClicPlay}>PLAY</button>
                    <button className="justify-content-center btn btn-warning" onClick={handleClicPause}>PAUSE</button>
                    <button className="justify-content-center btn btn-success" onClick={handleClicRestart}>REINICIAR</button>
                    <button className="justify-content-center btn btn-danger" onClick={handleClicRestartAndPlay}>REINICIAR Y EMPEZAR</button>
                </div>

            </div>
        </>
    );
};
