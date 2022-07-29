Vue.createApp({
    data(){
        return{
        //空陣列放置list
        todo:[
            {
                id:1,
                content:'駕訓班',
                completed:false
            },
            {
                id:2,
                content:'寫程式',
                completed:true
            },
            {
                id:3,
                content:'帶狗狗去散步',
                completed:false
            },
        ],
        //空字串放置list內容
        num:0,
        text:'',
        edit:{},
        showdone:false,
        showundone:false,
        showall:true,
        }
    }, 
    methods:{
        addNewList(){
            if(this.text!=""){
            this.todo.push({
                id:this.todo.length+1,
                content:this.text,
                completed:false
            }),
            this.num++,
            this.text=""
            }
        },
        removeList(item){
            const i=this.todo.findIndex(obj => obj.id === item.id);
            console.log(i);
            this.todo.splice(i,1);
        },
        editList(item){
            //複製一份避免傳參考
            this.edit = { ...item };
        },
        doneEdit(){
            //利用id尋找相同位置的內容
            const i=this.todo.findIndex(obj => obj.id === this.edit.id);
           //把編輯好的內容放回去
            this.todo[i]=this.edit;
            //清空input
            this.edit={};
        },
        ShowList(i,j,k){
            this.showdone=i;
            this.showundone=j;
            this.showall=k;
        }
    },
    computed:{
        //不會改動原始值會產生一個新值
        countList(){
            return this.num++
        },
        DoneList(){   
            const listfilter=this.todo.filter(i => i.completed);
            return listfilter; 
            
        },
        UnDoneList(){
            const listfilter=this.todo.filter(i => !i.completed);
            return listfilter; 
        },

    },
    mounted(){
        
    }

}).mount('#app')