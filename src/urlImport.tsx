const eval2 = eval;

export function importFromUrl(url: string): Promise<{ default }> {
    const importf = eval2('x=>import(x)');
    return importf(url);
}
