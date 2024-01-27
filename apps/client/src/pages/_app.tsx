import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot, useSetRecoilState } from "recoil";
import axios from "axios";
import { useEffect } from "react";
import { userState } from "store";

export default function App({ Component, pageProps }: AppProps) {
  return <div>
    <RecoilRoot>
      <InitUser />
      <Component {...pageProps} />;
    </RecoilRoot>
  </div>
}

const InitUser = () => {
    const setUser = useSetRecoilState(userState);
    const init = async() => {
        try {
            const response = await axios.get("api/admin/me", {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            })

            if (response.data.username) {
                setUser({
                    isLoading: false,
                    userEmail: response.data.username
                })
            } else {
                setUser({
                    isLoading: false,
                    userEmail: null
                })
            }
        } catch (e) {

            setUser({
                isLoading: false,
                userEmail: null
            })
        }
    };

    useEffect(() => {
        init();
    }, []);

    return <>Manoj</>
}