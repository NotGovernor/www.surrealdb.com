export async function createSticky(
    payload: Pick<Sticky, 'color' | 'content'>
): Promise<{
    success: boolean;
    sticky?: Sticky;
}> {
    return await (
        await fetch('/api/sticky', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
    ).json();
}