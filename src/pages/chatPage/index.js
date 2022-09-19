import "./style.css";
export let chatPage =/*html*/`
    <div class="chat" id="chatpage" >
        <div class="chat-logo"><h4>SQA chat</h4></div>
        <div class="chat-body">
            <div class="chat-title">
                <div class="chat-new">+ New Conversation</div>
            </div>
            <div class="chat-start">
                <div class="chat-name">Fist conversation</div>
                <div class="chat-background"></div>
                <div class="chat-text">
                    <form id="chatInput">
                        <div class="icon"></div>
                        <input class="chat-input" type="text" placeholder="Type a message" name="">
                        <button class="chat-send">Send</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
`