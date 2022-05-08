import { useEffect, useState } from "react";

const useSingleItem = (itemId) => {

    const [details, setDetails] = useState([]);
    // const url = `https://blooming-harbor-14420.herokuapp.com/inventory/${itemId}`;
    const url = `http://localhost:5000/inventory/${itemId}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, []);

    return [details, setDetails];
}

export default useSingleItem;