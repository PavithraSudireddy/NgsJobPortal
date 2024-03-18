const jobList = document.getElementById("job-list");
const companyList = document.getElementById("company-list");

// Sample data
const jobs = [
    { title: "Software Engineer", company: "Google", location: "Mountain View, CA" },
    { title: "Web Developer", company: "Facebook", location: "Menlo Park, CA" },
    { title: "Data Scientist", company: "Microsoft", location: "Redmond, WA" },
];

const companies = [
    { name: "Google", industry: "Technology", size: "Large" },
    { name: "Facebook", industry: "Technology", size: "Large" },
    { name: "Microsoft", industry: "Technology", size: "Large" },
];

// Create and append job elements
jobs.forEach(job => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${job.title}</strong> - ${job.company} - ${job.location}`;
    jobList.appendChild(li);
});

// Create and append company elements
companies.forEach(company => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${company.name}</strong> - ${company.industry} - ${company.size}`;
    companyList.appendChild(li);
});