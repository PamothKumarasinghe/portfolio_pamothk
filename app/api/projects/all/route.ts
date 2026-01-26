import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export const revalidate = 60; // revalidate every 60 seconds

export async function GET() {
    try {
        const { data, error } = await supabase
            .from('projects')
            .select('*')
            .order('created_at', { ascending: false });
    
        if (error) {
            return NextResponse.json(
                { error: error.message },
                {
                    status: 500, 
                    headers: {
                        'Cache-Control': 'no-store',
                        'Content-Type': 'application/json'
                    }
                }
            )
        }
    
        return NextResponse.json(data, {
            status: 200,
            headers: {
                'Cache-Control': 'no-store',
                'Content-Type': 'application/json'
            }
        });
    }
    catch (error: any) {
        return NextResponse.json(
            { error: 'Internal Server Error: ' + error.message },
            {
                status: 500, 
                headers: {
                    'Cache-Control': 'no-store',
                    'Content-Type': 'application/json'
                }
            }
        )
    }
}
