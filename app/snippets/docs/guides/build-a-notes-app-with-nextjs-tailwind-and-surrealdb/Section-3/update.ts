export async function PATCH(
    request: Request,
    { params }: { params: { id: string } }
) {
    const { id, ...validation } = validateId(params.id);
    if (validation.error) return validation.error;

    const sticky = (await request.json()) as Partial<
        Pick<Sticky, 'color' | 'content'>
    >;

    const error = validateSticky(sticky);
    if (error) return error;

    const update: Partial<Sticky> = { updated: new Date() };
    if (sticky.color) update.color = sticky.color;
    if (sticky.content) update.content = sticky.content;

    const result = await surreal.merge(`sticky:${id}`, update);
    return NextResponse.json({
        success: true,
        sticky: result[0],
    });
}