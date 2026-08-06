const API_URL = "https://localhost:7232";

export function getFoodImageUrl(imagePath?: string | null) {
    if (!imagePath) {
        return "/foodImage.webp";
    }

    return `${API_URL}${imagePath}`;
}