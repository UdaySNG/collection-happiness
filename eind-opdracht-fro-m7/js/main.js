class Api {
    data = null;
    async getData() {
        await fetch("../data/data.json").then(response => {
            return response.json();
        }).then(newData => {
            this.data = newData.data; //newData["data"]
        }); 
    }
}
