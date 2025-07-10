// for predefined answers
function chatbot(input){
    let output="";
    input=input.toLowerCase();
    if(input.includes("hello")|| input.includes("hi")){
        output="hello, nice to meet you!";
    }
    else if (input.includes("how are you")){
        output="I'm doing fine, thank you for asking.";
    }
    else if(input.includes("what is your name")){
        output="My name is TCPBot, I'm a chatbot.";
    }
    else if(input.includes("what can you do")){
        output="I can chat with you and answer some simple questions.";
    }
    else if(input.includes("tell me a joke")){
        output="Why did the chicken go the seance? to get to the other side";
    }
    else{
        output="Sorry, I don't understand that.Please try something else.";
    }
    return output
}

// display the user message on the chat
function displayUserMessage(message){
    let chat = document.getElementById("chat");
    let usermessage = document.createElement("div");
    usermessage.classList.add("message");
    usermessage.classList.add("user");
    let userAvatar= document.createElement("div");
    userAvatar.classList.add("avatar");
    let userText= document.createElement("div");
    userText.classList.add("text");
    userText.innerHTML =message;
    usermessage.appendChild(userAvatar);
    usermessage.appendChild(userText);
    chat.appendChild(usermessage);
    chat.scrollTop = chat.scrollHeight;
}

//display the bot message on the chat
function displaybotMessage(message){
    let chat = document.getElementById("chat");
    let botmessage = document.createElement("div");
    botmessage.classList.add("message");
    botmessage.classList.add("bot");
    let botAvatar= document.createElement("div");
    botAvatar.classList.add("avatar");
    let botText= document.createElement("div");
    botText.classList.add("text");
    botText.innerHTML =message;
    botmessage.appendChild(botAvatar);
    botmessage.appendChild(botText);
    chat.appendChild(botmessage);
    chat.scrollTop = chat.scrollHeight;
}

//send the user message and get the bot response
function sendMessage(){
    let input = document.getElementById("input").value;
    if(input){
        displayUserMessage(input);
        let output = chatbot(input);
        setTimeout(function(){
            displaybotMessage(output);
        },1000);
        document.getElementById("input").value="";
    }

}

//add a click event listener to the button
document.getElementById("button").addEventListener("click",sendMessage);

//add a keypress event listener to the input
document.getElementById("input").addEventListener("keypress",function(event){
    if(event.keyCode== 13){
        sendMessage();
    }
});