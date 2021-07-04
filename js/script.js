const app = new Vue(
    {
        el: "#app",
        data: {
            list: []
        },
        mounted() {
            for (let i = 0; i < 10; i++) {
                axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then(x => {
                        this.list.push(x.data.response)
                })
            }
        }
    }
)