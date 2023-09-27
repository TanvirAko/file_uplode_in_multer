 export function ProductSlug(name) {
    // Convert the name to lowercase and replace spaces with hyphens
    const slug = name.toLowerCase().replace(/\s+/g, '-');
    return slug;
  }
  
  