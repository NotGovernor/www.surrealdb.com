export async function POST(request: Request) {
    const sticky = (await request.json()) as Pick<Sticky, 'color' | 'content'>;
    const error = validateSticky(sticky);
    if (error) return error;

    // We extract the properties so that we don't pass unwanted properties to the sticky record
    const { content, color } = sticky;
    const created = new Date();
    const updated = created;
    const result = await surreal.create('sticky', {
        content,
        color,
        created,
        updated,
    });
    return NextResponse.json({
        success: true,
        sticky: result[0],
    });
