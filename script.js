
<link rel="stylesheet"
        href="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css">
    <script src="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js"></script>
    <df-messenger project-id="lofty-tea-441822-i2" agent-id="173a7823-93f0-427c-bf6b-d58ebfa5862e" language-code="en"
        max-query-length="-1" allow-feedback="all" session-ttl="10">
        <df-messenger-chat-bubble chat-title="Virtual Assistant" chat-width="450" chat-height="720" chat-close-icon=""
            user-actor-image="" bot-actor-image="" placeholder-text="Message St.Toma VA" bot-writing-text="Typing..."
            chat-title-icon="https://static.wixstatic.com/media/6e5c44_ebfbdd8f71a94ac694e7293dcb821bf2~mv2.png/v1/fill/w_149,h_149,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Navy%26gold.png">
        </df-messenger-chat-bubble>
    </df-messenger>
    <style>
        df-messenger {
            z-index: 999;
            position: fixed;
            --df-messenger-font-color: #000;
            --df-messenger-font-family: Google Sans;
            --df-messenger-chat-background: #f3f6fc;
            --df-messenger-message-user-background: #d3e3fd;
            --df-messenger-message-bot-background: #fff;
            bottom: 16px;
            right: 16px;
        }

        df-messenger-chat-bubble {
            --df-messenger-message-feedback-icon-border-radius: 20%
        }
    </style>
    <script>
        window.addEventListener('df-request-sent', (event) => {
            console.log('Request', event.detail.data.requestBody);
        });

        window.addEventListener('df-button-clicked', (event) => {
            event.preventDefault(); // Messenger won't send the "event" request.

            
            console.log("Event: ", event)
            const dfMessenger = document.querySelector('df-messenger');
            dfMessenger.startNewSession({
                retainHistory: true
            });

            dfMessenger.sendRequest('query', 'New Chat');

            
        });

        // window.addEventListener('df-session-expired', () => {
        //     const messenger = document.querySelector('df-messenger');
        //     messenger.renderCustomText(`*Session expired*`, /* isBot= */ true);
        //     messenger.startNewSession({
        //         retainHistory: true
        //     });
        // });
    </script>
