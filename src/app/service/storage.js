class StorageService {

    userCordsFromStorage = () => {
        const userLatitude = JSON.parse(((parseFloat(sessionStorage.getItem("latitude"))).toFixed(2)).toFixed(2));
        const userLongitude = JSON.parse(((parseFloat(sessionStorage.getItem("longitude"))).toFixed(2)).toFixed(2));
        return {
            userLatitude,
            userLongitude
        }
    }

    isLocationAllowed = () => {
        if (sessionStorage.getItem("latitude") && sessionStorage.getItem("longitude")) {
            return true;
        } else if (sessionStorage.length === 0) {
            return false;
        }
    }

    removeCoords = () => {
        sessionStorage.clear();
    }


}

export const storageService = new StorageService();