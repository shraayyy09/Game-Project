import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xakcdcgzfpbtsrlnbpyf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhha2NkY2d6ZnBidHNybG5icHlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU1Mjg5MTksImV4cCI6MjA0MTEwNDkxOX0.QjQEM7m83Q3bCzW1NE7_MkDAFjMjGQvICEyrRKnJNXo';
export const supabase = createClient(supabaseUrl, supabaseKey);

const saveScore = async (score) => {
    const { data, error } = await supabase.from('scores').insert([{ score }]);
    if (error) console.error('Error saving score:', error);
    else console.log('Score saved:', data);
  };

  <div className="bg-gray-900 text-white p-4 rounded-md shadow-lg">100: {score}</div>
