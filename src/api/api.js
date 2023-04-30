const apiRequest = `
https://gzsq4ssh.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22personal%22%5D%20%7B
    "name": name,
    "roles": roles,
    "introduction": introduction,
    "about": about,
    "skillsHeading": skillsHeading,
    "projectsHeading": projectsHeading,
    "projectsDescription": projectsDescription,
    "achievementsHeading": achievementsHeading,
    "achievementsDescription": achievementsDescription,
    "articlesHeading": articlesHeading,
    "articlesDescription": articlesDescription,
    "appsHeading": appsHeading,
    "appsDescription": appsDescription,
    "otherProjectsHeading": otherProjectsHeading,
    "otherProjectsDescription": otherProjectsDescription,
    "email": email,
    "phone": phone,
    "skills": *[_type == "skills"] {
        "id": _id,
        "title": title,
        "image": image.asset->url
    },
    "projects": *[_type == "projects"] {
        "id": _id,
        "title": title,
        "image": image.asset->url,
        "description": description,
        "url": url,
        "technologies": technologies
    },
    "achievements": *[_type == "achievements"] {
        "id": _id,
        "title": title,
        "image": image.asset->url,
        "description": description,
        "url": url
    },
    "apps": *[_type == "apps"] {
        "id": _id,
        "title": title,
        "image": image.asset->url,
        "url": url
    },
    "otherProjects": *[_type == "otherProjects"] {
        "id": _id,
        "title": title,
        "image": image.asset->url,
        "url": url,
        "description": description,
        "type": type
    },
    "links": *[_type == "links"] {
        "id": _id,
        "title": title,
        "link": link
    }
}

`;
export default apiRequest;
