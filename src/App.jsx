import React from 'react';
import reflecta_logo from './other_assets/reflecta.jpg';


const BASE_URL = import.meta.env.VITE_API_URL;
const API_USERS_URL = `${BASE_URL}/get_demo_users`
const App = () => {
      const [users,setUsers] = useState(null)
      useEffect(() => {
            axios.get(API_USERS_URL)
                .then((response) => {
                    setUsers(response.data.status.number_of_users);
                })
                .catch((error) => {
                    console.log(error);
                });
        }, []);
    
       
    return (
        <div className='w-full h-screen pt-30 bg-white flex justify-center align-middle'>
            <div className='w-400 h-100 grid grid-cols-1 text-6xl'>
                <div className=' flex justify-center align-middle'><span className='tracking-tight font-medium text-purple-600'>{users} Reflectans have signed up and using the app.</span></div>
                <div className=' flex justify-center align-middle'><img src = {reflecta_logo} className='transform-content  delay-100 hover:-translate-y-2.5 transition-all shadow-2xl leading-2 ring-1 ring-purple-600  rounded-full h-50 w-50'/></div>
            </div>
        </div>
    )
}

export default App;