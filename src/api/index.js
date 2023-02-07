import axios from "axios"

const sendData = async (data) => {
    const result = await axios.post(process.env.REACT_APP_BACKEND_ENDPOINT, data,{
        responseType: 'blob'
      });
    console.log(result);
    return result
}

export default sendData;