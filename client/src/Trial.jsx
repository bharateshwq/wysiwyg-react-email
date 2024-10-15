import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card'; // Adjust your import as necessary

const Draggable = ({ item }) => {
  return (
    <motion.div
      draggable
      onDragStart={(e) => {
        e.dataTransfer.setData("application/json", JSON.stringify(item));
      }}
      className="cursor-pointer"
    >
      <Card className="p-4 flex items-center space-x-2 hover:bg-gray-50">
        <div className="text-2xl">{item.icon}</div>
        <div>{item.name}</div>
      </Card>
    </motion.div>
  );
};

const WYSIWYGEditor = () => {
  const [emailContent, setEmailContent] = useState([]);

  const contentItems = [
    { name: "Heading", type: "h1", icon: "🅗" },
    { name: "Paragraph", type: "p", icon: "🅟" },
  ];

  const handleAddElement = (item) => {
    setEmailContent((prev) => [
      ...prev,
      { type: item.type, content: item.name },
    ]);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex flex-1 overflow-hidden">
        {/* Content Panel */}
        <div className="w-1/4 p-4 border-r">
          {contentItems.map((item) => (
            <Draggable key={item.name} item={item} />
          ))}
        </div>

        {/* Email Preview Area */}
        <div
          onDragOver={(e) => e.preventDefault()} // Allow drop
          onDrop={(e) => {
            e.preventDefault();
            const data = e.dataTransfer.getData("application/json");
            const item = JSON.parse(data);
            handleAddElement(item);
          }}
          className="flex-1 p-4 bg-gray-200 border-l"
        >
          <div className="bg-white p-4 rounded shadow">
            {emailContent.map((element, index) => {
              if (element.type === "h1") {
                return (
                  <input
                    key={index}
                    type="text"
                    value={element.content}
                    onChange={(e) => {
                      const newContent = [...emailContent];
                      newContent[index].content = e.target.value;
                      setEmailContent(newContent);
                    }}
                    className="text-2xl font-bold border-b mb-2 w-full"
                    placeholder="Heading"
                  />
                );
              }
              if (element.type === "p") {
                return (
                  <textarea
                    key={index}
                    value={element.content}
                    onChange={(e) => {
                      const newContent = [...emailContent];
                      newContent[index].content = e.target.value;
                      setEmailContent(newContent);
                    }}
                    className="border rounded w-full mb-2"
                    placeholder="Paragraph"
                  />
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WYSIWYGEditor;
