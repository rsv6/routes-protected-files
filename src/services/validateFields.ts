
export function validateFields(field: string): boolean {
    if (field === undefined || field === "") {
        return false;
    }

    return true;
}