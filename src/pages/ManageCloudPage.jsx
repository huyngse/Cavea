import React from 'react'
import { CloudinaryContext, Image, Transformation } from 'cloudinary-react';
import { useState } from 'react';
import axios from 'axios';

function ManageCloudPage() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async (event) => {
        if (!selectedFile) {
            return;
        }
        const formData = new FormData();
        formData.append('file', selectedFile, 'birdtype-1.jpg');
        formData.append('upload_preset', 'hogpyssg');
        formData.append('public_id', 'birdtype-1');
        try {
            const response = await axios.post(
                `https://api.cloudinary.com/v1_1/deya02mfb/image/upload`,
                formData
            );
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    )
}

export default ManageCloudPage