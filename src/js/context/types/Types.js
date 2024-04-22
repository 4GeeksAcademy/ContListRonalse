/*export const GET_USERS ="GET_USERS";
export const GET_PROFILE ="GET_PROFILE";

export const ListContact =()=>{
const [users, setUsers] = useState([]);

const getData = async () => {
  const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const requestOptions = {
method: "GET",
headers: myHeaders,
};

fetch("https://playground.4geeks.com/contact/agendas/Marcos/contacts", requestOptions)
.then((response) => response.json())
.then((result) => {setUsers(result.contacts)
console.log(result)})
.catch((error) => console.error(error));
}
useEffect (()=>{
  getData();
},[])
 */