import { useState } from 'react';
import { Button, Card, PasswordInput, TextInput, Text } from '@mantine/core'
import '../styles/styles.scss'
import { supabase } from '../supabase/supabase';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { login, logout } from '../store/slices/userSlice';
import { getUserLogged, setUserLogged } from '../store/localStorage/settings';
import { useNavigate } from 'react-router-dom';



export default function TestPage() {
    const dispatch = useAppDispatch();
    const loginUser = () => dispatch(login());
    const logoutUser = () => dispatch(logout());
    const user = useAppSelector((state) => state.user);
    let navigate = useNavigate(); 

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');


    const signIn = async () => {
        const { error } = await supabase.auth.signInWithPassword({
          email: email,
          password: password
        });
    
        if (error) {
          console.error('Error signing in:', error.message);
        } else {
          loginUser();
          setUserLogged(true)
        }
      };

    const signOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
          console.error('Error signing in:', error.message);
        } else {
          logoutUser();
          setUserLogged(false)
        }
      };
    
    const goToDashboard = () => {
      const path = '/dashboard'; 
      navigate(path);
    }

    return (
        <div className='center'>
          {!getUserLogged() ?
          <Card>
            <TextInput 
              value={email}
              onChange={(event) => setEmail(event.currentTarget.value)} 
              description='Email'>
            </TextInput>
            <PasswordInput 
              value={password}
              onChange={(event) => setPassword(event.currentTarget.value)} 
              description='Password'>
            </PasswordInput>
            <Button onClick={signIn}>Login</Button>
          </Card> 
          :
          <Card>
            <Button onClick={goToDashboard}>Dashboard</Button>
            <Button onClick={signOut}>Logout</Button>
            <Text>{user.login.valueOf()} sas</Text>
          </Card>
          }
        </div>
    );
}
