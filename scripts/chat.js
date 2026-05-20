// Chat Bot Responses - Pre-programmed FAQ
const botResponses = {
    // Greetings
    greeting: [
        "Hi there! 👋 I'm here to help you with your robotics and Arduino projects. What would you like to know?",
        "Hello hello! I'm your robotics assistant. Ask me anything about Arduino, circuits, or getting started with cool projects!"
    ],
    
    // Arduino Basics
    "what is arduino": "Arduino is an open-source electronics platform that uses hardware and software you can interact with. It consists of a circuit board (microcontroller) that can read inputs (like light on a sensor) and turn them into outputs (like turning on a motor or LED). Perfect for building interactive projects! 🔧",
    
    "arduino": "Arduino is an open-source electronics platform that uses hardware and software you can interact with. It consists of a circuit board (microcontroller) that can read inputs (like light on a sensor) and turn them into outputs (like turning on a motor or LED). Perfect for building interactive projects! 🔧",
    
    "what do i need to get started": "Great question! Here's what you'll need:\n\n📦 **Essential Items:**\n• Arduino Uno board\n• USB cable\n• Computer with Arduino IDE\n• Breadboard\n• Jumper wires\n• LEDs, resistors, buttons\n\n💡 **Tips:**\nStart with a beginner kit - they come with most components you need!",
    
    "getting started": "Great question! Here's what you'll need:\n\n📦 **Essential Items:**\n• Arduino Uno board\n• USB cable\n• Computer with Arduino IDE\n• Breadboard\n• Jumper wires\n• LEDs, resistors, buttons\n\n💡 **Tips:**\nStart with a beginner kit - they come with most components you need!",
    
    "how do i upload code": "To upload code to your Arduino:\n\n1️⃣ Connect your Arduino via USB\n2️⃣ Open Arduino IDE\n3️⃣ Write or paste your code\n4️⃣ Select your board (Tools > Board)\n5️⃣ Select the port (Tools > Port)\n6️⃣ Click the Upload button (→)\n\nThat's it! Your code will compile and upload automatically. 🚀",
    
    "upload code": "To upload code to your Arduino:\n\n1️⃣ Connect your Arduino via USB\n2️⃣ Open Arduino IDE\n3️⃣ Write or paste your code\n4️⃣ Select your board (Tools > Board)\n5️⃣ Select the port (Tools > Port)\n6️⃣ Click the Upload button (→)\n\nThat's it! Your code will compile and upload automatically. 🚀",
    
    // Project Help
    "beginner projects": "Here are some great beginner projects:\n\n🔵 **LED Blink** - Your first project! Make an LED blink on and off.\n\n🔵 **Temperature Sensor** - Read temperature with a sensor and display it.\n\n🔵 **Push Button** - Control an LED with a button.\n\nStart with LED Blink - it's the classic hello world of Arduino! ✨",
    
    "beginner": "Here are some great beginner projects:\n\n🔵 **LED Blink** - Your first project! Make an LED blink on and off.\n\n🔵 **Temperature Sensor** - Read temperature with a sensor and display it.\n\n🔵 **Push Button** - Control an LED with a button.\n\nStart with LED Blink - it's the classic hello world of Arduino! ✨",
    
    "intermediate projects": "Ready for more? Try these:\n\n⚙️ **Smart Home Controller** - Control lights and appliances\n\n🚗 **Robot Car** - Build a car that can avoid obstacles\n\n🌤️ **Weather Station** - Monitor temperature, humidity, and more\n\nThese projects teach sensor integration and wireless communication! 💡",
    
    "intermediate": "Ready for more? Try these:\n\n⚙️ **Smart Home Controller** - Control lights and appliances\n\n🚗 **Robot Car** - Build a car that can avoid obstacles\n\n🌤️ **Weather Station** - Monitor temperature, humidity, and more\n\nThese projects teach sensor integration and wireless communication! 💡",
    
    "advanced projects": "Challenge yourself with these advanced builds:\n\n🚀 **AI Vision System** - Build a system that recognizes objects\n\n🛩️ **Drone Controller** - Create a flight controller with GPS\n\n🌐 **IoT Network Hub** - Connect multiple devices to the cloud\n\nThese require knowledge of AI, sensors, and networking! 🧠",
    
    "advanced": "Challenge yourself with these advanced builds:\n\n🚀 **AI Vision System** - Build a system that recognizes objects\n\n🛩️ **Drone Controller** - Create a flight controller with GPS\n\n🌐 **IoT Network Hub** - Connect multiple devices to the cloud\n\nThese require knowledge of AI, sensors, and networking! 🧠",
    
    // Components
    "what is a breadboard": "A breadboard is a reusable board for building circuits without soldering!\n\n🔹 **How it works:**\n• Rows are connected horizontally\n• Columns on sides (rails) connect vertically\n• Use jumper wires to connect components\n\nPerfect for testing your circuits before permanent assembly! 🔌",
    
    "breadboard": "A breadboard is a reusable board for building circuits without soldering!\n\n🔹 **How it works:**\n• Rows are connected horizontally\n• Columns on sides (rails) connect vertically\n• Use jumper wires to connect components\n\nPerfect for testing your circuits before permanent assembly! 🔌",
    
    "led": "LEDs (Light Emitting Diodes) are small lights that light up when electricity flows through them!\n\n⚡ **Tips:**\n• Longer leg = positive (anode)\n• Shorter leg = negative (cathode)\n• Always use a resistor (220-330Ω) to protect them!\n\nDifferent colors need different resistor values. 💡",
    
    "resistor": "Resistors limit the flow of electricity in a circuit.\n\n🔢 **Color bands** tell you the resistance value:\n• Use a multimeter or online calculator to read them\n\n💡 **Common values:**\n• 220Ω - 330Ω for LEDs\n• 10kΩ for pull-up/pull-down resistors\n\nThey're essential for protecting components! ⚡",
    
    // Troubleshooting
    "error": "Common Arduino errors and fixes:\n\n❌ **'Board not found'**\n→ Check your USB connection and select the correct port\n\n❌ **'Compilation error'**\n→ Check your code for typos and missing semicolons\n\n❌ **'Sketch too large'**\n→ You need a bigger Arduino board!\n\nNeed more help? Check the Arduino IDE console for specific error messages! 🔧",
    
    "troubleshooting": "Common Arduino errors and fixes:\n\n❌ **'Board not found'**\n→ Check your USB connection and select the correct port\n\n❌ **'Compilation error'**\n→ Check your code for typos and missing semicolons\n\n❌ **'Sketch too large'**\n→ You need a bigger Arduino board!\n\nNeed more help? Check the Arduino IDE console for specific error messages! 🔧",
    
    // About the project
    "about": "Cool Robotics Projects is a collection of Arduino tutorials created by BYU-Idaho students!\n\n🎓 **Our Mission:**\nHelp people worldwide learn robotics through fun, hands-on projects.\n\n👥 **Team:**\nVideo producers, web developers, and of course - our amazing supervisor Professor Richard Grimmet!\n\n💪 **Start your journey today!** 🚀",
    
    "help": "I can help you with:\n\n🔹 Arduino basics & getting started\n🔹 Project recommendations by skill level\n🔹 Component explanations (LEDs, resistors, etc.)\n🔹 Troubleshooting errors\n🔹 Code upload instructions\n🔹 And more!\n\nJust type your question or click a quick reply below! 😊",
    
    "default": [
        "oops... I'm not sure I understand that. Try asking about:\n\n• Getting started with Arduino\n• Beginner/Intermediate/Advanced projects\n• Specific components (LEDs, resistors, breadboard)\n• Troubleshooting errors\n\nOr click a quick reply below! 😊",
        "Hmm, I don't have an answer for that yet. Try asking:\n\n• 'What is Arduino?'\n• 'How do I get started?'\n• 'Show me beginner projects'\n• 'Help me troubleshoot'\n\nI'm here to help! 🤖"
    ]
};

// Quick reply options
const quickReplies = [
    "What is Arduino?",
    "Start Me Up",
    "Beginner?",
    "Troubleshooting",
    "Components Help"
];

// State
let chatOpen = false;
let isTyping = false;

// DOM Elements
const chatToggle = document.querySelector('.chat-toggle');
const chatWindow = document.querySelector('.chat-window');
const chatClose = document.querySelector('.chat-close');
const chatMessages = document.querySelector('.chat-messages');
const chatInput = document.querySelector('.chat-input');
const chatSend = document.querySelector('.chat-send');
const quickRepliesContainer = document.querySelector('.quick-replies');
const typingIndicator = document.querySelector('.typing-indicator');

// Initialize chat
function initChat() {
    // Set up event listeners
    if (chatToggle) {
        chatToggle.addEventListener('click', toggleChat);
    }
    
    if (chatClose) {
        chatClose.addEventListener('click', toggleChat);
    }
    
    if (chatSend) {
        chatSend.addEventListener('click', sendMessage);
    }
    
    if (chatInput) {
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
    
    // Add quick replies
    renderQuickReplies();
    
    // Add initial greeting after a delay
    setTimeout(() => {
        if (chatMessages && chatMessages.children.length === 0) {
            addBotMessage(botResponses.greeting[0]);
        }
    }, 2000);
}

// Toggle chat window
function toggleChat() {
    chatOpen = !chatOpen;
    
    if (chatOpen) {
        chatWindow.style.display = 'flex';
        chatToggle.style.display = 'none';
    } else {
        chatWindow.style.display = 'none';
        chatToggle.style.display = 'flex';
    }
}

// Render quick reply buttons
function renderQuickReplies() {
    if (!quickRepliesContainer) return;
    
    quickRepliesContainer.innerHTML = '';
    
    quickReplies.forEach(reply => {
        const button = document.createElement('button');
        button.className = 'quick-reply';
        button.textContent = reply;
        button.addEventListener('click', () => {
            handleUserMessage(reply);
        });
        quickRepliesContainer.appendChild(button);
    });
}

// Handle user message
function handleUserMessage(text) {
    if (isTyping) return;
    
    // Add user message
    addUserMessage(text);
    
    // Find and display bot response
    const response = findResponse(text);
    showTypingIndicator();
    
    setTimeout(() => {
        hideTypingIndicator();
        addBotMessage(response);
    }, 1000 + Math.random() * 1000);
}

// Find matching response
function findResponse(userMessage) {
    const message = userMessage.toLowerCase().trim();
    
    // Check for matching keywords
    for (const [key, value] of Object.entries(botResponses)) {
        if (message.includes(key) && key !== 'greeting' && key !== 'default') {
            if (Array.isArray(value)) {
                return value[Math.floor(Math.random() * value.length)];
            }
            return value;
        }
    }
    
    // Return random default response
    return botResponses.default[Math.floor(Math.random() * botResponses.default.length)];
}

// Send message
function sendMessage() {
    const text = chatInput.value.trim();
    
    if (text === '') return;
    
    handleUserMessage(text);
    chatInput.value = '';
}

// Add bot message to chat
function addBotMessage(text) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message bot';
    messageDiv.innerHTML = text.replace(/\n/g, '<br>');
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Add user message to chat
function addUserMessage(text) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message user';
    messageDiv.textContent = text;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Show typing indicator
function showTypingIndicator() {
    isTyping = true;
    if (typingIndicator) {
        typingIndicator.style.display = 'flex';
    }
}

// Hide typing indicator
function hideTypingIndicator() {
    isTyping = false;
    if (typingIndicator) {
        typingIndicator.style.display = 'none';
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initChat);
