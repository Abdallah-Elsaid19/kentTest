import { useState } from "react";
import { Link } from "react-router-dom";

export default function SupportChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; from: "user" | "bot" }[]>([
    {
      text: "Hi there! Welcome to KBC Support. How can we help you today?",
      from: "bot",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages((prev) => [...prev, { text: userMsg, from: "user" }]);
    setInput("");

    setTimeout(() => {
      const responses = [
        "Thanks for reaching out! A member of our team will be with you shortly. In the meantime, you might find our FAQ page helpful.",
        "We have received your message. For faster assistance, please visit our Support page or call us at 01622 123 456.",
        "Thanks! If you are looking for programme information, you can explore our Colleges page or book a free information session.",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages((prev) => [...prev, { text: randomResponse, from: "bot" }]);
    }, 1000);
  };

  const quickReplies = [
    { label: "Programmes", link: "/programmes" },
    { label: "Apply", link: "/apply" },
    { label: "Contact", link: "/contact" },
  ];

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-kbc-purple-500 text-white rounded-full shadow-lg hover:bg-kbc-purple-600 transition-colors flex items-center justify-center"
        aria-label={isOpen ? "Close chat" : "Open support chat"}
      >
        {isOpen ? (
          <i className="ri-close-line text-xl" />
        ) : (
          <i className="ri-chat-3-line text-xl" />
        )}
      </button>

      {/* Chat panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-kbc-purple-100 overflow-hidden flex flex-col animate-slide-up">
          <div className="bg-kbc-purple-500 p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <i className="ri-customer-service-line text-white" />
              </div>
              <div>
                <p className="font-semibold text-white text-sm">KBC Support</p>
                <p className="text-xs text-white/70">We typically reply within minutes</p>
              </div>
            </div>
          </div>

          <div className="flex-1 p-4 space-y-3 max-h-80 overflow-y-auto">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-xl text-sm ${
                    msg.from === "user"
                      ? "bg-kbc-purple-500 text-white"
                      : "bg-kbc-purple-50 text-kbc-dark-700"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            <div className="flex flex-wrap gap-2 pt-2">
              {quickReplies.map((reply) => (
                <Link
                  key={reply.label}
                  to={reply.link}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-1.5 bg-kbc-gold-100 text-kbc-gold-700 text-xs font-medium rounded-full hover:bg-kbc-gold-200 transition-colors"
                >
                  {reply.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="p-3 border-t border-gray-100">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-kbc-purple-400"
              />
              <button
                onClick={handleSend}
                className="px-3 py-2 bg-kbc-purple-500 text-white rounded-lg hover:bg-kbc-purple-600 transition-colors"
                aria-label="Send message"
              >
                <i className="ri-send-plane-line" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}