import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';


//const supabase = createClient("#{SUPA_URL}#", "#{SUPA_KEY}#");
console.log(import.meta.env.VITE_SUPA_URL)
const supabase = createClient(import.meta.env.VITE_SUPA_URL, import.meta.env.VITE_SUPA_KEY)


export default function TestPage() {
    const [user, setUser] = useState<any>(null);


    const signIn = async () => {
        const { error } = await supabase.auth.signInWithPassword({
          email: 'email',
          password: '[pswd]'
        });
    
        if (error) {
          console.error('Error signing in:', error.message);
        } else {
          supabase.auth.getUser().then(res => {setUser(res); console.log(res)})
        }
      };

    const signOut = async () => {
        await supabase.auth.signOut();
        setUser(null);
      };

    return (
        <div className="flex flex-col items-center">
            {user ? (
                <button onClick={signOut}>Sign out</button>
            ) : (
                <button onClick={signIn}>Sign in</button>
            )}
        </div>
    );
}
