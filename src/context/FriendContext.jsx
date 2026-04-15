"use client";
import React, {  createContext,  useEffect,  useState } from "react";
import { toast } from "react-toastify";

export const FriendContext = createContext();

export const FriendProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);
  const [timeline, setTimeline] = useState([]);
  const [loading, setLoading] = useState(true);

  const addTimelineEntry = (type, personName) => {
    const newEntry = {
      id: Date.now(),
      type: type, 
      title: `${type} with ${personName}`,
      date: new Date().toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric' 
      }),
    };
    
    setTimeline((prev) => [newEntry, ...prev]); 
    toast.success(`${type} with ${personName}!`); 
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/data.json");
        const data = await res.json();
        setFriends(data);
      } catch (error) {
        console.error("Data fetching failed:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <FriendContext.Provider value={{ friends, loading,timeline, addTimelineEntry }}>
      {children}
    </FriendContext.Provider>
  );
};