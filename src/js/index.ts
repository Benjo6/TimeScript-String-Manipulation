new Vue({
    // TypeScript compiler complains about Vue because the CDN link to Vue is in the html file.
    // Before the application runs this TypeScript file will be compiled into bundle.js
    // which is included at the bottom of the html file.
    el: "#app",
    data: {
        string: "",
        result: "",
        select: ""
    },
    methods: {
        doIt() {
            console.log("Do It" + this.string)
            if (this.select == "val1") {
                this.result = this.string.toUpperCase()
            }
            else if (this.select == "val2") {
                this.result = this.string.toLowerCase()
            }
            else{
               this.result = this.string
            }
        }
    }
})