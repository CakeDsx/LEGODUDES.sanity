export const products = {
    title: "Produkter",
    name: "products",
    type: "document",
    fields: [
        {
            title: "Produktnavn",
            name: "productname",
            type: "string",
        },
        {
            title: "produktlink",
            name: "producturl",
            type: "slug",
            options: {
                source: "productname",
                slugify: input => input.toLowerCase().replace(/\s+/g, '-')
            }
        },
        {
            title: "Pris",
            name: "price",
            type: "number",
        },
        {
            title: "produktbilde",
            name: "productimage",
            type: "image",
        },
        {
            title: "Kategori",
            name: "category",
            type: "reference",
            to: [{type: "Categories"}]
        },
        {
            title: "lager",
            name: "stock",
            type: "number",
        }
    ]
}