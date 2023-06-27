export async function GET() {
    // Custom select query for ordering
    const result = await surreal.query(
        'SELECT * FROM sticky ORDER BY updated DESC'
    );
    return NextResponse.json({
        success: true,
        stickies: result?.[0]?.result ?? [],
    });
}