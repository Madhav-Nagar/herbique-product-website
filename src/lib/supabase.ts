import { createClient } from "@supabase/supabase-js"

const SUPABASE_URL = "https://sxrgwqvcglolyqxemkfi.supabase.co"
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN4cmd3cXZjZ2xvbHlxeGVta2ZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU0MzI4NTMsImV4cCI6MjEwMTAwODg1M30.rINw3LnJiEYcPRA61BwezctFOwyXJwwds2mUKnWboXg"

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
