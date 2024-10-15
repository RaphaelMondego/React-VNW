// componente header
import React from "react";
import "./HeaderStyle.scss"

function Header (){
    return(
        <header>
            <nav>
                <ul>
                    <li>Sobre</li>
                    <li>Contato</li>
                    <li>Redes Sociais</li>
                </ul>
            </nav>
        </header>
    )
}
export default Header
// Sempre usaremos o export se não o que a gente codou nesse arquivo não aparece no browser.

// Depois temos que ir no arquivo principal (App.jsx), importar esee arquivo e dentro do fragmento(que tá dentro da function) colocaremos a tag header, nesse estilo : <Header/>. Ai vai aparecer na tela o que codamos aqui!