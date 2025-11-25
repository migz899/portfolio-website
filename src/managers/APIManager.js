class APIManager {
    static BASE_URL_TIME = "https://worldtimeapi.org/api"; // default API

    // Get current server time based on IP
    static async getServerTime() {
        try {
            const response = await fetch(`${this.BASE_URL_TIME}/ip`);
            if (!response.ok) throw new Error("Failed to fetch time");
            const data = await response.json();
            return data.datetime;
        } catch (error) {
            console.error("Error fetching server time:", error);
            return null;
        }
    }
}

export default APIManager;