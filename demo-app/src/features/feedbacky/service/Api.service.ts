import axios from "axios";
abstract class ApiService {
  async post(url:string,data:any): Promise<any> {
    const response = await axios.post(url,data);
    return response
  }
}

export default ApiService;
