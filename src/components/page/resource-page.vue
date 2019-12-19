<template>
    <div class="audit-wrap">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-s-custom"></i> 资源管理</el-breadcrumb-item>
                <el-breadcrumb-item>资源列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="content-wrap">
            <el-row>
                <el-col :span="24"><div>编辑栏</div></el-col>
            </el-row>
            <el-row>
                <el-col :span="6">
                    <div class="site-left">站点列表</div>
                </el-col>
                <el-col :span="18">
                    <div class="source-table">table表</div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
  name: 'resource'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.audit-wrap{
}
.audit-wrap .content-wrap .site-left {
}
</style>
