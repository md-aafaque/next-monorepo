import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useRouter } from "next/router.js";
import { isUserLoading } from "store";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { userState } from "store";
import { emailState } from "store";

export function Appbar({}) {
    const router = useRouter()
    const userLoading = useRecoilValue(isUserLoading);
    const userEmail = useRecoilValue(emailState);
    const setUser = useSetRecoilState(userState);

    if (userLoading) {
        return <></>
    }

    if (userEmail) {
        return <div style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 4,
            zIndex: 1
        }}>
            <div style={{marginLeft: 10, cursor: "pointer"}} onClick={() => {
                router.push("/")
            }}>
                <Typography variant={"h6"}>Courzero</Typography>
            </div>
    
            <div style={{display: "flex"}}>
                <div style={{marginRight: 10, display: "flex"}}>
                <div style={{marginRight: 10}}>
                        <Button
                            onClick={() => {
                                router.push("/addcourse")
                            }}
                        >Add course</Button>
                    </div>

                    <div style={{marginRight: 10}}>
                        <Button
                            onClick={() => {
                                router.push("/courses")
                            }}
                        >Courses</Button>
                    </div>

                    <Button
                        variant={"contained"}
                        onClick={() => {
                            localStorage.removeItem("token");
                            setUser({
                                isLoading: false,
                                email: null
                            })
                        }}
                    >Logout</Button>
                </div>
            </div>
        </div>
    } else {
        return <div style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 4,
            zIndex: 1
        }}>
            <div style={{marginLeft: 10, cursor: "pointer"}} onClick={() => {
                router.push("/")
            }}>
                <Typography variant={"h6"}>Courzero</Typography>
            </div>
    
            <div style={{display: "flex"}}>
                <div style={{marginRight: 10}}>
                    <Button
                        variant={"contained"}
                        onClick={() => {
                            router.push("/signup")
                        }}
                    >Signup</Button>
                </div>
                <div>
                    <Button
                        variant={"contained"}
                        onClick={() => {
                            router.push("/signin")
                        }}
                    >Signin</Button>
                </div>
            </div>
        </div>
    }
}
