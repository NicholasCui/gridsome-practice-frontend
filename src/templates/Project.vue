<template>
  <div class="project">
    <div class="container">
      <div class="project-header">
        <h1 class="project-title">{{$page.project.title}}</h1>
        <div class="project-info">
          <div class="categories-container">
            <div class="categories">
              <span class="label">Categories</span>
              <span
                v-for="category in $page.project.categories"
                :key="category.name"
                class="category">
                {{category.name}}
              </span>
            </div>
          </div>
          <div class="year-container">
            <span class="label">Year</span>
            <div>{{new Date($page.project.created_at).getFullYear()}}</div>
          </div>
        </div>
      </div>
      <div class="content">
        <template v-html="$page.project.content" />
        <g-image style="width: 100%" :src="`${BASE_URL}${$page.project.cover[0].url}`"/>
      </div>
    </div>
  </div>
</template>
<page-query>
query ($id: ID!){
	project: strapiProjects(id: $id) {
    id,
    title,
    created_at,
    author,
    categories {
      name
    },
    content,
    cover{
      url
    }
  }
}
</page-query
<script>
export default {
  name: 'Project',
  metaInfo () {
    title: this.$page.project.title
  }
}
</script>
