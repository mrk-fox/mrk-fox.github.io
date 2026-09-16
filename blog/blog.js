// Builds the journal index:
// 1. Load the post list from entries/blogs.json
// 2. Sort it so the newest post is on top
// 3. Render one entry per post, each one a link to reader.html?post=<file>

async function loadPosts() {
  const res = await fetch("entries/blogs.json");
  return res.json();
}

function formatDate(datetime) {
  const d = new Date(datetime);
  if (isNaN(d)) return "";
  const pad = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

async function main() {
  const blogs = document.getElementById("blogs");

  let posts;
  try {
    posts = await loadPosts();
  } catch (err) {
    blogs.textContent = "Could not load the post list.";
    return;
  }

  posts.sort((a, b) => new Date(b.datetime) - new Date(a.datetime));

  for (let i = 0; i < posts.length; i++) {
    // The whole entry is the link, so clicking anywhere on it opens the post
    const link = document.createElement("a");
    link.id = `blog-${i}`;
    link.className = "blog-post";
    link.href = `reader.html?post=${encodeURIComponent(posts[i].file)}`;

    if (posts[i].hasThumbnail) {          // only build the thumbnail box when the post actually has one
      const thumbnaildiv = document.createElement("div");
      thumbnaildiv.id = `thumbnail-${i}`;
      thumbnaildiv.className = "blog-thumbnail";
      const img = document.createElement("img");
      img.src = posts[i].thumbnailPath;
      img.alt = "";
      thumbnaildiv.appendChild(img);
      link.appendChild(thumbnaildiv);
    }

    const textholderdiv = document.createElement("div");
    textholderdiv.id = `textholder-blog-${i}`;
    textholderdiv.className = "textholder";

    const datediv = document.createElement("div");
    datediv.id = `date-${i}`;
    datediv.className = "blog-date";
    datediv.textContent = formatDate(posts[i].datetime);

    const titlediv = document.createElement("div");
    titlediv.id = `title-${i}`;
    titlediv.className = "blog-title";
    titlediv.textContent = posts[i].title;

    const subdiv = document.createElement("div");
    subdiv.id = `sub-blog-${i}`;
    subdiv.className = "blog-subtitle";
    subdiv.textContent = posts[i].preview;

    textholderdiv.appendChild(datediv);
    textholderdiv.appendChild(titlediv);
    textholderdiv.appendChild(subdiv);

    link.appendChild(textholderdiv);
    blogs.appendChild(link);
  }
}

main();
