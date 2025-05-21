"use client";
import React, { useState, useEffect } from "react";
import { Collapse } from "antd";
import { Minus, Plus } from "lucide-react";
import { Spin } from "antd"; // You can use any loader or spinner
import { TbRuler } from "react-icons/tb";

type ExpandIconPosition = "start" | "end";

interface KnowledgecenterProps {
  data: any[]; // Define the data type more specifically if needed
}

const Knowledgecenter: React.FC<KnowledgecenterProps> = ({ data }) => {
  const [expandIconPosition, setExpandIconPosition] = useState<ExpandIconPosition>("end");
  const [loading, setLoading] = useState(false);
  const [displayArr,setDisplayArr] = useState([])

  const onChange = (key: string | string[]) => {
    // Handle collapse change event if needed
    console.log(key);

        setDisplayArr(key)
  };

 

  return (
    <div>
      <div id="faqs" className="sjcontainer">
        {data.length !== 0 && (
          <h2 className="text-xl md:text-3xl mt-10 mb-6">Frequently Asked Questions</h2>
        )}

        {/* Conditionally render loader or collapse content */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Spin size="large" /> {/* You can replace Spin with any loader */}
          </div>
        ) : data?.length === 0 ? (
          <div className="flex justify-center items-center text-3xl h-64 text-gray-500">
            <p>No data found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> {/* Use grid or flex for layout */}
            {data.map((item) => (
              <Collapse
                key={item.key}
                defaultActiveKey={displayArr}
                onChange={onChange}
                expandIconPosition={expandIconPosition}
                items={[item]} // Pass a single item as an array
                expandIcon={({ isActive }) => (
                  <span className="flex items-center justify-center">
                    {isActive ? <Minus size={25} strokeWidth={2} color="#0a2351" /> : <Plus size={25} strokeWidth={2} color="#0a2351" />}
                  </span>
                )}
                className="space-y-4"
                bordered={false}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Knowledgecenter;
