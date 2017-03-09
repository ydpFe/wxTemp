<template>
	<brandSearch :importType="importType"></brandSearch>
</template>

<script>
"use strict";
import brandSearch from './brandSearch.vue'

export default {
    data() {
        return {
            importType: null
        }
    },
    created() {
    	let name = decodeURIComponent(this.$route.query.name);
        this.importType = Number(this.$route.query.typeId);
    	document.title = "选择品牌(" + name + ")";
    },
    components: {
        "brandSearch": brandSearch,
    }
}
</script>