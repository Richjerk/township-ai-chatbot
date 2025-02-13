import { createClient } from '@supabase/supabase-js'

const supabase = createClient(https://tfirbfxicnbjejsosmpi.supabase.co, eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmaXJiZnhpY25iamVqc29zbXBpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMwNDM2OTIsImV4cCI6MjA0ODYxOTY5Mn0.TiUNYJDJvRymLrlZxygHdjASjJsvpNhfFbCxVqdANBg)

const { data, error } = await supabase
  .from('todos')
  .select()
