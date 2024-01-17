import React from "react";
import { createPortal } from "react-dom";

import { addons, types } from "@storybook/manager-api";
import { Icons, IconButton } from "@storybook/components";
import { marked } from "marked";

import { setTheme } from "@ui5/webcomponents-base/dist/config/Theme.js";

import {
  Button,
  Dialog,
  ThemeProvider,
  Input,
  BusyIndicator,
  Bar,
  Icon,
  Title,
} from "@ui5/webcomponents-react";

const ADDON_ID = "ai-button";

function formatAndRenderContent(content) {
  const html = marked.parse(content);

  return (
    // replace all <ui5-tagname> and </ui5-tagname> with &lt;ui5-tagname&gt; and &lt;/ui5-tagname&gt;
    html
      .replace(/<ui5-([a-z-]+)>/g, "&lt;ui5-$1&gt;")
      .replace(/<\/ui5-/g, "&lt;/ui5-")
  );
}

let session = "";
const url = "http://localhost:3030/api/chat";

const doRequest = async (data: string) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session}`,
    },
    body: JSON.stringify({
      request: data,
      scope: "UI5WEBCOMPONENTS",
      session,
    }),
  });

 return response;
};

const AIButton = () => {
  const dialog = React.useRef<any>();
  const chatMessagesContainerRef = React.useRef(null);

  const [chatMessages, setChatMessages] = React.useState<any>([]);
  const [inputValue, setInputValue] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const [open, setOpen] = React.useState(false);
  const toggleMyTool = () => {
    setOpen(!open);
  };

  const enhanceStyles = async () => {
    const staticItemDomRef = await dialog.current?.getStaticAreaItemDomRef();
    // inject a style tag to hide the backdrop
    const style = document.createElement("style");
    style.innerHTML = `
      .ui5-block-layer {
        display: none !important;
      }
    `;
    staticItemDomRef.appendChild(style);
  };

  const handleClickSend = async () => {
    if (inputValue.trim().length > 0) {
      setChatMessages([...chatMessages, { text: inputValue, sender: "You" }]);
      setLoading(true);
      setInputValue("");
      console.error("inputValue", inputValue);
      debugger;
      doRequest(inputValue)
        .then(async (response) => {
          if (!response.body) {
            setInputValue(inputValue);
            setChatMessages([
              ...chatMessages,
              { text: inputValue, sender: "You" },
              { text: "Sorry, there was an error with the AI", sender: "Other" },
            ]);
            return;
          }

          const nextMessages = [
            ...chatMessages,
            { text: inputValue, sender: "You" },
            { text: "", sender: "Other" },
          ];

          const reader = response.body?.getReader();
          const decoder = new TextDecoder();

          while (true && reader) {
            const { done, value } = await reader.read();
            if (done) {
              console.log("Stream completed");
              break;
            }
            const chunk = decoder.decode(value);
            console.log("Received chunk:", chunk);

            const lastMessage = nextMessages.pop();
            nextMessages.push({
              text: lastMessage.text + chunk,
              sender: "Other",
            });
            setChatMessages([
              ...nextMessages,
            ]);
          }
        })
        .catch((err) => {
          setChatMessages([
            ...chatMessages,
            { text: inputValue, sender: "You" },
            { text: "Sorry, there was an error with the AI", sender: "Other" },
          ]);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const handleInputChange = (ev: any) => {
    setInputValue(ev.target.value);
  };

  const onRefreshClick = () => {
    session = "";
    const initialMessages = [
      {
        text: "Hello! I'm the UI5 Companion AI chat bot. Ask me anything UI5!",
        sender: "Other",
      },
    ];
    setChatMessages(initialMessages);
    setInputValue("");
    setLoading(false);
  };

  React.useEffect(() => {
    const initialMessages = [
      {
        text: "Hello! I'm the UI5 Companion AI chat bot. Ask me anything UI5!",
        sender: "Other",
      },
    ];
    setChatMessages(initialMessages);
  }, []);

  React.useEffect(() => {
    setTheme("sap_horizon");
    enhanceStyles();
  }, []);

  React.useEffect(() => {
    chatMessagesContainerRef.current.scrollTop =
      chatMessagesContainerRef?.current?.scrollHeight;
  }, [chatMessages]);

  return (
    <>
      <ThemeProvider>
        {createPortal(
          <Dialog
            style={{ width: "800px", height: "900px" }}
            ref={dialog}
            onAfterClose={() => setOpen(false)}
            open={open || undefined}
            draggable
            resizable
            header-text="UI5 Companion"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <div
                ref={chatMessagesContainerRef}
                style={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  overflowY: "auto",
                }}
              >
                {chatMessages.map((message, index) => (
                  <div
                    key={index}
                    className="message-bubble"
                    style={{
                      backgroundColor:
                        message.sender === "You" ? "#4caf50" : "#0078d4",
                      color: "white",
                      borderRadius: "8px",
                      maxWidth: "70%",
                      wordWrap: "break-word",
                      fontSize: "14px",
                      padding: "8px 16px",
                      alignSelf:
                        message.sender === "You" ? "flex-end" : "flex-start",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: formatAndRenderContent(message.text),
                    }}
                  ></div>
                ))}
                <BusyIndicator active={loading} />
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  marginTop: "8px",
                  alignItems: "center",
                }}
              >
                <Input
                  style={{ flexGrow: 1 }}
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="Type a message"
                />
                <Button onClick={handleClickSend}>Send</Button>
                <Button icon="refresh" onClick={onRefreshClick}></Button>
              </div>
            </div>
          </Dialog>,
          document.body
        )}
        {createPortal(
          <style>
            {`
            .ui5-block-layer {
              display: none !important;
            }             
            .message-bubble p {
              margin: 0;
            }            
            .message-bubble ul {
              list-style: auto;
            }
            .message-bubble .language-html, pre {
              max-width: 100%;
              background: #3e91f6;
              border-radius: 8px;
              padding: 8px;
              margin-bottom: 4px;
              display: block;
            }
          `}
          </style>,
          document.head
        )}

        <IconButton
          onClick={toggleMyTool}
          key={ADDON_ID}
          title="Enable my addon"
        >
          <Icons icon="lightning" />
        </IconButton>
      </ThemeProvider>
    </>
  );
};

addons.register(ADDON_ID, (api) => {
  addons.add(ADDON_ID, {
    title: "AI",
    type: types.TOOLEXTRA,
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: AIButton,
  });
});
