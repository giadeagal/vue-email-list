const app = new Vue(
    {
        el: "#app",
        data: {
            list: []
        },
        mounted() {
            axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then(x => {
                        this.list.push(x.data.response)
                })
                axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then(x => {
                        this.list.push(x.data.response)
                })
                axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then(x => {
                        this.list.push(x.data.response)
                })
                axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then(x => {
                        this.list.push(x.data.response)
                })
                axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then(x => {
                        this.list.push(x.data.response)
                })
                axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then(x => {
                        this.list.push(x.data.response)
                })
                axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then(x => {
                        this.list.push(x.data.response)
                })
                axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then(x => {
                        this.list.push(x.data.response)
                })
                axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then(x => {
                        this.list.push(x.data.response)
                })
                axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then(x => {
                        this.list.push(x.data.response)
                })
        }
    }
)