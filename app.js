const app = Vue.createApp({
    //data, functions
    data(){
        return {
            showBooks:true,
           books:[
            {title: 'first book', author: 'me', age:27},
            {title: 'second book', author: 'me', age:27},
            {title: 'third book', author: 'me', age:27},
           ],
            x:0,
            y:0,
            url: "https://www.youtube.com/watch?v=CYPZBK8zUik&list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1&index=3",
            
        }
    },
    methods:{
        toggleShowBooks(){
            this.showBooks =!this.showBooks
        },
        handleEvent(e,data){
            if(data){
                console.log(e,e.type)
                console.log('data :>> ', data);
            }
        },
        handleMove(e){
            this.x = e.offsetX,
            this.y= e.offsetY
        }

    }

})

app.mount("#app")