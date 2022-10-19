import './SidebarHeader.css';
import Item from './componentes/Item';
import { RiMessengerLine,RiSearchLine } from "react-icons/ri";
import { FiHeart, FiPlusSquare } from "react-icons/fi";
import { MdHomeFilled } from "react-icons/md";
import { FaBars } from "react-icons/fa";

function SidebarHeader(props) {
    return (
        <div className='SidebarHeader'>
            <img src={props.logo} alt="Logo do Instagram" className="logoInstagram" />

            <div className='container'>
                <div className="listItem">
                    <div> <Item icone={<MdHomeFilled />} nome={`Página inicial`} /></div>
                    <div><Item icone={<RiSearchLine />} nome="Explorar" /></div>
                    <div><Item icone={<RiMessengerLine />} nome="Mensagens" /></div>
                    <div><Item icone={<FiHeart />} nome="Notificações" /></div>
                    <div><Item icone={<FiPlusSquare />} nome="Criar" /></div>
                    <div className="perfil-sidebar">
                        <img src={`https://cdn.discordapp.com/attachments/1015259507787571202/1032344124969451620/WhatsApp_Image_2022-10-17_at_22.15.06.jpeg`} />
                        <p>Perfil</p>
                    </div>
                    <div className='mais'><Item icone={<FaBars />} nome="Mais" /></div>
                </div>

            </div>

        </div>
    )
}

export default SidebarHeader;