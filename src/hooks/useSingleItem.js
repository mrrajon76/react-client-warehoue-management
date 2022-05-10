import { useEffect, useState } from "react";

const useSingleItem = (itemId, quantity) => {

    const [details, setDetails] = useState([]);

    useEffect(() => {
        const url = `https://blooming-harbor-14420.herokuapp.com/inventory/${itemId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [itemId, quantity]);

    return [details];
}

export default useSingleItem;