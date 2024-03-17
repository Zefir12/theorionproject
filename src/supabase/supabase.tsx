import { createClient } from "@supabase/supabase-js";
import { Database } from "./supabaseSchemas/supaDatabase";


export const supabase = createClient<Database>(import.meta.env.VITE_SUPA_URL, import.meta.env.VITE_SUPA_KEY)