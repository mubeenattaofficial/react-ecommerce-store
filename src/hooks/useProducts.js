import { useState, useEffect } from "react";

const useProducts = () => {

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("all");
    const [sort, setSort] = useState("default");
    const [product, setProduct] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        let url;
        const controller = new AbortController();

        if (search !== "") {
            url = `https://dummyjson.com/products/search?q=${search}`;
        }
        else if (category !== "all") {
            url = `https://dummyjson.com/products/category/${category}`;
        }
        else {
            url = 'https://dummyjson.com/products';
        }

        if (sort === "lowToHigh") {
            url += url.includes("?") ? "&sortBy=price&order=asc" : "?sortBy=price&order=asc";
        }
        else if (sort === "highToLow") {
            url += url.includes("?") ? "&sortBy=price&order=desc" : "?sortBy=price&order=desc";
        }

        fetch(url, { signal: controller.signal })
            .then(res => res.json())
            .then(data => setProduct(data.products))
            .catch(err => {
                if (err.name !== "AbortError") {
                    console.error(err);
                }
            });

        return () => controller.abort();

    }, [search, category, sort]);

    useEffect(() => {
        fetch('https://dummyjson.com/products/categories')
            .then(res => res.json())
            .then(data => {
                setCategories(data);
            })
    }, []);

    return {
        search,
        setSearch,
        category,
        setCategory,
        sort,
        setSort,
        product,
        categories
    }
}

export default useProducts;