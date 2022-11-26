class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    // parse(message) {
    //   console.log(message);
    // }

    parse(message) {
      const lowerCaseMessage = message.toLowerCase()
      
      if (lowerCaseMessage.includes("hello")) {
        this.actionProvider.greet()
      }

      if (lowerCaseMessage.includes("hi")) {
        this.actionProvider.greet()
      }
      if (lowerCaseMessage.includes("chào")) {
        this.actionProvider.greet()
      }

      if (lowerCaseMessage.includes("bye")) {
        this.actionProvider.greetBye()
      }

      if (lowerCaseMessage.includes("xin chào")) {
        this.actionProvider.greet()
      }
      //

      if (lowerCaseMessage.includes("no")) {
        this.actionProvider.greetNo()
      }
      if (lowerCaseMessage.includes("không")) {
        this.actionProvider.greetNo()
      }

      //
      if (lowerCaseMessage.includes("bất động sản")) {
        this.actionProvider.batdongsan()
      }

      if (lowerCaseMessage.includes("bds")) {
        this.actionProvider.batdongsan()
      }

      if (lowerCaseMessage.includes("giá rẻ")) {
        this.actionProvider.batdongsan()
      }
      //
    
      if (lowerCaseMessage.includes("nhà")) {
        this.actionProvider.nha()
      }

      //
      if (lowerCaseMessage.includes("mặt tiền")) {
        this.actionProvider.nhamattien()
      }
      if (lowerCaseMessage.includes("giá rẻ")) {
        this.actionProvider.nhagiare()
      }

    }

  }
  export default MessageParser;