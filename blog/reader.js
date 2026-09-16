// Shows one post:
// 1. Read ?post=<file> out of the URL
// 2. Look that file up in entries/blogs.json, so only listed posts can be opened
// 3. Fetch the markdown file and let marked turn it into HTML

function formatDate(datetime) {
  const d = new Date(datetime);
  if (isNaN(d)) return "";
  const pad = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

async function main() {
  const article = document.getElementById("post");
  const file = new URLSearchParams(window.location.search).get("post");

  if (!file) {
    article.textContent = "No post selected.";
    return;
  }

  let posts;
  try {
    const res = await fetch("entries/blogs.json");
    posts = await res.json();
  } catch (err) {
    article.textContent = "Could not load the post list.";
    return;
  }

  const post = posts.find((p) => p.file === file);
  if (!post) {
    article.textContent = "Post not found.";
    return;
  }

  document.title = `${post.title} - Mark Fox's journal`;
  document.getElementById("post-title").textContent = post.title;
  document.getElementById("post-date").textContent = formatDate(post.datetime);

  const md = await fetch(`entries/${post.file}`);
  if (!md.ok) {
    article.textContent = "Could not load this post.";
    return;
  }

  article.innerHTML = marked.parse(await md.text());
}

main();
