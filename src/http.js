import config from "@/config.json"
import axios from "axios"

let http = {
    post: (url, model) => {
        return new Promise((resolve, reject)=> {
            axios.post(config.url + url, model).then((res) => {
                resolve(res)
            })
        })
    },
    get: (url, model) => {
        return new Promise((resolve, reject)=> {
            axios.get(config.url + url,{ params: model}).then((res) => {
                resolve(res)
            })
        })
    },
}

export default http