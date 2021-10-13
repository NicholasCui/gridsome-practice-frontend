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
        <div v-html="mdToHtml($page.project.content)" />
        <g-image style="width: 100%" :src="`${BASE_URL}${$page.project.cover.url}`"/>
      </div>
    </div>
  </div>
</template>
<page-query>
query ($id: ID!){
	project: strapiProject(id: $id) {
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
</page-query>
<script>
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt()

export default {
  name: 'Project',
  metaInfo() {
    return {
      title: this.$page.project.title
    }
  },
  methods: {
    onClick () {
      this.message = 'Here you go :)'
    },
    mdToHtml (markdown) {
      return md.render(markdown)
    }
  }

}
</script>
