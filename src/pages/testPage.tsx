import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
<<<<<<< HEAD
import { Button, TextInput } from '@mantine/core';
=======
import { Button, Card, TextInput } from '@mantine/core'
>>>>>>> d136e5d49228ff270a39151120f322cec95c1a50


const supabase = createClient(import.meta.env.VITE_SUPA_URL, import.meta.env.VITE_SUPA_KEY)


export default function TestPage() {
    const [user, setUser] = useState<any>(null);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');


    const signIn = async () => {
<<<<<<< HEAD
        const { data, error } = await supabase.auth.signInWithPassword({
          email: 'szefer397@gmail.com',
          password: '666666'
=======
        const { error } = await supabase.auth.signInWithPassword({
          email: email,
          password: password
>>>>>>> d136e5d49228ff270a39151120f322cec95c1a50
        });
        console.log(data)
    
        if (error) {
          console.error('Error signing in:', error.message);
        } else {
          setUser(data)
        }
      };

    const signOut = async () => {
        await supabase.auth.signOut();
        setUser(null);
      };

    return (
        <div className="flex flex-col items-center">
<<<<<<< HEAD
          <TextInput></TextInput>
          <Button>asd</Button>
          <button onClick={signIn}>Sign in</button>
=======
          {user ??
          <Card>
            <TextInput 
              value={email}
              onChange={(event) => setEmail(event.currentTarget.value)} 
              description='Email'>
            </TextInput>
            <TextInput 
              value={password}
              onChange={(event) => setPassword(event.currentTarget.value)} 
              description='Password'>
            </TextInput>
            <Button onClick={signIn}>Sign In</Button>
          </Card>
          }
>>>>>>> d136e5d49228ff270a39151120f322cec95c1a50
        </div>
    );
}
