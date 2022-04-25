<template>
    <div class="addItem">
        <input type="text" v-model="item.name" />
        <span @click="addItem()"
         :class="[item.name ? 'active' : 'inactive' , 'plus']"> + </span>

    </div>
</template>

<script>
export default {
    data() {
        return {
            item :{
                name : ""
            }
        }
    },
    methods : {
        addItem() {
            if(this.item.name == "")
            return;

            axios.post('api/item/store' , {name : this.item}).then(
                response => {
                    console.log(response)
                    if (response.status == 201){
                        this.item.name == "";
                        this.$emit("addtolist")
                    }
                }).catch( error => {
                    console.log( error )
                })
        }
    }
}
</script>

<style scoped>
.plus {
    cursor: pointer;
    margin: 10px;
    padding: 5px;
}
.active {
    background: green;

}
.inactive {
    background: red;
}
</style>