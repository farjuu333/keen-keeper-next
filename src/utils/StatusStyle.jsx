export const getStatusStyles = (status) => {
  if (!status) return "bg-gray-100 text-gray-600";
  
  switch (status.toLowerCase()) {
    case "overdue":
      return "bg-red-500 text-white";
    case "almost due":
      return "bg-amber-500 text-white";
    case "on-track":
      return "bg-[#244D3F] text-white";
    default:
      return "bg-gray-100 text-gray-600";
  }
};