import {useState} from 'react';
import storage from './firebase';
import avatar from '../img/login.png'

const Upload = () => {

  const [file, setFile] = useState([]);
  const [url, setURL] = useState(avatar);

  const handleChange=(e)=> {
    //file.forEach()
    setFile(e.target.files[0]);
    //console.log(e);
  }

  const handleUpload=(e)=> {
    e.preventDefault();
    console.log(e);
    const ref = storage.ref(`/images/${file.name}`);
    const uploadTask = ref.put(file);
    uploadTask.on("state_changed", console.log, console.error, () => {
      ref
        .getDownloadURL()
        .then((url) => {
          setFile(null);
          setURL(url);
        });
    });
  }

  return (
    <div className="App">
        <div>
        <form onSubmit={handleUpload}>
            <input type="file" onChange={handleChange} />
            <button disabled={!file}>upload to firebase</button>
        </form>
        <img src={url} alt=""/>
        </div>
    </div>
  );
}
  
export default Upload;