import { useEffect, useState } from "react";
import { Button, Card, PasswordInput, TextInput } from "@mantine/core";
import "../styles/styles.scss";
import { supabase } from "../supabase/supabase";
import { useNavigate } from "react-router-dom";
import { getUserLogged, setUserLogged } from "../store/localStorage/settings";

export default function LoginPage() {
    const [userLoggedIn, setUserLoggedIn] = useState<boolean>(getUserLogged());
    const navigate = useNavigate();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const signIn = async () => {
        const { error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });

        if (error) {
            console.error("Error signing in:", error.message);
        } else {
            setUserLogged(true);
            setUserLoggedIn(true);
        }
    };

    const goToDashboard = () => {
        const path = "/dashboard";
        navigate(path);
    };

    useEffect(() => {
        if (userLoggedIn) {
            goToDashboard();
        }
    }, [userLoggedIn]);

    return (
        <div className="center">
            <Card>
                <TextInput mt={5} value={email} onChange={(event) => setEmail(event.currentTarget.value)} description="Email"></TextInput>
                <PasswordInput mt={5} value={password} onChange={(event) => setPassword(event.currentTarget.value)} description="Password"></PasswordInput>
                <Button mt={20} mb={10} onClick={signIn}>
                    Login
                </Button>
            </Card>
        </div>
    );
}
