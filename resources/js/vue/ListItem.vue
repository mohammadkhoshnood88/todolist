<template>
    <div>
        <div class="item">
            
            <input type="checkbox"
            @change="updateCheck()"
            v-model="item.completed"
            />
            <span :class="[item.completed ? 'completed' : '' , 'itemtext']"> {{ item.name }} </span>
        </div>
    </div>
    
</template>

<script>

import ListItem from "./ListItem"

export default {
        props : ['item'],
        methods : {
            updateCheck() {
                axios.put("api/item/" + this.item.id , {
                    item : this.item
                }).then( response =>
                {
                    if (response.status == 200){
                        this.$emit('itemchanged')
                    }
                }).catch(error => {
                    console.log(error)
                })
            }
        }
      

}
</script>

<style scoped>
.item {
    background: #e6e6e6;
    padding : 5px;
    margin-top : 5px;
    justify-content: center;
    align-items: center;
}
.completed {
    text-decoration: line-through;
    color : #999999;
}
.itemtext {
    width: 100%;
}
</style>