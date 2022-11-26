import React, { Component } from "react";
import config from './config'
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import { BsFillChatSquareDotsFill } from "react-icons/bs";
import { colors, makeStyles } from "@material-ui/core";


class ChatBotReal extends Component {
  state = {
    showBot: false
  };

  handleShowBot = () => {
    this.setState({
      showBot: !this.state.showBot
    });
  };

  render() {
    return (
      <div>
      <BsFillChatSquareDotsFill color='#7b68aa' fontSize='45' onClick={this.handleShowBot}/>
        {this.state.showBot && (
          <Chatbot
            config={config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
            className="app_Chatbot"
          />
        )}
        
      </div>
    );
  }
}
export default ChatBotReal;