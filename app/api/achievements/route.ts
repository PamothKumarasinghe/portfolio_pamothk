import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

// Enable caching with revalidation
export const revalidate = 60; // Revalidate every 60 seconds

export async function GET() {
    try {
        const { data, error } = await supabase
            .from('achievements')
            .select('*')
            .order('date', { ascending: false });
        
        if (error) {
            return NextResponse.json(
                { error: error.message },
                { 
                    status: 500,
                    headers: {
                        'Cache-Control': 'no-store', // Don't cache errors
                    }
                }
            );
        }
        
        return NextResponse.json(data, {
            status: 200,
            headers: {
                'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30',
            }
        });
    } catch (error: any) {
        return NextResponse.json(
            { error: 'Internal server error' },
            { 
                status: 500,
                headers: {
                    'Cache-Control': 'no-store',
                }
            }
        );
    }
}