const blogPosts = document.querySelectorAll('.blog-post')
console.log(blogPosts)

blogPosts.forEach(post => post.addEventListener('mouseover', () => {
  console.log('hello')
}))