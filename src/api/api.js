const apiRequest =
  "https://gzsq4ssh.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22personal%22%5D%20%7B%0A%22name%22%3A%20name%2C%20%20%0A%22roles%22%3A%20roles%2C%0A%22introduction%22%3A%20introduction%2C%0A%22about%22%3A%20about%2C%0A%22skillsHeading%22%3AskillsHeading%2C%0A%22projectsHeading%22%3A%20projectsHeading%2C%0A%22projectsDescription%22%3A%20projectsDescription%2C%0A%22achievementsHeading%22%3AachievementsHeading%2C%0A%22achievementsDescription%22%3AachievementsDescription%2C%0A%22articlesHeading%22%3AarticlesHeading%2C%0A%22articlesDescription%22%3AarticlesDescription%2C%0A%22appsHeading%22%3AappsHeading%2C%0A%22appsDescription%22%3AappsDescription%2C%0A%22otherProjectsHeading%22%3AotherProjectsHeading%2C%0A%22otherProjectsDescription%22%3AotherProjectsDescription%2C%0A%22email%22%3Aemail%2C%0A%22phone%22%3Aphone%2C%0A%22skills%22%3A%20*%5B_type%20%3D%3D%20%22skills%22%5D%7B%0A%20%20%22id%22%3A%20_id%2C%0A%20%20%22title%22%3A%20title%2C%0A%20%20%22image%22%3A%20%20image.asset-%3Eurl%0A%7D%2C%0A%22projects%22%3A%20*%5B_type%20%3D%3D%20%22projects%22%5D%7B%0A%20%20%22id%22%3A%20_id%2C%0A%20%20%22title%22%3A%20title%2C%0A%20%20%22image%22%3A%20image.asset-%3Eurl%2C%0A%20%20%22description%22%3A%20description%2C%0A%20%20%22url%22%3A%20url%0A%7D%2C%0A%22achievements%22%3A%20*%5B_type%20%3D%3D%20%22achievements%22%5D%7B%0A%20%20%22id%22%3A%20_id%2C%0A%20%20%22title%22%3A%20title%2C%0A%20%20%22image%22%3A%20image.asset-%3Eurl%2C%0A%20%20%22description%22%3A%20description%2C%0A%20%20%22url%22%3A%20url%0A%7D%2C%0A%22apps%22%3A%20*%5B_type%20%3D%3D%20%22apps%22%5D%7B%0A%20%20%22id%22%3A%20_id%2C%0A%20%20%22title%22%3A%20title%2C%0A%20%20%22image%22%3A%20image.asset-%3Eurl%2C%0A%20%20%22url%22%3A%20url%0A%7D%2C%0A%22otherProjects%22%3A%20*%5B_type%20%3D%3D%20%22otherProjects%22%5D%7B%0A%20%20%22id%22%3A%20_id%2C%0A%20%20%22title%22%3A%20title%2C%0A%20%20%22image%22%3A%20image.asset-%3Eurl%2C%0A%20%20%22url%22%3A%20url%2C%0A%20%20%22description%22%3A%20description%2C%0A%20%20%22type%22%3A%20type%0A%7D%0A%7D";

export default apiRequest;

/*
*[_type == "personal"] {
"name": name,  
"roles": roles,
"introduction": introduction,
"about": about,
"skillsHeading":skillsHeading,
"projectsHeading": projectsHeading,
"projectsDescription": projectsDescription,
"achievementsHeading":achievementsHeading,
"achievementsDescription":achievementsDescription,
"articlesHeading":articlesHeading,
"articlesDescription":articlesDescription,
"appsHeading":appsHeading,
"appsDescription":appsDescription,
"otherProjectsHeading":otherProjectsHeading,
"otherProjectsDescription":otherProjectsDescription,
"email":email,
"phone":phone,
"skills": *[_type == "skills"]{
  "id": _id,
  "title": title,
  "image":  image.asset->url
},
"projects": *[_type == "projects"]{
  "id": _id,
  "title": title,
  "image": image.asset->url,
  "description": description,
  "url": url
},
"achievements": *[_type == "achievements"]{
  "id": _id,
  "title": title,
  "image": image.asset->url,
  "description": description,
  "url": url
},
"apps": *[_type == "apps"]{
  "id": _id,
  "title": title,
  "image": image.asset->url,
  "url": url
},
"otherProjects": *[_type == "otherProjects"]{
  "id": _id,
  "title": title,
  "image": image.asset->url,
  "url": url,
  "description": description,
  "type": type
}
}
*/
