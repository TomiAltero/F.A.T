"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import UserAvatar from "../../public/no-photo.webp";

const Chat = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "¡Hola! Especialista!", sender: "user", avatar: UserAvatar },
    {
      id: 2,
      text: "Hola! Bienvenido a DownIsUpApp, ¿En qué puedo ayudarte hoy?",
      sender: "bot",
      avatar: UserAvatar,
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);
  const [notifications, setNotifications] = useState(0); // State for notifications

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          text: input,
          sender: "user",
          avatar: UserAvatar,
        },
      ]);
      setInput("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleNotification = () => {
    setNotifications(notifications + 1);
  };

  return (
    <div className="flex mx-auto max-w-screen-xl mt-10 h-[700px]">
      <div className="w-1/3 pr-4 relative">
        <div className="bg-white rounded-sm border border-gray-300 shadow-lg dark:border-strokedark dark:bg-gray-800 h-full p-4">
          <h2 className="text-xl font-semibold mb-4 text-blue-900">
            Contactos
          </h2>
          {notifications > 0 && (
            <div className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
              {notifications}
            </div>
          )}
          <ul className="space-y-2">
            <li
              className="flex items-center space-x-4 p-3 hover:bg-gray-100 cursor-pointer"
              onClick={handleNotification}
            >
              <div className="relative">
                <Image
                  src={UserAvatar}
                  alt="contact-avatar"
                  className="w-12 h-12 rounded-full"
                  width={48}
                  height={48}
                />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border border-white"></div>
              </div>
              <span className="text-lg font-medium">Especialista 1</span>
            </li>
            <li
              className="flex items-center space-x-4 p-3 hover:bg-gray-100 cursor-pointer"
              onClick={handleNotification}
            >
              <div className="relative">
                <Image
                  src={UserAvatar}
                  alt="contact-avatar"
                  className="w-12 h-12 rounded-full"
                  width={48}
                  height={48}
                />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border border-white"></div>
              </div>
              <span className="text-lg font-medium">Especialista 2</span>
            </li>
            <li
              className="flex items-center space-x-4 p-3 hover:bg-gray-100 cursor-pointer"
              onClick={handleNotification}
            >
              <div className="relative">
                <Image
                  src={UserAvatar}
                  alt="contact-avatar"
                  className="w-12 h-12 rounded-full"
                  width={48}
                  height={48}
                />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border border-white"></div>
              </div>
              <span className="text-lg font-medium">Especialista 3</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-2">
        <div className="overflow-hidden rounded-sm border border-gray-300 bg-white shadow-lg dark:border-strokedark dark:bg-gray-800 h-full py-3">
          <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5 h-full flex flex-col">
            <div className="p-4 border border-gray-300 rounded-md mb-4 max-h-[600px] overflow-y-auto space-y-4 flex-1">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-center justify-${message.sender === "user" ? "end" : "start"} mb-2`}
                >
                  {message.sender === "bot" && (
                    <Image
                      src={message.avatar}
                      alt="bot-avatar"
                      className="w-12 h-12 rounded-full"
                      width={48}
                      height={48}
                    />
                  )}
                  <div
                    className={`p-3 rounded-lg ${message.sender === "user" ? "bg-blue-900 text-white" : "bg-gray-200 text-black"}`}
                  >
                    {message.text}
                  </div>
                  {message.sender === "user" && (
                    <Image
                      src={message.avatar}
                      alt="user-avatar"
                      className="w-12 h-12 rounded-full"
                      width={48}
                      height={48}
                    />
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            <div className="flex">
              <input
                type="text"
                className="flex-1 p-3 border border-gray-300 rounded-lg mr-2 outline-none focus:border-blue-500 transition duration-300"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Escribe un mensaje..."
              />
              <button
                onClick={handleSendMessage}
                className="bg-blue-900 text-white px-5 py-3 rounded-lg hover:bg-blue-800 transition duration-300"
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
