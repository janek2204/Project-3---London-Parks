import axios from 'axios'
import { Image, Input } from 'semantic-ui-react'

const uploadURL = process.env.REACT_APP_CLOUDINARY_URL
const uploadPreset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET

export const ImageUploadField = ({ handleImageUrl, value }) => {

  const handleUpload = async event => {
    const data = new FormData()
    data.append('file', event.target.files[0])
    data.append('upload_preset', uploadPreset)
    const response = await axios.post(uploadURL, data)
    handleImageUrl(response.data.url)
  }
  return (
    <>
      <label>Profile Picture</label>
      {value ?
        <Image src={value} alt='Choosen image' fluid/>
        :
        <Input
          name='profilePicture'
          type='file'
          onChange={handleUpload} />
      }
    </>
  )
}
