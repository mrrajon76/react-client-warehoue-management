import { useEffect, useState } from "react";

const useSingleItem = (itemId) => {

    const [details, setDetails] = useState([]);

    useEffect(() => {
        const url = `https://blooming-harbor-14420.herokuapp.com/inventory/${itemId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [itemId]);

    return [details, setDetails];
}

export default useSingleItem;