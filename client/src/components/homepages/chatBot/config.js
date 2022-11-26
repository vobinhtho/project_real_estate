import { createChatBotMessage } from 'react-chatbot-kit';
import { useSelector } from 'react-redux';
import logo from '../../img/login.png'
import { BsChatDotsFill } from "react-icons/bs";

const config = {
  initialMessages: [createChatBotMessage(`Xin chào bạn. Bạn có muốn chat với tôi không?`)],
  botName: "Dream House",
  customComponents: {
    botAvatar: (props) => <BsChatDotsFill color='#7b68aa' fontSize='25' {...props} />
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: "#7b68aa"
    }
    ,
    chatButton: {
      backgroundColor: "#7b68aa"
    }
  }
};

export default config;