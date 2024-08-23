import React, { useState, DragEvent, useRef } from 'react';

const FileDropArea = () => {
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0];
      setFile(droppedFile);
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      <div
        className=' border-dashed border-[1.4px] border-[#464545]  rounded-lg flex flex-col items-center justify-center w-full h-full mb-8'
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={handleClick}
      >
        <img src="./assets/excel.png" alt="" />
        {file ? (
          <p className='text-xs p-4  md:text-base' >{file.name}</p>
        ) : (
          <div className='text-xs p-4 md:text-base'><p>Upload your excel sheet &nbsp;</p><span onClick={handleClick} className= "text-[#605BFF] cursor-pointer"><p>upload</p></span></div>
        )}
      </div>
      <button 
        className={`${file?"bg-[#605BFF]":"bg-[#aaa7f6] h-14"} w-full flex justify-center items-center rounded-md `} 
        onClick={handleClick}
        disabled={!file?true:false}
      >
        <img src="./icons/upload.png" alt=""  className='pr-3'/>
        Upload
      </button >
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </>
  );
};

export default FileDropArea;
