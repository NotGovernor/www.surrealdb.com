export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    const { id, ...validation } = validateId(params.id);
    if (validation.error) return validation.error;

    const result = await surreal.delete(`sticky:${id}`);
    return NextResponse.json({
        success: true,
        sticky: result[0],
    });
}