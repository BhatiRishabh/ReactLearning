import React, { useEffect } from "react";
import { FiCheckSquare, FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

const SlideInNotifications = ({ notifications, setNotifications }) => {
  const NOTIFICATION_TTL = 3000;

  const removeNotif = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  useEffect(() => {
    const timers = notifications.map((n) =>
      setTimeout(() => removeNotif(n.id), NOTIFICATION_TTL)
    );

    return () => timers.forEach((t) => clearTimeout(t));
  }, [notifications]);

  return (
    <div className="flex flex-col gap-2 w-72 fixed top-2 right-2 z-50 pointer-events-none">
      <AnimatePresence>
        {notifications.map((n) => (
          <motion.div
            key={n.id}
            layout
            initial={{ y: -15, scale: 0.95 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="p-2 flex items-start rounded gap-2 text-xs font-medium shadow-lg text-white bg-green-600 pointer-events-auto"
          >
            <FiCheckSquare className="mt-0.5" />
            <span>{n.text}</span>
            <button onClick={() => removeNotif(n.id)} className="ml-auto mt-0.5">
              <FiX />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default SlideInNotifications;
