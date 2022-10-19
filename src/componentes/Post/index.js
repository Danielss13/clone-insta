import './style.css';
import { FiMoreHorizontal } from 'react-icons/fi';
import { IoMdHeartEmpty } from 'react-icons/io';
import { FiSend } from 'react-icons/fi';
import { BsChat } from 'react-icons/bs';
import { BsBookmark, BsEmojiSmile } from 'react-icons/bs';
import { IconContext } from 'react-icons';

export function Post() {
    return (
        <>
            <header className='header-post'>

                <div className="info-post">
                    <img src="https://cdn.discordapp.com/attachments/1015259507787571202/1032060525300949032/WhatsApp_Image_2022-10-18_at_19.01.43.jpeg" />
                    <p>_danielssantos</p>
                </div>
                <FiMoreHorizontal />
            </header>

            <div className="img-post">
                <img src={`https://cdn.discordapp.com/attachments/1015259507787571202/1032060525300949032/WhatsApp_Image_2022-10-18_at_19.01.43.jpeg`} />
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
                    <span>700 curtidas</span>
                </section>

                <div className="legend">
                    <p>
                        <strong>_danielssantos</strong> 🏍️👽💨.
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