import React, { useState } from 'react';
import Chatbot from './Chatbot';
import logo from './logo.png'; // Import your logo image
import './chat.css'; 

function Chat() {
  const [messages, setMessages] = useState([]);

  const handleUserMessage = (newMessage) => {
    setMessages([...messages, { text: newMessage, isUser: true }]);
    handleBotResponse(newMessage);
  };

  const handleBotResponse = (userMessage) => {
    let botResponse = "I'm sorry, I couldn't understand that.";

    if (userMessage.toLowerCase().includes('give')) {
      botResponse = "You can donate online or by calling our Donor Services team at 1-800-555-DEVA or 1-800-555-3382.";
    } else if (userMessage.toLowerCase().includes('what can i donate')) {
      botResponse = "You can donate non-perishable food products such as:\n- Canned fruits, vegetables, or beans.\n- Canned protein (tuna, salmon, chicken, etc.)\n- Canned soup, stew, broth, pasta sauce.\n- Packaged foods (seeds, nuts, oats, granola, rice, quinoa, beans, pasta)";
    } else if (userMessage.toLowerCase().includes('become a donor')) {
      botResponse = "By visiting our website's donation page, you can help us in our quest to reduce food insecurity among college students by becoming a donor. For additional information on different methods to donate, such as organizing fundraising events or providing food goods, you may also get in touch with our staff directly. Your kindness is much appreciated as it enables us to give needy students the materials and assistance they require. We appreciate your consideration of being a donor!";
    } else if (userMessage.toLowerCase().includes('become a volunteer')) {
      botResponse = "Becoming a Nourish Net volunteer is rewarding and easy. Whether you're interested in assisting with food distribution, event planning, or raising awareness, there's a place for you in our dedicated team of volunteers. There are multiple ways you can apply to become a NN Volunteer. Navigate to our contact page and send us your resume and a short essay telling us about yourself (no pressure, we just want to get to know you!). You can also email your resume and information to us at nourishnet@gmail.com. If you’d rather directly talk to us, call us at 1-800-444-3382 to schedule an in-person meeting. Join us in making a difference in the lives of college students facing food insecurity!";
    } else if (userMessage.toLowerCase().includes('become a member')) {
      botResponse = "Joining us at Nourish Net is a significant way to express your support for our goal of reducing college students' food poverty. Although we don't have a formal membership program at the moment, we invite people from all walks of life to support our work. You can support us by contributing resources, giving your time, or taking part in our campaigns and events. By actively participating in our organization and supporting our mission, you join a community that is committed to giving underprivileged youngsters a better future. We appreciate your desire to get engaged!";
    } else if (userMessage.toLowerCase().includes('receive meals as a college student')) {
      botResponse = "We can assist you if you are a college student who is struggling with food insecurity. In order to help students in need, Nourish Net provides a range of services and activities. To find out more about the assistance offered in your area, get in contact with our organization directly. You can also email us at nourishnet@gmail.com. If you’d rather directly talk to us, call us at 1-800-444-3382. We give you access to meal assistance programs, food pantries, and other services that can help you deal with issues relating to food insecurity. Our top goal is your well-being, and we're dedicated to helping you succeed academically. Do not hesitate to contact us if you need help!";
    } else if (userMessage.toLowerCase().includes('universities receive food')) {
      botResponse = "We invite your university to get in touch with us directly to explore possible collaborations if they’re interested in providing food assistance from us at Nourish Net. Together, we evaluate the needs of educational institutions and customize our help to meet those needs. Our organization offers a range of services, such as food pantry setups on campus, meal assistance programs, and food donations. We can work together to develop a strategy that meets the unique requirements of your campus community and guarantees that students have access to a variety of nutrient-dense food options. To learn more about potential collaborations and how we can help your university combat food insecurity, please get in touch with us.";
    }

    setMessages([...messages, { text: botResponse, isUser: false }]);
  };

  return (
    <div className="Chat">
      <div className="logo-container">
        <img src={logo} alt="Nourish Net Logo" className="logo" />
      </div>
      <h1>Nourish Net Chatbot</h1>
      <Chatbot messages={messages} onUserMessage={handleUserMessage} />
    </div>
  );
}

export default Chat;
