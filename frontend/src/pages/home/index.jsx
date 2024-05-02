import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css'

function Home() {
  const navigate=useNavigate()

const handleSubmit=async(e)=>{
    e.preventDefault()
    const formData = new FormData(e.target);
    try {
      const response = await fetch('http://localhost:8000/api/upload', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data); // You can handle the response data here
        navigate("/view")
      } else {
        console.error('Failed to upload files');
      }
    } catch (error) {
      console.error('Error uploading files:', error);
    }
}
  return (
    <>
      <div className="container">
          <h1>Drop your Excel sheet And .Zip folder Here &darr;</h1>
        <form onSubmit={handleSubmit}  encType='multipart/form-data'>
        
          <div>
            <label htmlFor="file1">Upload Excel</label>
            <input type="file" required name="file1" id="file1" />
          </div>

          <div>
            <label htmlFor="file2">Upload Zip folder</label>
            <input type="file" required name="file2" id="file2" />

          </div>
          <div>
            <input className='submit-btn' type="submit" value="submit"  />
          </div>
        </form>

      </div>
    </>
  )
}

export default Home;
