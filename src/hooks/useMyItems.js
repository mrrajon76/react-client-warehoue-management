import { useEffect, useState } from "react";

const useMyItems = (user) => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/inventory?email=${user}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [user]);

    return [items, setItems];
}

export default useMyItems;