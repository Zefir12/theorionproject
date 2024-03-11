import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Button, Card, TextInput } from '@mantine/core'


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

        }
      };

    const signOut = async () => {
        await supabase.auth.signOut();
        setUser(null);
      };

    return (
        <div>
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
        </div>
    );
}
