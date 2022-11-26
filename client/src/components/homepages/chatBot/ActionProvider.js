class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }
  
  greet() {
    const greetingMessage = this.createChatBotMessage("Xin chào bạn!")
    this.updateChatbotState(greetingMessage)
  }
  greetNo() {
    const greetingMessage = this.createChatBotMessage("Chúng tôi có thể chat với bạn.")
    this.updateChatbotState(greetingMessage)
  }
  greetBye() {
    const greetingMessage = this.createChatBotMessage("Cảm ơn bạn!")
    this.updateChatbotState(greetingMessage)
  }

  batdongsan() {
    const greetingMessage = this.createChatBotMessage("Bạn muốn tìm loại bất động sản nào?")
    this.updateChatbotState(greetingMessage)
  }

  
  nha() {
    const greetingMessage = this.createChatBotMessage("Bạn muốn tìm nhà loại nào?")
    this.updateChatbotState(greetingMessage)
  }

  nhamattien() {
    const greetingMessage = this.createChatBotMessage("Nhà mặt tiền giá rẻ, tương đối hay đắt tiền?")
    this.updateChatbotState(greetingMessage)
  }

  nhagiare() {
    const greetingMessage = this.createChatBotMessage("Vâng. Dream House của chúng tôi có nhiều ngôi nhà giá rẻ bạn có thể xem.")
    this.updateChatbotState(greetingMessage)
  }
  
  
  updateChatbotState(message) {
    
   this.setState(prevState => ({
    	...prevState, messages: [...prevState.messages, message]
    }))

  }
}

export default ActionProvider