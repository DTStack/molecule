import { useState } from 'react';

// TODO
export default function useGetKeys() {
    const [keys] = useState<
        {
            keybindings: string;
            id: string;
            name: any;
        }[]
    >([]);

    return keys;
}
