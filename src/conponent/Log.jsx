import React from "react";
import { motion } from "framer-motion";
import packageinfo from "../update-log.json";

const LogEntry = ({ entry }) => (
  <motion.div
    className="mb-4"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-center mb-2">
      <span>{new Date(entry.time).toLocaleString()}</span>
    </div>
    <div className="flex items-center mb-2">
      <span>{`${entry.address.street}, ${entry.address.city}, ${entry.address.state}, ${entry.address.zipcode}`}</span>
    </div>
    <div className="flex items-center mb-2">
      <span>{entry.description}</span>
    </div>
    <div className="flex items-center mb-2">
      <span>{entry.version}</span>
    </div>
  </motion.div>
);

export default function Log() {
  return (
    <div
      id="log-window"
      className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-75"
    >
      <motion.div
        className="w-3/4 max-w-4xl p-6 overflow-y-auto bg-white rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="mb-4 text-2xl font-bold">更新日志</h2>
        <div id="log-entries">
          {Object.keys(packageinfo).map((key) => (
            <LogEntry key={key} entry={packageinfo[key]} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
