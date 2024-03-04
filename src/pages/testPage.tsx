import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Button, TextInput } from '@mantine/core';


const supabase = createClient(import.meta.env.VITE_SUPA_URL, import.meta.env.VITE_SUPA_KEY)


export default function TestPage() {
    const [user, setUser] = useState<any>(null);


    const signIn = async () => {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: 'szefer397@gmail.com',
          password: '666666'
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
          <TextInput></TextInput>
          <Button>asd</Button>
          <button onClick={signIn}>Sign in</button>
        </div>
    );
}
