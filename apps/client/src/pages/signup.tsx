import { Signup } from '@repo/ui/components';

export default function signupPage() {
    return <div>
        <Signup onClick={async (email, password) => {
            alert(email)
            alert(password)
        }}></Signup>
    </div>
}
{/* onClick={async() => {
                        const response = await axios.post(`${BASE_URL}/admin/signup`, {
                            username: email,
                            password: password
                        })
                        let data = response.data;
                        localStorage.setItem("token", data.token);
                        // window.location = "/"
                        setUser({userEmail: email, isLoading: false})
                        router.push("/courses");
                    }} */}