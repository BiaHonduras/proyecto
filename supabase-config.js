// supabase-config.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.38.0/+esm';

const SUPABASE_URL = 'https://czxzghhwgfciyrgmgtai.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6eHpnaGh3Z2ZjaXlyZ21ndGFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMxNzYxMTgsImV4cCI6MjA4ODc1MjExOH0.LdODWE1RDggRq11NkfgFTUVv6g1E5iQxTfOtZnV0gF0';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Función para verificar conexión
export async function verificarConexion() {
    try {
        const { data, error } = await supabase.from('usuarios').select('count()', { count: 'exact' });
        if (error) throw error;
        console.log('✓ Conexión a Supabase exitosa');
        return true;
    } catch (error) {
        console.error('✗ Error de conexión:', error);
        return false;
    }
}
