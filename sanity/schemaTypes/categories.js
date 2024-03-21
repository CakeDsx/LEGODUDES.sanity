export const categories  = 
    {
        title: "Kategorier",
        name: "Categories",
        type: "document",
        fields: [
          {
            title: "Kategoritittel",
            name: "Categorytitle",
            type: "string"
          },
          {
            title: "Kategorilink",
            name: "Categoryurl",
            type: "slug",
            options: {
                source: "Categorytitle",
                slugify: input => input.toLowerCase().replace(/\s+/g, '-')
            }
          }
        ]
      }  
    