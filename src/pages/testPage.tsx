import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Button, Card, PasswordInput, TextInput } from '@mantine/core'
import '../styles/styles.scss'


const supabase = createClient(import.meta.env.VITE_SUPA_URL, import.meta.env.VITE_SUPA_KEY)


export default function TestPage() {
    const [user, setUser] = useState<any>(null);
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
          setUser(supabase.auth.getUser());
        }
      };

    const signOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
          console.error('Error signing in:', error.message);
        } else {
          setUser(null);
        }
      };

    return (
        <div className='mydiv'>
          {!user ?
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
            <Button onClick={signIn}>Sign In</Button>
          </Card> 
          :
          <Card>
            <Button onClick={signOut}>Logout</Button>
          </Card>
          }
        </div>
    );
}
