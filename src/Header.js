import React from "react";

export default function Header({children}){ //'props' permite o uso de parametros - '{children}' ou (props.children) o que estiver dentro é o parametro
    return (
        <header>
            <h1>{children}</h1>
        </header>
    );
}