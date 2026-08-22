//const API_URL = "https://localhost:7232";
const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`;

export function getFoodImageUrl(imagePath?: string | null) {
    if (!imagePath) {
        return "/foodImage.webp";
    }

    return imagePath;
    
    //return `${API_URL}${imagePath}`;
}