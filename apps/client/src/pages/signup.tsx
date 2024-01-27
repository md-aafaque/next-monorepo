import { Signup } from '@repo/ui/components';
import axios from 'axios';

export default function signupPage() {
    return <div>
        <Signup onClick={async (email, password) => {
            const response = await axios.post("/api/signup", {
                email: email,
                password: password
            })
            let data = response.data;
            localStorage.setItem("token", data.token);
        }}></Signup>
    </div>
}
