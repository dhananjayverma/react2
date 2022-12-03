import './App.css';
import Avatar from "./Components/Avatar";
import Button from './Components/Button';
const users=[{
  id:1,
  email:"michael.lawson@reqres.in",
  first_name:"Michael",
  last_name:"Lawson",
  avatar: "https://reqres.in/img/faces/7-image.jpg",
  rounded:true
},
{
  id: 8,
  email: "lindsay.ferguson@reqres.in",
  first_name: "Lindsay",
  last_name: "Ferguson",
  avatar: "https://reqres.in/img/faces/8-image.jpg",
  rounded: false
},
{
  id: 9,
  email: "tobias.funke@reqres.in",
  first_name: "Tobias",
  last_name: "Funke",
  avatar: "https://reqres.in/img/faces/9-image.jpg",
  rounded: false
},
{
  id: 10,
  email: "byron.fields@reqres.in",
  first_name: "Byron",
  last_name: "Fields",
  avatar: "https://reqres.in/img/faces/10-image.jpg",
  rounded: true
},
{
  id: 11,
  email: "george.edwards@reqres.in",
  first_name: "George",
  last_name: "Edwards",
  avatar: "https://reqres.in/img/faces/11-image.jpg",
  rounded: true
},
{
  id: 12,
  email: "rachel.howell@reqres.in",
  first_name: "Rachel",
  last_name: "Howell",
  avatar: "https://reqres.in/img/faces/12-image.jpg",
  rounded:true
}]
const avatar=users.map(({id,avatar,first_name,rounded})=>(
  <Avatar key={id} src={avatar} name={first_name} rounded={rounded}/> 
));
const fun1=()=>alert("hello dhananjay verma")
const fun2=()=>console.log("sicret superstar..");
function App() {
  return (
    <div className="App">
    <h1>Hello ptweb06</h1>
    {avatar}
    <Button text="click1" onClick={fun1}></Button>
    <Button text="click2" onClick={fun2}></Button>
      
    </div>
  );
}

export default App;
