export function updateStateByName<T>(
    setState: React.Dispatch<React.SetStateAction<T>>
) {
    return (name: keyof T, value: unknown) => {
        setState(prev => ({
            ...prev,
            [name]: value,
        }));
    };
}
