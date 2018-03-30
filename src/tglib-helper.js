const mkMethod = (method, opts) => {
    
    // define opts
    let data = {};
    opts = opts || {};
    
    // -- methods --
    
    // generate text entities
    // https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1parse_text_entities.html
    // mkMethod('parseTextEntities',{text:'**H**ello!'});
    if(method == 'parseTextEntities'){
        data = {
            "@type": "parseTextEntities",
            "text": opts.text,
            "parse_mode": {
                "@type": "textParseModeMarkdown" // markdown by default
            }
        }
        if(opts.parse_mode == 'HTML'){
            data.parse_mode["@type"] = "textParseModeHTML"
        }
        return data;
    }
    
    // text message
    // https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1send_message.html
    // mkMethod('sendMessage',{chat_id:-10012345,text:'Hello!',text_entities:txtEntities,reply_to_message_id:12345});
    if(method == 'sendMessage'){
        data = {
            "@type": "sendMessage",
            "chat_id": opts.chat_id,
            "input_message_content": {
                "@type": "inputMessageText",
                "text": {
                    "@type": "formattedText",
                    "text": opts.text
                }
            }
        };
        if(opts.text_entities){
            data.input_message_content.text.entities = opts.text_entities;
        }
        if(opts.reply_to_message_id){
            data.reply_to_message_id = opts.reply_to_message_id;
        }
        return data;
    }
    
    // forward message
    // https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1forward_messages.html
    // mkMethod('forwardMessage',{chat_id:-10012345,from_chat_id:-10012345,message_id:12345,disable_notification:false});
    if(method == 'forwardMessage'){
        data = {
            "@type": "forwardMessages",
            "chat_id": opts.chat_id,
            "message_ids": [ opts.message_id ]
        };
        if(opts.disable_notification){
            data.disable_notification = opts.disable_notification;
        }
        return data;
    }
    
    // -- end --
}

module.exports = { 
	mkMethod
};