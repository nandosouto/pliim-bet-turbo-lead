
import React, { useEffect, useState } from "react";
import { Check } from "lucide-react";

const names = [
  "Maria S.", "João L.", "Ana P.", "Carlos M.", "Fernanda R.", 
  "Lucas T.", "Juliana V.", "Ricardo K.", "Patricia Z.", "Eduardo W.",
  "Camila N.", "Bruno D.", "Larissa F.", "Daniel H.", "Laura J."
];

const DynamicNotifications = () => {
  const [notification, setNotification] = useState<string | null>(null);
  const [key, setKey] = useState(0);

  useEffect(() => {
    // Initial delay before showing first notification
    const initialTimeout = setTimeout(() => {
      showNotification();
    }, 3000);

    return () => clearTimeout(initialTimeout);
  }, []);

  const showNotification = () => {
    // Get random name
    const randomName = names[Math.floor(Math.random() * names.length)];
    setNotification(`${randomName} entrou no grupo!`);
    setKey(prevKey => prevKey + 1);
    
    // Schedule next notification after random interval (5-15s)
    const nextNotificationDelay = 5000 + Math.random() * 10000;
    setTimeout(() => {
      showNotification();
    }, nextNotificationDelay);
  };

  if (!notification) return null;

  return (
    <div key={key} className="notification z-40">
      <div className="bg-[#00B300] rounded-full p-1">
        <Check className="h-3 w-3 text-white" />
      </div>
      <span className="text-white font-medium">{notification}</span>
    </div>
  );
};

export default DynamicNotifications;
