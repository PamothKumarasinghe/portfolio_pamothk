// app/api/test-connection/route.ts
import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const supabaseUrl = process.env.SUPABASE_URL!;
        const supabaseKey = process.env.SUPABASE_ANON_KEY!;

        // Check if environment variables are set
        if (!supabaseUrl || !supabaseKey) {
            return NextResponse.json({ 
                success: false,
                error: 'Missing Supabase credentials in .env.local',
                details: {
                    hasUrl: !!supabaseUrl,
                    hasKey: !!supabaseKey
                }
            }, { status: 500 });
        }

        // Create Supabase client
        const supabase = createClient(supabaseUrl, supabaseKey);

        // Test connection by querying a simple table or checking health
        const { data, error } = await supabase
            .from('projects')
            .select('*')
            .limit(1);

        if (error) {
            return NextResponse.json({ 
                success: false,
                error: 'Database query failed',
                details: error.message,
                hint: 'Make sure the "projects" table exists in your Supabase database'
            }, { status: 500 });
        }

        return NextResponse.json({ 
            success: true,
            message: '✅ Successfully connected to Supabase!',
            database: {
                url: supabaseUrl.substring(0, 30) + '...',
                projectsTableExists: true,
                
                data: data
            }
        });

    } catch (error) {
        return NextResponse.json({ 
            success: false,
            error: 'Unexpected error',
            details: error instanceof Error ? error.message : 'Unknown error'
        }, { status: 500 });
    }
}