const supabaseUrl = 'https://sxwilsumtjdqoupvooqo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN4d2lsc3VtdGpkcW91cHZvb3FvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE2NzAwMDksImV4cCI6MjA3NzI0NjAwOX0.Gfy8Q1kbadACTfAp982QK0VIWK1y16SWS8musUj2b48';

const { createClient } = supabase;
const client = createClient(supabaseUrl, supabaseKey);
console.log(createClient);
console.log(client);

export default client;