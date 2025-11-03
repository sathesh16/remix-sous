import React from 'react'

function Input({children,type="text", className = "", ...props}) {
    const baseStyles = "w-full pr-10 pl-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500";
    // Combine all styles
    const styles = `${baseStyles} ${className}`;
  return (
    <input type={type} className={styles} {...props}/>  //spread props(other input attributes)
  )
}

export default Input
