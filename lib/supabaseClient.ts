import { createClient } from '@supabase/supabase-js'

import { Database } from '../types/supabase'

const url = String(process.env.NEXT_PUBLIC_SUPABASE_URL)
const key = String(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
export const supabase = createClient<Database>(url, key)
