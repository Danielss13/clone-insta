import { useState, useEffect } from 'react';
import './style.css';

export function Suggestion() {

    const [suggestions, setSuggestions] = useState([])

    const [limitUsers, setLimitUsers] = useState(5)

    const slice = suggestions.slice(0, limitUsers)

    useEffect(() => {
        fetch(`https://api.github.com/users/Danielss13/followers`)
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                setSuggestions(result)
            })

            .catch((err) => {
                throw new Error(err)
            })

    }, [])

    return (
        <div className="container-suggestion">
            <div className="header-suggestion">
                <img src={`https://cdn.discordapp.com/attachments/1015259507787571202/1032344124969451620/WhatsApp_Image_2022-10-17_at_22.15.06.jpeg`} />

                <div className="user-info-suggestion">
                    <div className="info" >
                        <span>_danielssantos</span>
                        <p>Daniel Santos</p>
                    </div>

                    <button className="switch">Mudar</button>
                </div>
            </div>

            <div className="header-main-suggestion">

                <p>Sugestoes para você</p>

                <span>Ver tudo</span>

            </div>

            <div className="user-suggestion">

                {slice.map((suggestion, key) => (
                    <div className="infos-suggestions" key={key}>
                        <img src={`https://github.com/${suggestion.login}.png`} />

                        <div className="info-suggestion">
                            <span>{suggestion.login}</span>
                            <p>Seguido por Instituto PROA</p>
                        </div>

                        <button className="follow">Seguir</button>
                    </div>
                ))}

            </div>

            <footer className="footer-suggestion" >
                <p>Sobre &bull; Ajuda &bull; Imprensa &bull; API &bull; Carreiras &ebull; Privacidade &bull; Termos &bull; Localizações &bull; Principais contas &bull; Hashtags &bull; idioma</p>
                <p>&copy; 2022 INSTAGRAM FROM META</p>
            </footer>
        </div>
    )
}