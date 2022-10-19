import './style.css';
import { FiMoreHorizontal } from 'react-icons/fi';
import { IoMdHeartEmpty } from 'react-icons/io';
import { FiSend } from 'react-icons/fi';
import { BsChat } from 'react-icons/bs';
import { BsBookmark, BsEmojiSmile } from 'react-icons/bs';
import { IconContext } from 'react-icons';

export function Post3() {
    return (
        <>
            <header className='header-post'>

                <div className="info-post">
                    <img src="https://github.com/pachecogabriel02.png" />

                    <p>_kikoprogramador.fullstack</p>
                </div>

                <FiMoreHorizontal />
            </header>

            <div className="img-post">
                <img src="https://github.com/pachecogabriel02.png" />
            </div>

            <div className="footer-post">
                <IconContext.Provider value={{ size: "30px" }}>
                    <section className="engagement-post">
                        <div className="icons-1">
                            <div className="icon">  <IoMdHeartEmpty /></div>
                            <div className="icon">  <BsChat /></div>
                            <div className="icon">  <FiSend /></div>
                        </div>

                        <div className="icon">  <BsBookmark /></div>

                    </section>
                </IconContext.Provider>

                <section className="like">
                    <span>343 curtidas</span>
                </section>

                <div className="legend">
                    <p>
                        <strong>_kikoprogramador.fullstack</strong> Da vila do chaves para o mundo. <br></br><br></br>

                       acessem meu canal no Youtube.<br></br><br></br>

                        <div className="time-post">
                    <time>22 sem</time>
                </div>

                <br></br> <strong>_danielssantos</strong>  Boa kiko, não se mistur com essa gentalha!!
                    </p>
                </div>

                <div className="time-post">
                    <time>12 sem</time>
                </div>

                <div className="comment">

                    <div className="fake-comment">

                        <IconContext.Provider value={{ size: "25px" }}>
                            <div className="icon">
                                <BsEmojiSmile />
                            </div>

                        </IconContext.Provider>

                        <input placeholder="Adicione um comentário..." />

                    </div>
                    <button>Publicar</button>
                </div>

            </div>
        </>
    )
}