import React from "react";

function Content() {
  const imageSPb = `./media/saint-petersburg.webp`
  const altText = 'image saint-petersburg'
 
  return (
    <div>
      <img src={imageSPb} alt={altText}/>
      <h1

      >Error</h1>
    </div>
  );
}
export default Content;