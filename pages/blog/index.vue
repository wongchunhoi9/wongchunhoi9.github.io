<template>
  <div class="markdown-body">
    <h1>frontmatter-markdown-loader-nuxt-sample</h1>
    <ol type="A">
      <li><nuxt-link to="/blog/blog234">Import synchronously</nuxt-link></li>
      <li>
        Import dynamically
        <ul>
          <li><nuxt-link to="/blog/article?name=blog234">akg.md</nuxt-link></li>
          <li><nuxt-link to="/blog/article?name=quruli">quruli.md</nuxt-link></li>
        </ul>
      </li>
      <li><nuxt-link to="/blog/quruli">Run component on markdown</nuxt-link></li>
    </ol>
  </div>
</template>
